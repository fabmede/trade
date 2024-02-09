import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import React, { useState } from "react";
import CrudSearch from "../../commons/crud/CrudSearch";
import Table from "../../commons/Table";
import { useNavigate } from "react-router-dom";

function GroupSearch() {
  const api = "http://localhost:8090/tradegroups/";
  const [tradeGroups, setTradeGroups] = useState([]);
  const navigate = useNavigate();

  const columns = [
    { header: "Nome", field: "name" },
    {
      header: "Descrição",
      field: "description",
    },
  ];

  const callBackSearchSuccess = (callBackSearchSuccessRes) => {
    setTradeGroups(callBackSearchSuccessRes.data);
  };

  const callBackSearchError = (callBackSearchError) => {
    console.log("callBackSearchError", callBackSearchError);
  };

  const callBackSearchClear = () => {
    setTradeGroups([]);
  };

  const callBackOnClickEditButton = (data) => {
    navigate("/admin/group/edit", {
      state: { tradeGroup: data },
    });
  };

  const callBackOnClickDetailButton = (data) => {
    navigate("/admin/group/detail", {
      state: { tradeGroup: data },
    });
  };

  const callBackOnClickCreateButton = () => {
    navigate("/admin/group/create");
  };  

  return (
    <CrudSearch
      api={api}
      callBackSearchSuccess={callBackSearchSuccess}
      callBackSearchClear={callBackSearchClear}
      callBackSearchError={callBackSearchError}
      callBackOnClickCreateButton={callBackOnClickCreateButton}
      
    >
      <CrudSearch.Search>
        <Form.Group className="mb-3" controlId="tradegroups.nameId">
          <Form.Label size="sm">Name</Form.Label>
          <Form.Control size="sm" type="text" placeholder="Enter name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="tradegroups.descriptionId">
          <Form.Label size="sm">Description</Form.Label>
          <Form.Control size="sm" type="text" placeholder="Enter description" />
        </Form.Group>
      </CrudSearch.Search>

      <CrudSearch.Result>
        <Table
          data={tradeGroups}
          callBackOnClickEditButton={callBackOnClickEditButton}
          columns={columns}
          callBackOnClickDetailButton={callBackOnClickDetailButton}
          hiddenButtonCrudDelete={true}
        ></Table>
      </CrudSearch.Result>
    </CrudSearch>
  );
}

export default GroupSearch;
