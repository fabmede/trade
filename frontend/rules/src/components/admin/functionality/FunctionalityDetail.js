import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import { useLocation } from "react-router-dom";
import CrudDetail from "../../commons/crud/CrudDetail";
import { useRef } from "react";

function FunctionalityDetail() {

  const routeLink = "/admin/functionality/search"; 
  const api = 'http://localhost:8090/tradefunctionalities/';
  const location = useLocation();
  const id = location.state.functionality.id; 
  const name = location.state.functionality.name;
  const description = location.state.functionality.description;

  const getData = () => {
    return {
      name : name,
      description : description
    }
  }


  return (
    <>
      <CrudDetail api={api} id={id} getData={getData} routeLink={routeLink}>
        <Form>
          <Form.Group className="mb-3" controlId="functionality.nameId">
            <Form.Label size="sm">Name</Form.Label>
            <Form.Control
              size="sm"
              type="text"
              placeholder="Enter name"
              value={name}
              readOnly
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="functionality.descriptionId">
            <Form.Label size="sm">Description</Form.Label>
            <Form.Control
              size="sm"
              type="text"
              placeholder="Enter description"
              value={description}
              readOnly
            />
          </Form.Group>
        </Form>
      </CrudDetail>
    </>
  );
}

export default FunctionalityDetail;
