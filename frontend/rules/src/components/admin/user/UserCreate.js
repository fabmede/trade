import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import CrudCreate from "../../commons/crud/CrudCreate";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import FormImputText from "../../commons/FormImputText";

function UserCreate() {
  const api = "http://localhost:8090/tradeusers/";
  const routeLink = "/admin/user/search";
  const successCreateLink = "/admin/user/detail";
  const navigate = useNavigate();
  const [createObject, setCreateObject] = useState({});

  const getData = () => {
    return {
      name: createObject.name,
      email: createObject.email,
    };
  };

  const callBackCreateSuccess = (res) => {
    let tradeUser = {
      tradeUser: res.data,
    };
    navigate(successCreateLink, { state: tradeUser });
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
          label="Email"
          placeholder="Enter with the email"
          attributeName="email"
          setObjectAttributes={setCreateObject}
          objectAttributes={createObject}
        ></FormImputText>

        <FormImputText
          label="Name"
          placeholder="Enter with the name"
          attributeName="name"
          setObjectAttributes={setCreateObject}
          objectAttributes={createObject}
        ></FormImputText>
      </Form>
    </CrudCreate>
  );
}

export default UserCreate;
