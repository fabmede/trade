import { useContext } from "react";
import { ButtonGroup } from "react-bootstrap";
import { ContainerContext } from "../../../commons/utils/ContainerContext";
import AxiosHttp from "../../../commons/utils/AxiosHttpInterceptor";
import ButtonSearch from "../ButtonSearch";
import ButtonCreate from "../ButtonCreate";
import ButtonClear from "../ButtonClear";
import Table from "../Table";

function CrudSearch(props) {
  return <>{props.children}</>;
}

function Search(props) {
  const axiosHttp = AxiosHttp();

  const { showErrorMessage } = useContext(ContainerContext);

  const actionOnClickClear = () => {
    console.log("actionOnClickClear");
    props.callBackSearchClear();
  };

  const actionOnClickSearch = () => {
    axiosHttp
      .get(props.api)
      .then((res) => {
        if (
          props.callBackSearchSuccess !== undefined &&
          props.callBackSearchSuccess instanceof Function
        ) {
          props.callBackSearchSuccess(res);
        }
      })
      .catch((err) => {
        showErrorMessage(
          "There was an error while trying find the registers! "
        );
        if (
          props.callBackSearchError !== undefined &&
          props.callBackSearchError instanceof Function
        ) {
          console.log(err);
          props.callBackSearchError(err);
        }
      })
      .finally(() => {
        if (
          props.callBackSearchFinally !== undefined &&
          props.callBackSearchFinally instanceof Function
        ) {
          props.callBackSearchFinally();
        }
      });
  };

  return (
    <>
      {" "}
      {props.children}
      <ButtonGroup size="sm">
        <ButtonSearch onClick={actionOnClickSearch}></ButtonSearch>
        <ButtonCreate
          onClick={props.callBackOnClickCreateButton}
        ></ButtonCreate>
        <ButtonClear onClick={actionOnClickClear}></ButtonClear>
      </ButtonGroup>
      <hr />
    </>
  );
}

function Result(props) {
  return (
    <>
      {props.usingTable !== undefined ? (
        <Table
          data={props.data}
          callBackOnClickEditButton={props.callBackOnClickEditButton}
          columns={props.columns}
          callBackOnClickDetailButton={props.callBackOnClickDetailButton}
          hideCrudTableButonDelete={true}
        ></Table>
      ) : (
        props.children
      )}
    </>
  );
}

CrudSearch.Search = Search;
CrudSearch.Result = Result;
export default CrudSearch;
