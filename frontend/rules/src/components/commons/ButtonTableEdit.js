import Button from "react-bootstrap/Button";
import { BsBrushFill } from "react-icons/bs";

function ButtonTableEdit(props) {
  const onClick = () => {
 
    if (props.onClick === undefined) {
      console.log("There in no onClickEdit to call");
    } else {
      props.onClick(props.onClickParam);
    }
  };

  return (
    <>
      <Button
        variant="link"
        onClick={onClick}
        hidden={props.hidden}
      >
        <BsBrushFill />
      </Button>
    </>
  );
}

export default ButtonTableEdit;
