import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import CrudCreate from "../../commons/crud/CrudCreate";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import FormImputText from "../../commons/FormImputText";

function BusinessCreate() {
  const api = "http://localhost:8090/tradebusiness/";
  const routeLink = "/registers/business/search";
  const successCreateLink = "/registers/business/detail";
  const navigate = useNavigate();
  const [createObject, setCreateObject] = useState({});

  const getData = () => {
    return createObject;
  };

  const callBackCreateSuccess = (res) => {
    let tradeBusiness = {
      tradeBusiness: res.data,
    };
    navigate(successCreateLink, { state: tradeBusiness });
  };

  return (
    <CrudCreate
      api={api}
      getData={getData}
      routeLink={routeLink}
      callBackCreateSuccess={callBackCreateSuccess}
    >
      <Form>
        <FormImputText
          label="Name"
          placeholder="Enter with the name"
          attributeName="name"
          setObjectAttributes={setCreateObject}
          objectAttributes={createObject}
        ></FormImputText>

        <FormImputText
          label="Description"
          placeholder="Enter with the description"
          attributeName="description"
          setObjectAttributes={setCreateObject}
          objectAttributes={createObject}
        ></FormImputText>
      </Form>
    </CrudCreate>
  );
}

export default BusinessCreate;
