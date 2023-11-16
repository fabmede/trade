import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import CrudCreate from "../../commons/crud/CrudCreate";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function FunctionalityCreate() {

  const api = "http://localhost:8090/tradefunctionalities/";
  const routeLink = "/admin/functionality/search"; 
  const successCreateLink = '/admin/functionality/detail';
  const navigate = useNavigate();

  const [name, setName] = useState();
  const [description, setDescription] = useState();

  const getData = () => {
    return {
      name: name,
      description: description,
    };
  };

  const successCreate = (res) => {
    let functionality = {
      functionality :  res.data
    }
    navigate(successCreateLink, { state: functionality }); 
  }

  return (
    <CrudCreate api={api} getData={getData} routeLink={routeLink}  successCreate={successCreate}> 
      <Form>
        <Form.Group className="mb-3" controlId="functionality.nameId">
          <Form.Label size="sm">Name</Form.Label>
          <Form.Control
            size="sm"
            type="text"
            placeholder="Enter name"
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="functionality.descriptionId">
          <Form.Label size="sm">Description</Form.Label>
          <Form.Control
            size="sm"
            type="text"
            placeholder="Enter description"
            onChange={(e) => setDescription(e.target.value)}
          />
        </Form.Group>
      </Form>
    </CrudCreate>
  );
}

export default FunctionalityCreate;
