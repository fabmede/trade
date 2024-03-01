import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import CrudCreate from "../../commons/crud/CrudCreate";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import FormImputText from "../../commons/FormImputText";

function GroupCreate() {
  const api = "http://localhost:8090/tradegroups/";
  const routeLink = "/admin/group/search";
  const successCreateLink = "/admin/group/detail";
  const navigate = useNavigate();

  const [createObject, setCreateObject] = useState({});

  const getData = () => {
    return createObject;
  };

  const callBackCreateSuccess = (res) => {
    let tradeGroup = {
      tradeGroup: res.data,
    };
    navigate(successCreateLink, { state: tradeGroup });
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
          label="Name"
          placeholder="Enter with the description"
          attributeName="description"
          setObjectAttributes={setCreateObject}
          objectAttributes={createObject}
        ></FormImputText>
      </Form>
    </CrudCreate>
  );
}

export default GroupCreate;
