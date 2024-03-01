import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import { useLocation } from "react-router-dom";
import CrudDetail from "../../commons/crud/CrudDetail";
import GroupFunctionalityDetail from "./GroupFunctionalityDetail";
import { Tab, Tabs } from "react-bootstrap";
import FormImputText from "../../commons/FormImputText";

function GroupDetail() {
  const routeLink = "/admin/group/search";
  const api = "http://localhost:8090/tradegroups/";
  const location = useLocation();
  const id = location.state.tradeGroup.id;
  const detailObject = location.state.tradeGroup;

  const getData = () => {
    return detailObject;
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
              <FormImputText
                label="Name"
                placeholder="Enter with the name"
                attributeName="name"
                objectAttributes={detailObject}
              ></FormImputText>

              <FormImputText
                label="Name"
                placeholder="Enter with the description"
                attributeName="description"
                objectAttributes={detailObject}
              ></FormImputText>
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
