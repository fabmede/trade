import Button from "react-bootstrap/Button";
import { BsEraserFill } from "react-icons/bs";

function ButtonClear(props) {
  const onClick = () => {
    if (props.onClick === undefined) {
      console.log("There in no onClickSave to call");
    } else {
      props.onClick();
    }
  };

  return (
    <>
      <Button variant="primary" type="button" onClick={onClick}>
        {" "}
        <BsEraserFill /> Clear{" "}
      </Button>
    </>
  );
}

export default ButtonClear;
