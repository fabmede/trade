import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { ButtonGroup } from "react-bootstrap";
import { BsArrowReturnLeft, BsTrash2 } from "react-icons/bs";
import Button from "react-bootstrap/Button";
import { useContext } from "react";
import {  ContainerContext } from "../../../commons/utils/ContainerContext";
import AxiosHttp from "../../../commons/utils/AxiosHttpInterceptor";

function CrudDetail (props) {

  const {showSuccessMessage,showErrorMessage} = useContext(ContainerContext);
  const axiosHttp = AxiosHttp(); 

  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const handleDeleteClose = () => setShowDeleteConfirm(false);
  const handleDeleteShow = () => setShowDeleteConfirm(true);

  const remove = () => {
    const data = {};

    axiosHttp
      .delete(props.api + props.id, { data })
      .then((res) => {
        showSuccessMessage('Register success deleted! ');
      })
      .catch((err) => {
        showErrorMessage('There was an error while trying to delete the register! ');
      })
      .finally(() => {
        setShowDeleteConfirm(false);
      });
  };

  return (
    <>

      {props.children}

      <ButtonGroup size="sm">
        <Button variant="primary" type="button" onClick={handleDeleteShow}>
          {" "}
          <BsTrash2 /> Remove{" "}
        </Button>
        <Button variant="primary" type="link" href={props.routeLink}>
          {" "}
          <BsArrowReturnLeft /> Return Search
        </Button>
      </ButtonGroup>
      <hr />

      <Modal show={showDeleteConfirm} onHide={handleDeleteClose}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm delete register</Modal.Title>
        </Modal.Header>
        <Modal.Body>Confirm delete register?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleDeleteClose}>
            Close
          </Button>
          <Button variant="primary" onClick={remove}>
            Delete register
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default CrudDetail;
