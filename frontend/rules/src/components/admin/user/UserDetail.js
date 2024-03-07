import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import { useLocation } from "react-router-dom";
import CrudDetail from "../../commons/crud/CrudDetail";
import FormImputText from "../../commons/FormImputText";
import { Tab, Tabs } from "react-bootstrap";

function UserDetail() {
  const routeLink = "/admin/user/search";
  const api = "http://localhost:8090/tradeusers/";
  const location = useLocation();
  const id = location.state.tradeUser.email;
  const objectDetail = location.state.tradeUser;

  return (
    <>
      <Tabs
        defaultActiveKey="header"
        id="uncontrolled-tab-example"
        className="mb-3"
      >
        <Tab eventKey="header" title="Header">
          <CrudDetail api={api} id={id} routeLink={routeLink}>
            <Form>
              <FormImputText
                label="Email"
                placeholder="Enter with the email"
                attributeName="email"
                objectAttributes={objectDetail}
              ></FormImputText>

              <FormImputText
                label="Name"
                placeholder="Enter with the name"
                attributeName="name"
                objectAttributes={objectDetail}
              ></FormImputText>
            </Form>
          </CrudDetail>
        </Tab>
        <Tab eventKey="roleGroup" title="Group / Role">
          Role Group
        </Tab>
        <Tab eventKey="roleFunctionality" title="Functionality / Role">
          Functionality Group
        </Tab>
      </Tabs>
    </>
  );
}

export default UserDetail;
