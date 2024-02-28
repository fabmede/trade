import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import { useLocation } from "react-router-dom";
import CrudDetail from "../../commons/crud/CrudDetail";

function UserDetail() {

  const routeLink = "/admin/user/search"; 
  const api = 'http://localhost:8090/tradeusers/';
  const location = useLocation();
  const id = location.state.tradeUser.email; 
  const email = location.state.tradeUser.email;
  const name = location.state.tradeUser.name;

  const getData = () => {
    return {
      email : email,
      name : name
    }
  }


  return (
    <>
      <CrudDetail api={api} id={id} getData={getData} routeLink={routeLink}>
        <Form>
          <Form.Group className="mb-3" controlId="tradeUser.emailId">
            <Form.Label size="sm">Email</Form.Label>
            <Form.Control
              size="sm"
              type="text"
              placeholder="Enter with the name"
              value={email}
              readOnly
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="tradeUser.nameId">
            <Form.Label size="sm">Name</Form.Label>
            <Form.Control
              size="sm"
              type="text"
              placeholder="Enter with the name"
              value={name}
              readOnly
            />
          </Form.Group>
        </Form>
      </CrudDetail>
    </>
  );
}

export default UserDetail;
