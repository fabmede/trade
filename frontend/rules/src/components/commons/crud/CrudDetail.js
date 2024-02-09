import { ButtonGroup } from "react-bootstrap";
import { useContext } from "react";
import { ContainerContext } from "../../../commons/utils/ContainerContext";
import AxiosHttp from "../../../commons/utils/AxiosHttpInterceptor";
import { useNavigate } from "react-router-dom";
import ButtonDelete from "../ButtonDelete";
import ButtonBackSearch from "../ButtonBackSearch";

function CrudDetail(props) {
  
  const { showSuccessMessage, showErrorMessage } = useContext(ContainerContext);
  const axiosHttp = AxiosHttp();
  const navigate = useNavigate();

  const onClickRemove = () => {
    const data = {};

    axiosHttp
      .delete(props.api + props.id, { data })
      .then((res) => {
        showSuccessMessage("Register success deleted! ");
      })
      .catch((err) => {
        showErrorMessage(
          "There was an error while trying to delete the register! "
        );
      })
      .finally(() => {});
  };

  const actionOnClickBackSearch = () => {
    navigate(props.routeLink);
  }

  return (
    <>
      <ButtonGroup size="sm">
        <ButtonDelete onClick={onClickRemove}></ButtonDelete>
        <ButtonBackSearch onClick={actionOnClickBackSearch}></ButtonBackSearch>
      </ButtonGroup>
      <hr />
      {props.children}
    </>
  );
}

export default CrudDetail;
