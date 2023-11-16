import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Table from "react-bootstrap/Table";
import axios from "axios";
import React, { useState } from "react";
import { ButtonGroup } from "react-bootstrap";
import { BsEraserFill, BsFillPlusSquareFill, BsSearch } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../../../commons/utils/AppContext";

function FunctionalitySearch() {
  
  const [functionalities, setFunctionalities] = useState([]);
  const {getUserLooged} = useContext(AppContext);

  const clearSearch = () => {
    setFunctionalities([]);
  }


  const getTradeFunctionalities = () => {
    console.log("Token", getUserLooged().user.access_token);

    axios
      .get(`http://localhost:8090/tradefunctionalities/`, {
        headers: {
          Authorization: `Bearer ${getUserLooged().user.access_token}`,
          Accept: "application/json",
        },
      })
      .then((res) => {
        console.log("Success call");
        console.log(res.data);
        setFunctionalities(res.data);
      })
      .catch((err) => {
        console.log("Error call");
        console.log(err);
      });
  };

  return (
    <Form >
      <Form.Group className="mb-3"  controlId="functionality.nameId">
        <Form.Label   size="sm">Name</Form.Label>
        <Form.Control size="sm" type="text" placeholder="Enter name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="functionality.descriptionId">
        <Form.Label size="sm">Description</Form.Label>
        <Form.Control size="sm" type="text" placeholder="Enter description" />
      </Form.Group>

      <ButtonGroup size="sm" >
        <Button variant="primary" type="button" onClick={getTradeFunctionalities}> <BsSearch/>Search</Button>
        <Button variant="primary" type="link" href="/admin/functionality/create" >  <BsFillPlusSquareFill/> Create</Button>
        <Button variant="primary" type="button" onClick={clearSearch} >  <BsEraserFill/> Clear </Button>        
      </ButtonGroup>
      <hr />

      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>-</th>
            <th>Name</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {functionalities.map((functionality) => (
            <tr key={functionality.id}>
              
              <td><Link to={'/admin/functionality/edit'} state={{functionality}}> Edit</Link></td>
              <td>{functionality.name}</td>
              <td>{functionality.description}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Form>
  );
}

export default FunctionalitySearch;
