import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import CrudEdit from "../../commons/crud/CrudEdit";

function UserEdit() {

  const routeLink = "/admin/user/search"; 
  const api = 'http://localhost:8090/tradeusers/';
  const location = useLocation();
  const id = location.state.tradeUser.email; 
  const [name, setName] = useState(location.state.tradeUser.name);
  const [email, setEmail] = useState(
    location.state.tradeUser.email
  );

  const getData = () => {
    return {
      name : name,
      email : email
    }
  }

  const callBackEditSuccess = (callBackEditSuccess)  => {
    console.log('Calling callBackEditSuccess');
  }
  return (
    <>
      <CrudEdit api={api} id={id} getData={getData} routeLink={routeLink} callBackEditSuccess={callBackEditSuccess}>
        <Form>
          <Form.Group className="mb-3" controlId="tradeUser.emailId">
            <Form.Label size="sm">Email</Form.Label>
            <Form.Control
              size="sm"
              type="text"
              placeholder="Enter with the email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="tradeUser.nameId">
            <Form.Label size="sm">Name</Form.Label>
            <Form.Control
              size="sm"
              type="text"
              placeholder="Enter with the name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>
        </Form>
      </CrudEdit>
    </>
  );
}

export default UserEdit;
