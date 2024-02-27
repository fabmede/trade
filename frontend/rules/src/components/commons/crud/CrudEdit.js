import { useContext } from "react";
import { ButtonGroup } from "react-bootstrap";
import { ContainerContext } from "../../../commons/utils/ContainerContext";
import AxiosHttp from "../../../commons/utils/AxiosHttpInterceptor";

import { useNavigate } from "react-router-dom";
import ButtonSave from "../ButtonSave";
import ButtonDelete from "../ButtonDelete";
import ButtonBackSearch from "../ButtonBackSearch";

function CrudEdit(props) {

  const axiosHttp = AxiosHttp();
  const { showSuccessMessage, showErrorMessage } = useContext(ContainerContext);
  const navigate = useNavigate();

  const onClickSave = () => {
    if (props.onClickSave === undefined) {
      axiosHttp
        .put(props.api + props.id, props.getData())
        .then((res) => {
          showSuccessMessage("Register success changed! ");
          if (
            props.callBackEditSuccess !== undefined &&
            props.callBackEditSuccess instanceof Function
          ) {
            props.callBackEditSuccess(res);
          }
        })
        .catch((err) => {
          showErrorMessage(
            "There was an error while trying to change the register! "
          );
          if (
            props.callBackEditError !== undefined &&
            props.callBackEditError instanceof Function
          ) {
            props.callBackEditError(err);
          }
        })
        .finally(() => {
          if (
            props.callBackEditFinnaly !== undefined &&
            props.callBackEditFinnaly instanceof Function
          ) {
            props.callBackEditFinally();
          }
        });
    } else {
      props.onClickSave();
    }
  };

  const onClickRemove = () => {
    const data = {};

    if (props.onClickRemove === undefined) {
      axiosHttp
        .delete(props.api + props.id, { data })
        .then((res) => {
          showSuccessMessage("Register success deleted! ");
          if (
            props.callBackDeleteSuccess !== undefined &&
            props.callBackDeleteSuccess instanceof Function
          ) {
            props.callBackDeleteSuccess(res);
          }
        })
        .catch((err) => {
          showErrorMessage(
            "There was an error while trying to delete the register! "
          );
          if (
            props.callBackDeleteError !== undefined &&
            props.callBackDeleteError instanceof Function
          ) {
            props.callBackDeleteError(err);
          }
        })
        .finally(() => {
          if (
            props.callBackDeleteFinally !== undefined &&
            props.callBackDeleteFinally instanceof Function
          ) {
            props.callBackDeleteFinally();
          }
        });
    } else {
      props.onClickRemove();
    }
  };

  const actionOnClickBackSearch = () => {
    navigate(props.routeLink);
  }
  return (
    <>
      <ButtonGroup size="sm" hidden={props.hiddenButtonCrud}>
        <ButtonSave onClick={onClickSave} hidden={props.hiddenButtonCrudBackToSave}></ButtonSave>
        <ButtonDelete onClick={onClickRemove} hidden={props.hiddenButtonCrudBackToSearch}></ButtonDelete>
        <ButtonBackSearch onClick={actionOnClickBackSearch} hidden={props.hiddenButtonCrudBackToSearch}></ButtonBackSearch>
      </ButtonGroup>
      <hr />
      {props.children}
    </>
  );
}

export default CrudEdit;
