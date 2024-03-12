import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import CrudEdit from "../../commons/crud/CrudEdit";
import FormImputText from "../../commons/FormImputText";
import { Tab, Tabs } from "react-bootstrap";
import BusinessSourceEdit from "./BusinessSourceEdit";

function BusinessEdit() {
  const api = "http://localhost:8090/tradebusiness/";
  const routeLink = "/registers/business/search";
  const location = useLocation();
  const id = location.state.tradeBusiness.id;
  const [editObject, setEditObject] = useState(location.state.tradeBusiness);

  const getData = () => {
    return editObject;
  };

  const callBackEditSuccess = (callBackEditSuccess) => {
    console.log("Calling callBackEditSuccess");
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
        <Tab eventKey="source" title="Source">
          <BusinessSourceEdit></BusinessSourceEdit>
        </Tab>
      </Tabs>
    </>
  );
}

export default BusinessEdit;
