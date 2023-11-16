import axios from "axios";
import { useContext } from "react";
import { ButtonGroup } from "react-bootstrap";
import { BsEraserFill, BsFillPlusSquareFill,BsSearch } from "react-icons/bs";
import Button from "react-bootstrap/Button";
import { AppContext } from "../../../commons/utils/AppContext";
import { ContainerContext } from "../../../commons/utils/ContainerContext";

function CrudSearch(props) {

  const {showErrorMessage} = useContext(ContainerContext);
  const {getUserLooged} = useContext(AppContext);

  const headers = {
    Authorization: `Bearer ${getUserLooged().user.access_token}`,
    Accept: "application/json",
  };

  const clearSearch = () => {
    console.log('clearSearch');
    props.callBackSearchClear(); 

  }  

  const search = () => {

    axios
      .get(props.api, {
        headers: headers,
      })
      .then((res) => {
        props.callBackSearchSuccess(res);
      })
      .catch((err) => {
        showErrorMessage('There was an error while trying find the registers! ')
        props.callBackSearchError(err);
      });
  };


  return (
    <>
      {props.children[0]}
   
      <ButtonGroup size="sm" >
        <Button variant="primary" type="button" onClick={search}> <BsSearch/>Search</Button>
        <Button variant="primary" type="link" href="/admin/functionality/create" >  <BsFillPlusSquareFill/> Create</Button>
        <Button variant="primary" type="button" onClick={clearSearch} >  <BsEraserFill/> Clear </Button>        
      </ButtonGroup>
      <hr />
      {props.children[1]}
    </>
  );
}

const Search = ({ children }) => <>{children}</>
const Result = ({ children }) => <>{children}</>

CrudSearch.Search = Search
CrudSearch.Result = Result
export default CrudSearch;
