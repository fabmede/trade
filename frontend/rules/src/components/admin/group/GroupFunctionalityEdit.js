import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import CrudEdit from "../../commons/crud/CrudEdit";
import Table from "../../commons/Table";
import { Button, ButtonGroup, Form, Modal } from "react-bootstrap";
import { BsFillPlusSquareFill } from "react-icons/bs";
import AxiosHttp from "../../../commons/utils/AxiosHttpInterceptor";
import FormImputSelect from "../../commons/FormImputSelect";

function GroupFunctionalityEdit(props) {
  const routeLink = "/admin/group/search";
  const tradeGroupsApi = "http://localhost:8090/tradegroups/";
  const tradeFunctionalityApi = "http://localhost:8090/tradefunctionalities/";
  const tradeRolesApi = "http://localhost:8090/traderoles/";
  const currentTradeGroup = props.tradeGroup;

  const [tradeFunctionalitiesRoles, setTradeFunctionalitiesRoles] = useState();
  const [showSaveConfirm, setShowSaveConfirm] = useState(false);

  const handleSaveClose = () => setShowSaveConfirm(false);
  const handleSaveShow = () => setShowSaveConfirm(true);
  const axiosHttp = AxiosHttp();
  const [editObject, setEditObject] = useState({});

  useEffect(() => {
    loadTradeGroupTradeRolesFunctionaliesRoles();
  }, []);

  const loadTradeGroupTradeRolesFunctionaliesRoles = () => {
    axiosHttp
      .get(tradeGroupsApi + currentTradeGroup.id + "/tradeGroupTradeRoleFuncs")
      .then((res) => {
        setTradeFunctionalitiesRoles(res.data);
      })
      .catch((err) => {
        console.error("Error call " + tradeGroupsApi, err);
      })
      .finally(() => {});
  };


  const columns = [
    { header: "Functionality", field: "tradeFunctionalityDto.name" },
    { header: "Role", field: "tradeRoleDto.name" },
  ];

  const onClickSaveTradeFunctionalitiesRoles = () => {
    var tradeGroupTradeRoleFuncDto = {
      tradeGroupDto: {
        id: currentTradeGroup.id,
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
        tradeGroupsApi + currentTradeGroup.id + "/tradeGroupTradeRoleFuncs",
        tradeGroupTradeRoleFuncDto
      )
      .then((res) => {
        tradeFunctionalitiesRoles.push(res.data);
        setShowSaveConfirm(false);
      })
      .catch((err) => {
        console.error("Error save", err);
      })
      .finally(() => {
        console.log("Finally save");
      });
  };

  const onClickRemoveTradeFunctionalitiesRoles = (pCurrentTradeGroup) => {
    axiosHttp
      .delete(
        tradeGroupsApi +
          pCurrentTradeGroup.tradeGroupDto.id +
          "/tradeGroupTradeRoleFuncs",
        { data: pCurrentTradeGroup }
      )
      .then((res) => {
        const deleteByIds = (tradeFunctionalityDtoId, tradeRoleDtoId) => {
          setTradeFunctionalitiesRoles((oldValues) => {
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
          pCurrentTradeGroup.tradeFunctionalityDto.id,
          pCurrentTradeGroup.tradeRoleDto.id
        );
      })
      .catch((err) => {
        console.error("Error delete", err);
      })
      .finally(() => {
        console.log("Finally delete");
      });
  };

  return (
    <>
      <Table
        data={tradeFunctionalitiesRoles ? tradeFunctionalitiesRoles : []}
        columns={columns}
        hideCrudTableButonDetail={true}
        hideCrudTableButonEdit={true}
        callBackOnClickRemoveButton={onClickRemoveTradeFunctionalitiesRoles}
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
            api={tradeGroupsApi}
            id={currentTradeGroup.id}
            getData={currentTradeGroup}
            routeLink={routeLink}
            hiddenButtonCrudDelete={true}
            hiddenButtonCrudBackToSearch={true}
            onClickSave={onClickSaveTradeFunctionalitiesRoles}
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

export default GroupFunctionalityEdit;
