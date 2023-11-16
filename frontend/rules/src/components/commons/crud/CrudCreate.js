import axios from "axios";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { ButtonGroup } from "react-bootstrap";
import { BsArrowReturnLeft, BsSave2 } from "react-icons/bs";
import Button from "react-bootstrap/Button";
import { ContainerContext } from "../../../commons/utils/ContainerContext";
import { useContext } from "react";
import { AppContext } from "../../../commons/utils/AppContext";

function CrudCreate(props) {

  const {showSuccessMessage,showErrorMessage} = useContext(ContainerContext);
  const {getUserLooged} = useContext(AppContext);

  const [showSaveConfirm, setShowSaveConfirm] = useState(false);
  const handleSaveClose = () => setShowSaveConfirm(false);
  const handleSaveShow = () => setShowSaveConfirm(true);

  const headers = {
    Authorization: `Bearer ${getUserLooged().user.access_token}`,
    Accept: "application/json",
  };

  const save = () => {

    console.log('Saving register', props.getData());
    
    axios
      .post(props.api, props.getData(), {
        headers,
      })
      .then((res) => {
        console.log('res.data', res.data);
        props.successCreate(res); 
        showSuccessMessage('Register success created! ')
      })
      .catch((err) => {
        showErrorMessage('There was an error while trying to create the register! ')
      })
      .finally(() => {
        setShowSaveConfirm(false);
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
