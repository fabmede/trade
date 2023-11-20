import { useContext, useState } from "react";
import Modal from "react-bootstrap/Modal";
import { ButtonGroup } from "react-bootstrap";
import { BsArrowReturnLeft, BsSave2, BsTrash2 } from "react-icons/bs";
import Button from "react-bootstrap/Button";
import { ContainerContext } from "../../../commons/utils/ContainerContext";
import AxiosHttp from "../../../commons/utils/AxiosHttpInterceptor";

function CrudEdit(props) {

  const axiosHttp = AxiosHttp(); 
  const {showSuccessMessage,showErrorMessage} = useContext(ContainerContext);

  const [showSaveConfirm, setShowSaveConfirm] = useState(false);
  const handleSaveClose = () => setShowSaveConfirm(false);
  const handleSaveShow = () => setShowSaveConfirm(true);

  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const handleDeleteClose = () => setShowDeleteConfirm(false);
  const handleDeleteShow = () => setShowDeleteConfirm(true);

  const save = () => {
    axiosHttp
      .put(props.api + props.id, props.getData())
      .then((res) => {
        showSuccessMessage('Register success changed! ');
        console.log('props.callBackEditSuccess ', props.callBackEditSuccess );
        if(props.callBackEditSuccess !== undefined && props.callBackEditSuccess instanceof Function){
          props.callBackEditSuccess(res); 
        }
      })
      .catch((err) => {
        showErrorMessage('There was an error while trying to change the register! ')
        if(props.callBackEditError !== undefined && props.callBackEditError instanceof Function){
          props.callBackEditError(err); 
        }
      })
      .finally(() => {
        setShowSaveConfirm(false);
        if(props.callBackEditFinnaly !== undefined && props.callBackEditFinnaly instanceof Function){
          props.callBackEditFinally(); 
        }
      });
  };

  const remove = () => {
    const data = {};

    axiosHttp
      .delete(props.api + props.id, { data })
      .then((res) => {
        showSuccessMessage('Register success deleted! ')
      })
      .catch((err) => {
        showErrorMessage('There was an error while trying to delete the register! ')
      })
      .finally(() => {
        setShowDeleteConfirm(false);
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
        <Button variant="primary" type="button" onClick={handleDeleteShow}>
          {" "}
          <BsTrash2 /> Remove{" "}
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
}

export default CrudEdit;
