import Button from "react-bootstrap/Button";
import { BsChatLeftText } from "react-icons/bs";

function ButtonTableDetail(props) {
  const onClick = () => {
    if (props.onClick === undefined) {
      console.log("There in no onClickDetal to call");
    } else {
      props.onClick(props.onClickParam);
    }
  };

  return (
    <>
      <Button variant="link" onClick={onClick} 
      hidden={props.hidden}>
        <BsChatLeftText />
      </Button>
    </>
  );
}

export default ButtonTableDetail;
