import "bootstrap/dist/css/bootstrap.min.css";
import Editor from "@monaco-editor/react";
import CrudSearch from "../../commons/crud/CrudSearch";
import { Form } from "react-bootstrap";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function BusinessSearch() {
  const api = "http://localhost:8090/tradebusiness/";
  const [tradeBusiness, setTradeBusiness] = useState([]);
  const navigate = useNavigate();

  const columns = [
    { header: "Nome", field: "name" },
    {
      header: "Descrição",
      field: "description",
    },
  ];

  const callBackSearchSuccess = (callBackSearchSuccessRes) => {
    setTradeBusiness(callBackSearchSuccessRes.data);
  };

  const callBackSearchError = (callBackSearchError) => {
    console.log("callBackSearchError", callBackSearchError);
  };

  const callBackSearchClear = () => {
    setTradeBusiness([]);
  };

  const callBackOnClickEditButton = (data) => {
    navigate("/registers/business/edit", {
      state: { tradeBusiness: data },
    });
  };

  const callBackOnClickDetailButton = (data) => {
    navigate("/registers/business/detail", {
      state: { tradeBusiness: data },
    });
  };

  const callBackOnClickCreateButton = () => {
    navigate("/registers/business/create");
  };


  const defaultValue = "";

  return (
    <>
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
            <Form.Control
              size="sm"
              type="text"
              placeholder="Enter description"
            />
          </Form.Group>
        </CrudSearch.Search>

        <CrudSearch.Result
          data={tradeBusiness}
          callBackOnClickEditButton={callBackOnClickEditButton}
          columns={columns}
          callBackOnClickDetailButton={callBackOnClickDetailButton}
          usingTable={true}
        ></CrudSearch.Result>
      </CrudSearch>
    </>
  );
}

export default BusinessSearch;
