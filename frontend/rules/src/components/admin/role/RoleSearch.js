import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import React, { useState } from "react";
import CrudSearch from "../../commons/crud/CrudSearch";
import Table from "../../commons/Table";
import { useNavigate } from "react-router-dom";

function RoleSearch() {
  const api = "http://localhost:8090/traderoles/";
  const [tradeRoles, setTradeRoles] = useState([]);
  const navigate = useNavigate();

  const columns = [
    { header: "Nome", field: "name" },
    {
      header: "Descrição",
      field: "description",
    },
  ];

  const callBackSearchSuccess = (callBackSearchSuccessRes) => {
    setTradeRoles(callBackSearchSuccessRes.data);
  };

  const callBackSearchError = (callBackSearchError) => {
    console.log("callBackSearchError", callBackSearchError);
  };

  const callBackSearchClear = () => {
    setTradeRoles([]);
  };

  const callBackOnClickEditButton = (data) => {
    navigate("/admin/role/edit", {
      state: { tradeRole: data },
    });
  };

  const callBackOnClickDetailButton = (data) => {
    navigate("/admin/role/detail", {
      state: { tradeRole: data },
    });
  };

  const callBackOnClickCreateButton = () => {
    navigate("/admin/role/create");
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
        <Form.Group className="mb-3" controlId="tradegroups.nameId">
          <Form.Label size="sm">Name</Form.Label>
          <Form.Control size="sm" type="text" placeholder="Enter name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="tradegroups.descriptionId">
          <Form.Label size="sm">Description</Form.Label>
          <Form.Control size="sm" type="text" placeholder="Enter description" />
        </Form.Group>
      </CrudSearch.Search>

      <CrudSearch.Result
        data={tradeRoles}
        callBackOnClickEditButton={callBackOnClickEditButton}
        columns={columns}
        callBackOnClickDetailButton={callBackOnClickDetailButton}
        usingTable={true}
      ></CrudSearch.Result>

    </CrudSearch>
  );
}

export default RoleSearch;
