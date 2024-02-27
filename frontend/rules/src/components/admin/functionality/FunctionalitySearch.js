import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import React, { useState } from "react";
import CrudSearch from "../../commons/crud/CrudSearch";
import { useNavigate } from "react-router-dom";

function FunctionalitySearch() {
  const api = "http://localhost:8090/tradefunctionalities/";
  const [functionalities, setFunctionalities] = useState([]);
  const navigate = useNavigate();

  const columns = [
    { header: "Nome", field: "name" },
    {
      header: "Descrição",
      field: "description",
    },
  ];

  const callBackSearchSuccess = (callBackSearchSuccessRes) => {
    setFunctionalities(callBackSearchSuccessRes.data);
  };

  const callBackSearchError = (callBackSearchError) => {
    console.log("callBackSearchError", callBackSearchError);
  };

  const callBackSearchClear = () => {
    setFunctionalities([]);
  };

  const callBackOnClickEditButton = (data) => {
    navigate("/admin/functionality/edit", {
      state: { functionality: data },
    });
  };

  const callBackOnClickDetailButton = (data) => {
    navigate("/admin/functionality/detail", {
      state: { functionality: data },
    });
  };

  const callBackOnClickCreateButton = () => {
    navigate("/admin/functionality/create");
  };

  return (
    <CrudSearch>
      <CrudSearch.Search
        api={api}
        callBackSearchSuccess={callBackSearchSuccess}
        callBackSearchClear={callBackSearchClear}
        callBackSearchError={callBackSearchError}
        callBackOnClickCreateButton={callBackOnClickCreateButton}
      >
        <Form.Group className="mb-3" controlId="functionality.nameId">
          <Form.Label size="sm">Name</Form.Label>
          <Form.Control size="sm" type="text" placeholder="Enter name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="functionality.descriptionId">
          <Form.Label size="sm">Description</Form.Label>
          <Form.Control size="sm" type="text" placeholder="Enter description" />
        </Form.Group>
      </CrudSearch.Search>

      <CrudSearch.Result
        data={functionalities}
        callBackOnClickEditButton={callBackOnClickEditButton}
        columns={columns}
        callBackOnClickDetailButton={callBackOnClickDetailButton}
        usingTable={true}
      ></CrudSearch.Result>
    </CrudSearch>
  );
}

export default FunctionalitySearch;
