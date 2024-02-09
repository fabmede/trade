import { useContext } from "react";
import { ButtonGroup } from "react-bootstrap";
import { ContainerContext } from "../../../commons/utils/ContainerContext";
import AxiosHttp from "../../../commons/utils/AxiosHttpInterceptor";
import ButtonSearch from "../ButtonSearch";
import ButtonCreate from "../ButtonCreate";
import ButtonClear from "../ButtonClear";

function CrudSearch(props) {
  const axiosHttp = AxiosHttp();

  const { showErrorMessage, showLoading, hiddenLoading } =
    useContext(ContainerContext);

  const actionOnClickClear = () => {
    props.callBackSearchClear();
  };

  const actionOnClickSearch = () => {
    showLoading();

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
        hiddenLoading();
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
      {props.children[0]}

      <ButtonGroup size="sm">
        <ButtonSearch onClick={actionOnClickSearch}></ButtonSearch>
        <ButtonCreate
          onClick={props.callBackOnClickCreateButton}
        ></ButtonCreate>
        <ButtonClear onClick={actionOnClickClear}></ButtonClear>
      </ButtonGroup>
      <hr />
      {props.children[1]}
    </>
  );
}

const Search = ({ children }) => <>{children}</>;
const Result = ({ children }) => <>{children}</>;

CrudSearch.Search = Search;
CrudSearch.Result = Result;
export default CrudSearch;
