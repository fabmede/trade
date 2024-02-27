import Button from "react-bootstrap/Button";
import { BsFillPlusSquareFill } from "react-icons/bs";
import { ContainerContext } from "../../commons/utils/ContainerContext";
import { useContext } from "react";

function ButtonCreate(props) {
  const { showLoading, hiddenLoading } = useContext(ContainerContext);

  const onClick = () => {
    try {
      showLoading();
      if (props.onClick === undefined) {
        console.log("There in no onClickSave to call");
      } else {
        console.log(" onClickSave to call");
        props.onClick();
      }
    } finally {
      hiddenLoading();
    }
  };

  return (
    <>
      <Button variant="primary" type="link" onClick={onClick}>
        {" "}
        <BsFillPlusSquareFill /> Create
      </Button>
    </>
  );
}

export default ButtonCreate;
