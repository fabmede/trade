import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { ButtonGroup } from "react-bootstrap";
import { BsArrowReturnLeft, BsSave2 } from "react-icons/bs";
import Button from "react-bootstrap/Button";
import { ContainerContext } from "../../../commons/utils/ContainerContext";
import { useContext } from "react";
import AxiosHttp from "../../../commons/utils/AxiosHttpInterceptor";

function CrudCreate(props) {

  const {showSuccessMessage,showErrorMessage} = useContext(ContainerContext);
  const axiosHttp = AxiosHttp(); 

  const [showSaveConfirm, setShowSaveConfirm] = useState(false);
  const handleSaveClose = () => setShowSaveConfirm(false);
  const handleSaveShow = () => setShowSaveConfirm(true);

  const save = () => {

    console.log('save props.getData()', props.getData());
    console.log('save props.api', props.api);

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
        setShowSaveConfirm(false);
        if(props.callBackCreateFinally !== undefined && props.callBackCreateFinally instanceof Function){
          props.callBackCreateFinally(); 
        }        
      });
  };


  return (
    <>

      {props.children}

      <ButtonGroup size="sm">
        <Button variant="primary" type="button" onClick={handleSaveShow}>
          {" "}
          <BsSave2 /> Save{" "}
        </Button>
        <Button
          variant="primary"
          type="link"
          href={props.routeLink}
        >
          {" "}
          <BsArrowReturnLeft /> Return Search
        </Button>
      </ButtonGroup>
      <hr />

      <Modal show={showSaveConfirm} onHide={handleSaveClose}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm change register</Modal.Title>
        </Modal.Header>
        <Modal.Body>Confirm change register?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleSaveClose}>
            Close
          </Button>
          <Button variant="primary" onClick={save}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default CrudCreate;
