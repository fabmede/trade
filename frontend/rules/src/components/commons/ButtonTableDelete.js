import { useState } from "react";
import { Modal } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import {  BsTrashFill } from "react-icons/bs";

function ButtonTableDelete(props) {

  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const handleDeleteClose = () => setShowDeleteConfirm(false);
  const handleDeleteShow = () => setShowDeleteConfirm(true);

  const onClick = () => {
    if (props.onClick === undefined) {
      console.log("There in no onClickDetele to call");
    } else {
      props.onClick(props.onClickParam);
    }
    setShowDeleteConfirm(false);
  };

  return (
    <>
      <Button
        variant="link"
        type="button"
        onClick={handleDeleteShow}
        hidden={props.hidden}
      >
        {" "}
        <BsTrashFill />
      </Button>

      <Modal show={showDeleteConfirm} onHide={handleDeleteClose}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm delete register</Modal.Title>
        </Modal.Header>
        <Modal.Body>Confirm delete register?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleDeleteClose}>
            Close
          </Button>
          <Button variant="primary" onClick={onClick}>
            Delete register
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ButtonTableDelete;
