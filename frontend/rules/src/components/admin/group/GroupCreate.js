import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import CrudCreate from "../../commons/crud/CrudCreate";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function GroupCreate() {

  const api = "http://localhost:8090/tradegroups/";
  const routeLink = "/admin/group/search"; 
  const successCreateLink = '/admin/group/detail';
  const navigate = useNavigate();

  const [name, setName] = useState();
  const [description, setDescription] = useState();

  const getData = () => {
    return {
      name: name,
      description: description,
    };
  };

  const callBackCreateSuccess = (res) => {
    let tradeGroup = {
      tradeGroup :  res.data
    }
    navigate(successCreateLink, { state: tradeGroup }); 
  }

  return (
    <CrudCreate api={api} getData={getData} routeLink={routeLink}  callBackCreateSuccess={callBackCreateSuccess}> 
      <Form>
        <Form.Group className="mb-3" controlId="tradeGroup.nameId">
          <Form.Label size="sm">Name</Form.Label>
          <Form.Control
            size="sm"
            type="text"
            placeholder="Enter name"
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="tradeGroup.descriptionId">
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

export default GroupCreate;
