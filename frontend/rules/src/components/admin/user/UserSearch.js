import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import React, { useState } from "react";
import CrudSearch from "../../commons/crud/CrudSearch";
import { useNavigate } from "react-router-dom";

function UserSearch() {
  const api = "http://localhost:8090/tradeusers/";
  const [tradeRoles, setTradeRoles] = useState([]);
  const navigate = useNavigate();

  const columns = [
    { header: "Email", field: "email" },
    { header: "Nome", field: "name"}
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
    navigate("/admin/user/edit", {
      state: { tradeUser: data },
    });
  };

  const callBackOnClickDetailButton = (data) => {
    navigate("/admin/user/detail", {
      state: { tradeUser: data },
    });
  };

  const callBackOnClickCreateButton = () => {
    navigate("/admin/user/create");
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
        <Form.Group className="mb-3" controlId="tradeusers.emailId">
          <Form.Label size="sm">Email</Form.Label>
          <Form.Control size="sm" type="text" placeholder="Enter with the email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="tradeusers.nameId">
          <Form.Label size="sm">Description</Form.Label>
          <Form.Control size="sm" type="text" placeholder="Enter with the name" />
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

export default UserSearch;
