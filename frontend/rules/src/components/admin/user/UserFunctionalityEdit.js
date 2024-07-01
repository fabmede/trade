import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import CrudEdit from "../../commons/crud/CrudEdit";
import Table from "../../commons/Table";
import { Button, ButtonGroup, Form, Modal } from "react-bootstrap";
import { BsFillPlusSquareFill } from "react-icons/bs";
import AxiosHttp from "../../../commons/utils/AxiosHttpInterceptor";
import FormImputSelect from "../../commons/FormImputSelect";

function UserFunctionalityEdit(props) {

  const routeLink = "/admin/user/search";
  const tradeUserApi = "http://localhost:8090/tradeusers/";
  const tradeFunctionalityApi = "http://localhost:8090/tradefunctionalities/";
  const tradeRolesApi = "http://localhost:8090/traderoles/";
  const currentTradeUser = props.tradeUser;

  const [tradeUserFunctionalitiesRoles, setTradeUserFunctionalitiesRoles] = useState();
  const [showSaveConfirm, setShowSaveConfirm] = useState(false);

  const handleSaveClose = () => setShowSaveConfirm(false);
  const handleSaveShow = () => setShowSaveConfirm(true);
  const axiosHttp = AxiosHttp();
  const [editObject, setEditObject] = useState({});

  useEffect(() => {
    loadTradeUserTradeRoleFuncs();
  }, []);


  const loadTradeUserTradeRoleFuncs = () => {
    axiosHttp
      .get(tradeUserApi + currentTradeUser.email + "/tradeUserTradeRoleFuncs")
      .then((res) => {
        setTradeUserFunctionalitiesRoles(res.data);
      })
      .catch((err) => {
        console.error("Error call " + tradeUserApi, err);
      })
      .finally(() => {});
  };

  
  const onClickRemoveTradeUserFunctionalitiesRoles = (pCurrentTradeUser) => {
    axiosHttp
      .delete(
        tradeUserApi +
          pCurrentTradeUser.tradeUserDto.email +
          "/tradeUserTradeRoleFuncs",
        { data: pCurrentTradeUser }
      )
      .then((res) => {
        const deleteByIds = (tradeFunctionalityDtoId, tradeRoleDtoId) => {
          setTradeUserFunctionalitiesRoles((oldValues) => {
            return oldValues.filter((element) => {
              let elementId =
                element.tradeFunctionalityDto.id +
                "_" +
                element.tradeRoleDto.id;
              let parameterId = tradeFunctionalityDtoId + "_" + tradeRoleDtoId;
              return parameterId !== elementId;
            });
          });
        };

        deleteByIds(
          pCurrentTradeUser.tradeFunctionalityDto.id,
          pCurrentTradeUser.tradeRoleDto.id
        );
      })
      .catch((err) => {
        console.error("Error delete", err);
      })
      .finally(() => {
        console.log("Finally delete");
      });
  };

  const onClickSaveTradeUserFunctionalitiesRoles = () => {
    var tradeUserTradeRoleFuncDto = {
      tradeUserDto: {
        email: currentTradeUser.email,
      },
      tradeFunctionalityDto: {
        id: editObject.functionality.id,
      },
      tradeRoleDto: {
        id: editObject.role.id,
      },
    };

    axiosHttp
      .put(
        tradeUserApi + currentTradeUser.email + "/tradeUserTradeRoleFuncs",
        tradeUserTradeRoleFuncDto
      )
      .then((res) => {
        tradeUserFunctionalitiesRoles.push(res.data);
        setShowSaveConfirm(false);
      })
      .catch((err) => {
        console.error("Error save", err);
      })
      .finally(() => {
        console.log("Finally save");
      });
  };

  const columns = [
    { header: "Functionality", field: "tradeFunctionalityDto.name" },
    { header: "Role", field: "tradeRoleDto.name" },
  ];
  
  return (
    <>
      <Table
        data={tradeUserFunctionalitiesRoles ? tradeUserFunctionalitiesRoles : []}
        columns={columns}
        hideCrudTableButonDetail={true}
        hideCrudTableButonEdit={true}
        callBackOnClickRemoveButton={onClickRemoveTradeUserFunctionalitiesRoles}
      ></Table>
      <ButtonGroup size="sm">
        <Button variant="primary" type="link" onClick={handleSaveShow}>
          {" "}
          <BsFillPlusSquareFill /> Add Item
        </Button>{" "}
      </ButtonGroup>

      <Modal show={showSaveConfirm} onHide={handleSaveClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add / Edit </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <CrudEdit
            api={tradeUserApi}
            id={currentTradeUser.email}
            getData={currentTradeUser}
            routeLink={routeLink}
            hiddenButtonCrudDelete={true}
            hiddenButtonCrudBackToSearch={true}
            onClickSave={onClickSaveTradeUserFunctionalitiesRoles}
          >
            <Form>
              <FormImputSelect
                label="Functionality"
                attributeName="functionality"
                setObjectAttributes={setEditObject}
                objectAttributes={editObject}
                apiLoadObjects={tradeFunctionalityApi}
                objectListShow="description"
              ></FormImputSelect>

              <FormImputSelect
                label="Role"
                attributeName="role"
                setObjectAttributes={setEditObject}
                objectAttributes={editObject}
                apiLoadObjects={tradeRolesApi}
                objectListShow="description"
              ></FormImputSelect>

            </Form>
          </CrudEdit>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </>    
  );
}

export default UserFunctionalityEdit;
