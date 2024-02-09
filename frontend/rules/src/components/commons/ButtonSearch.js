import Button from "react-bootstrap/Button";
import { BsSearch } from "react-icons/bs";

function ButtonSearch(props) {
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
        <BsSearch />
        Search
      </Button>
    </>
  );
}

export default ButtonSearch;
