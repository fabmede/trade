import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import { useLocation } from "react-router-dom";
import CrudDetail from "../../commons/crud/CrudDetail";
import GroupFunctionalityDetail from "./GroupFunctionalityDetail";
import { Tab, Tabs } from "react-bootstrap";

function GroupDetail() {
  const routeLink = "/admin/group/search";
  const api = "http://localhost:8090/tradegroups/";
  const location = useLocation();
  const id = location.state.tradeGroup.id;
  const name = location.state.tradeGroup.name;
  const description = location.state.tradeGroup.description;

  const getData = () => {
    return {
      name: name,
      description: description,
    };
  };

  return (
    <>
      <Tabs
        defaultActiveKey="header"
        id="uncontrolled-tab-example"
        className="mb-3"
      >
        <Tab eventKey="header" title="Header">
          <CrudDetail api={api} id={id} getData={getData} routeLink={routeLink}>
            <Form>
              <Form.Group className="mb-3" controlId="tradeGroup.nameId">
                <Form.Label size="sm">Name</Form.Label>
                <Form.Control
                  size="sm"
                  type="text"
                  placeholder="Enter name"
                  value={name}
                  readOnly
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="tradeGroup.descriptionId">
                <Form.Label size="sm">Description</Form.Label>
                <Form.Control
                  size="sm"
                  type="text"
                  placeholder="Enter description"
                  value={description}
                  readOnly
                />
              </Form.Group>
            </Form>
          </CrudDetail>
        </Tab>
        <Tab eventKey="roleFunctionality" title="Roles / Functionality">
          <GroupFunctionalityDetail
            tradeGroup={location.state.tradeGroup}
          ></GroupFunctionalityDetail>
        </Tab>
      </Tabs>
    </>
  );
}

export default GroupDetail;
