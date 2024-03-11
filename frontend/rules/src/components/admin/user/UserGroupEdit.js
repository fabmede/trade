import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import CrudEdit from "../../commons/crud/CrudEdit";
import Table from "../../commons/Table";
import { Button, ButtonGroup, Form, Modal } from "react-bootstrap";
import { BsFillPlusSquareFill } from "react-icons/bs";
import AxiosHttp from "../../../commons/utils/AxiosHttpInterceptor";
import FormImputMultipleSelect from "../../commons/FormImputMultipleSelect";
import { element } from "prop-types";

function UserGroupEdit(props) {
  const routeLink = "/admin/user/search";
  const tradeUserApi = "http://localhost:8090/tradeusers/";
  const tradeGroupApi = "http://localhost:8090/tradegroups/";
  const currentTradeUser = props.tradeUser;

  const [tradeUserGroups, setTradeUserGroups] = useState();
  const [tradeGroups, setTradeGroups] = useState();
  const [showSaveConfirm, setShowSaveConfirm] = useState(false);

  const handleSaveClose = () => setShowSaveConfirm(false);
  const handleSaveShow = () => setShowSaveConfirm(true);
  const axiosHttp = AxiosHttp();
  const [editObject, setEditObject] = useState({});

  useEffect(() => {
    loadTradeUserGroup();
    loadTradeGroups();
  }, []);

  const loadTradeUserGroup = () => {
    axiosHttp
      .get(tradeUserApi + currentTradeUser.email + "/tradeUserTradeGroups")
      .then((res) => {
        setTradeUserGroups(res.data);
      })
      .catch((err) => {
        console.error("Error call " + tradeUserApi, err);
      })
      .finally(() => {});
  };

  const loadTradeGroups = () => {
    axiosHttp
      .get(tradeGroupApi)
      .then((res) => {
        setTradeGroups(res.data);
      })
      .catch((err) => {
        console.error("Error call " + tradeGroupApi, err);
      })
      .finally(() => {
        console.debug("Finally call " + tradeGroupApi);
      });
  };

  const onClickRemoveTradeUserGroup = (pCurrentTradeUser) => {
    axiosHttp
      .delete(
        tradeUserApi +
          pCurrentTradeUser.tradeUserDto.email +
          "/tradeUserTradeGroups",
        { data: pCurrentTradeUser }
      )
      .then((res) => {
        setTradeUserGroups((oldValues) => {
          return oldValues.filter((element) => {
            let elementId = "_" + element.tradeGroupDto.id;
            let parameterId = "_" + pCurrentTradeUser.tradeGroupDto.id;
            return parameterId !== elementId;
          });
        });
      })
      .catch((err) => {
        console.error("Error delete", err);
      })
      .finally(() => {
        console.log("Finally delete");
      });
  };

  const onClickSaveTradeUserGroup = () => {
    console.log("editObject.group", editObject.group);

    let listTradeUserTradeGroupDto = [];
    editObject.group.forEach((element) => {
      listTradeUserTradeGroupDto.push({
        tradeUserDto: {
          email: currentTradeUser.email,
        },
        tradeGroupDto: {
          id: element.id,
        },
      });
    });


    axiosHttp
      .put(
        tradeUserApi + currentTradeUser.email + "/tradeUserTradeGroups",
        listTradeUserTradeGroupDto
      )
      .then((res) => {

        res.data.forEach(element => tradeUserGroups.push(element))
        setShowSaveConfirm(false);
      })
      .catch((err) => {
        console.error("Error save", err);
      })
      .finally(() => {
        console.log("Finally save");
      });
  };

  const columns = [{ header: "Group", field: "tradeGroupDto.name" }];

  return (
    <>
      <Table
        data={tradeUserGroups ? tradeUserGroups : []}
        columns={columns}
        hideCrudTableButonDetail={true}
        hideCrudTableButonEdit={true}
        callBackOnClickRemoveButton={onClickRemoveTradeUserGroup}
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
            onClickSave={onClickSaveTradeUserGroup}
          >
            <Form>
              <FormImputMultipleSelect
                label="Group"
                attributeName="group"
                setObjectAttributes={setEditObject}
                objectAttributes={editObject}
                objectList={tradeGroups}
                objectListValue="id"
                objectListShow="description"
              ></FormImputMultipleSelect>{" "}
            </Form>
          </CrudEdit>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </>
  );
}

export default UserGroupEdit;
