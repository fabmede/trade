import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { BsTrash2 } from "react-icons/bs";
import { useState } from "react";

function ButtonDelete(props) {
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const handleDeleteClose = () => setShowDeleteConfirm(false);
  const handleDeleteShow = () => setShowDeleteConfirm(true);

  const onClick = () => {
    if (props.onClick === undefined) {
      console.log("There in no onClickRemove to call");
    } else {
      props.onClick();
    }
    setShowDeleteConfirm(false);
  };

  return (
    <>
      <Button
        variant="primary"
        type="button"
        onClick={handleDeleteShow}
        hidden={props.hidden}
      >
        {" "}
        <BsTrash2 />
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

export default ButtonDelete;
