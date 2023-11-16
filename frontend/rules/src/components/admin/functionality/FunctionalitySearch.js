import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import Table from "react-bootstrap/Table";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import CrudSearch from "../../commons/crud/CrudSearch";

function FunctionalitySearch() {
  const [functionalities, setFunctionalities] = useState([]);

  const callBackSearchSuccess = (callBackSearchSuccessRes) => {
    setFunctionalities(callBackSearchSuccessRes.data);
  };

  const callBackSearchError = (callBackSearchError) => {
    console.log("callBackSearchError", callBackSearchError);
  };

  const callBackSearchClear = () => {
    setFunctionalities([]);
  };

  return (
    <CrudSearch
      api={"http://localhost:8090/tradefunctionalities/"}
      callBackSearchSuccess={callBackSearchSuccess}
      callBackSearchClear={callBackSearchClear}
      callBackSearchError={callBackSearchError}
    >
      <CrudSearch.Search>
        <Form.Group className="mb-3" controlId="functionality.nameId">
          <Form.Label size="sm">Name</Form.Label>
          <Form.Control size="sm" type="text" placeholder="Enter name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="functionality.descriptionId">
          <Form.Label size="sm">Description</Form.Label>
          <Form.Control size="sm" type="text" placeholder="Enter description" />
        </Form.Group>
      </CrudSearch.Search>

      <CrudSearch.Result>
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
                <td>
                  <Link
                    to={"/admin/functionality/edit"}
                    state={{ functionality }}
                  >
                    {" "}
                    Edit
                  </Link>
                </td>
                <td>{functionality.name}</td>
                <td>{functionality.description}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </CrudSearch.Result>
    </CrudSearch>
  );
}

export default FunctionalitySearch;
