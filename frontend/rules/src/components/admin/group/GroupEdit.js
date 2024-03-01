import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import CrudEdit from "../../commons/crud/CrudEdit";
import { Tab, Tabs } from "react-bootstrap";
import GroupFunctionalityEdit from "./GroupFunctionalityEdit";
import FormImputText from "../../commons/FormImputText";

function GroupEdit() {
  const routeLink = "/admin/group/search";
  const api = "http://localhost:8090/tradegroups/";
  const location = useLocation();
  const id = location.state.tradeGroup.id;
  const [editObject, setEditObject] = useState(location.state.tradeGroup);

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
          <CrudEdit api={api} id={id} getData={getData} routeLink={routeLink}>
            <Form>
              <FormImputText
                label="Name"
                placeholder="Enter with the name"
                attributeName="name"
                setObjectAttributes={setEditObject}
                objectAttributes={editObject}
              ></FormImputText>

              <FormImputText
                label="Name"
                placeholder="Enter with the description"
                attributeName="description"
                setObjectAttributes={setEditObject}
                objectAttributes={editObject}
              ></FormImputText>
            </Form>
          </CrudEdit>
        </Tab>
        <Tab eventKey="roleFunctionality" title="Roles / Functionality">
          <GroupFunctionalityEdit
            tradeGroup={location.state.tradeGroup}
          ></GroupFunctionalityEdit>
        </Tab>
      </Tabs>
      <hr />
    </>
  );
}

export default GroupEdit;
