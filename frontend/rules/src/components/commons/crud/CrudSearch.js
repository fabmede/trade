import { useContext } from "react";
import { ButtonGroup } from "react-bootstrap";
import { BsEraserFill, BsFillPlusSquareFill, BsSearch } from "react-icons/bs";
import Button from "react-bootstrap/Button";
import { ContainerContext } from "../../../commons/utils/ContainerContext";
import AxiosHttp from "../../../commons/utils/AxiosHttpInterceptor";

function CrudSearch(props) {
  
  const axiosHttp = AxiosHttp(); 

  const { showErrorMessage, showLoading, hiddenLoading } =
    useContext(ContainerContext);

  const clearSearch = () => {
    props.callBackSearchClear();
  };

  const search = () => {
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
        <Button variant="primary" type="button" onClick={search}>
          {" "}
          <BsSearch />
          Search
        </Button>
        <Button
          variant="primary"
          type="link"
          onClick={props.callBackOnClickCreateButton}
        >
          {" "}
          <BsFillPlusSquareFill /> Create
        </Button>
        <Button variant="primary" type="button" onClick={clearSearch}>
          {" "}
          <BsEraserFill /> Clear{" "}
        </Button>
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
