import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import CrudEdit from "../../commons/crud/CrudEdit";
import FormImputText from "../../commons/FormImputText";
import { Tab, Tabs } from "react-bootstrap";
import UserGroupEdit from "./UserGroupEdit";
import UserFunctionalityEdit from "./UserFunctionalityEdit";

function UserEdit() {
  const routeLink = "/admin/user/search";
  const api = "http://localhost:8090/tradeusers/";
  const location = useLocation();
  const id = location.state.tradeUser.email;
  const [editObject, setEditObject] = useState(location.state.tradeUser);

  const callBackEditSuccess = (callBackEditSuccess) => {
    console.log("Calling callBackEditSuccess");
  };

  const getData = () => {
    return editObject;
  };

  return (
    <>
      <Tabs
        defaultActiveKey="header"
        id="uncontrolled-tab-example"
        className="mb-3"
      >
        <Tab eventKey="header" title="Header">
          <CrudEdit
            api={api}
            id={id}
            getData={getData}
            routeLink={routeLink}
            callBackEditSuccess={callBackEditSuccess}
          >
            <Form>
              <FormImputText
                label="Email"
                placeholder="Enter with the email"
                attributeName="email"
                setObjectAttributes={setEditObject}
                objectAttributes={editObject}
              ></FormImputText>

              <FormImputText
                label="Name"
                placeholder="Enter with the name"
                attributeName="name"
                setObjectAttributes={setEditObject}
                objectAttributes={editObject}
              ></FormImputText>
            </Form>
          </CrudEdit>
        </Tab>
        <Tab eventKey="roleGroup" title="Group / Role">
          <UserGroupEdit tradeUser={location.state.tradeUser}></UserGroupEdit>
        </Tab>
        <Tab eventKey="roleFunctionality" title="Functionality / Role">
          <UserFunctionalityEdit tradeUser={location.state.tradeUser}></UserFunctionalityEdit>
        </Tab>
      </Tabs>
    </>
  );
}

export default UserEdit;
