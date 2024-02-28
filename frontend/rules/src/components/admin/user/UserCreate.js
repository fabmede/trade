import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import CrudCreate from "../../commons/crud/CrudCreate";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function UserCreate() {

  const api = "http://localhost:8090/tradeusers/";
  const routeLink = "/admin/user/search"; 
  const successCreateLink = '/admin/user/detail';
  const navigate = useNavigate();

  const [name, setName] = useState();
  const [email, setEmail] = useState();

  const getData = () => {
    return {
      name: name,
      email: email,
    };
  };

  const callBackCreateSuccess = (res) => {
    
    let tradeUser = {
      tradeUser :  res.data
    }
    navigate(successCreateLink, { state: tradeUser }); 
  }

  return (
    <CrudCreate api={api} getData={getData} routeLink={routeLink}  callBackCreateSuccess={callBackCreateSuccess}> 
      <Form>
        <Form.Group className="mb-3" controlId="tradeUser.emailId">
          <Form.Label size="sm">Email</Form.Label>
          <Form.Control
            size="sm"
            type="text"
            placeholder="Enter with the email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="tradeUser.nameId">
          <Form.Label size="sm">Name</Form.Label>
          <Form.Control
            size="sm"
            type="text"
            placeholder="Enter with the name"
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>
      </Form>
    </CrudCreate>
  );
}

export default UserCreate;
