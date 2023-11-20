import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import CrudEdit from "../../commons/crud/CrudEdit";

function RoleEdit() {

  const routeLink = "/admin/role/search"; 
  const api = 'http://localhost:8090/traderoles/';
  const location = useLocation();
  const id = location.state.tradeRole.id; 
  const [name, setName] = useState(location.state.tradeRole.name);
  const [description, setDescription] = useState(
    location.state.tradeRole.description
  );

  const getData = () => {
    return {
      name : name,
      description : description
    }
  }

  const callBackEditSuccess = (callBackEditSuccess)  => {
    console.log('Calling callBackEditSuccess');
  }
  return (
    <>
      <CrudEdit api={api} id={id} getData={getData} routeLink={routeLink} callBackEditSuccess={callBackEditSuccess}>
        <Form>
          <Form.Group className="mb-3" controlId="tradeRole.nameId">
            <Form.Label size="sm">Name</Form.Label>
            <Form.Control
              size="sm"
              type="text"
              placeholder="Enter name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="tradeRole.descriptionId">
            <Form.Label size="sm">Description</Form.Label>
            <Form.Control
              size="sm"
              type="text"
              placeholder="Enter description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </Form.Group>
        </Form>
      </CrudEdit>
    </>
  );
}

export default RoleEdit;
