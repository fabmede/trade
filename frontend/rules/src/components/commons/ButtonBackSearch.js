
import Button from "react-bootstrap/Button";
import { BsArrowReturnLeft } from "react-icons/bs";

function ButtonBackSearch(props) {

  const onClick = () => {
    if (props.onClick === undefined) {
      console.log("There in no onClickSave to call");
    } else {
      props.onClick();
    }
  };

  return (
    <>
      <Button
        variant="primary"
        type="link"
        onClick={onClick}
      >
        {" "}
        <BsArrowReturnLeft />
      </Button>
    </>
  );
}

export default ButtonBackSearch;
