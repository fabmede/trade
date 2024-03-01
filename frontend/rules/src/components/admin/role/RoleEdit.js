import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import CrudEdit from "../../commons/crud/CrudEdit";
import FormImputText from "../../commons/FormImputText";

function RoleEdit() {
  const routeLink = "/admin/role/search";
  const api = "http://localhost:8090/traderoles/";
  const location = useLocation();
  const id = location.state.tradeRole.id;
  const [editObject, setEditObject] = useState(location.state.tradeRole);

  const getData = () => {
    return editObject;
  };

  const callBackEditSuccess = (callBackEditSuccess) => {
    console.log("Calling callBackEditSuccess");
  };
  return (
    <>
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
    </>
  );
}

export default RoleEdit;
