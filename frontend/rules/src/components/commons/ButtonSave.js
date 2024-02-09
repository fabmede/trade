import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { BsSave2 } from "react-icons/bs";
import Button from "react-bootstrap/Button";

function ButtonSave(props) {

  const [showSaveConfirm, setShowSaveConfirm] = useState(false);
  const handleSaveClose = () => setShowSaveConfirm(false);
  const handleSaveShow = () => setShowSaveConfirm(true);

  const onClickSave = () => {
    if (props.onClick === undefined) {
      console.log("There in no onClickSave to call");
    } else {
      props.onClick();
    }
    setShowSaveConfirm(false);
  };

  return (
    <>
      <Button
        variant="primary"
        type="button"
        onClick={handleSaveShow}
        hidden={props.hiddenButtonCrudSave}
      >
        {" "}
        <BsSave2 />
      </Button>

      <Modal show={showSaveConfirm} onHide={handleSaveClose}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm change register</Modal.Title>
        </Modal.Header>
        <Modal.Body>Confirm change register?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleSaveClose}>
            Close
          </Button>
          <Button variant="primary" onClick={onClickSave}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ButtonSave;
