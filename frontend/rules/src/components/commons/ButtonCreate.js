import Button from "react-bootstrap/Button";
import { BsFillPlusSquareFill } from "react-icons/bs";

function ButtonCreate(props) {
  const onClick = () => {
    if (props.onClick === undefined) {
      console.log("There in no onClickSave to call");
    } else {
      props.onClick();
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
