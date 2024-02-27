import { ButtonGroup } from "react-bootstrap";
import { ContainerContext } from "../../../commons/utils/ContainerContext";
import { useContext } from "react";
import AxiosHttp from "../../../commons/utils/AxiosHttpInterceptor";
import { useNavigate } from "react-router-dom";
import ButtonSave from "../ButtonSave";
import ButtonBackSearch from "../ButtonBackSearch";


function CrudCreate(props) {

  const {showSuccessMessage,showErrorMessage} = useContext(ContainerContext);
  const axiosHttp = AxiosHttp(); 
  const navigate = useNavigate();

  const actionOnClickSave = () => {

    axiosHttp
      .post(props.api, props.getData())
      .then((res) => {
        showSuccessMessage('Register success created! ')
        if(props.callBackCreateSuccess !== undefined && props.callBackCreateSuccess instanceof Function){
          props.callBackCreateSuccess(res); 
        }        
      })
      .catch((err) => {
        showErrorMessage('There was an error while trying to create the register! ')
        if(props.callBackCreateError !== undefined && props.callBackCreateError instanceof Function){
          props.callBackCreateError(err); 
        }        

      })
      .finally(() => {
        if(props.callBackCreateFinally !== undefined && props.callBackCreateFinally instanceof Function){
          props.callBackCreateFinally(); 
        }        
      });
  };

  const actionOnClickBackSearch = () => {
    navigate(props.routeLink);
  }

  return (
    <>
      <ButtonGroup size="sm">
        <ButtonSave onClick={actionOnClickSave}></ButtonSave>
        <ButtonBackSearch onClick={actionOnClickBackSearch}> </ButtonBackSearch>
      </ButtonGroup>
      <hr />
      {props.children}
    </>
  );
}

export default CrudCreate;
