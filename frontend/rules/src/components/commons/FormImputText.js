import { Form } from "react-bootstrap";

function FormImputText(props) {
  const setValue = (value) => {
    let newValue = props.objectAttributes;
    newValue[value.name] = value.value;
    console.log('ObjectAttributes', newValue);
    props.setObjectAttributes(oldValue => ({
      ...oldValue,
      ...newValue
    }));

  };

  return (
    <>
      <Form.Group className="mb-3" controlId="tradeUser.nameId">
        <Form.Label size="sm">{props.label}</Form.Label>
        <Form.Control
          size="sm"
          type="text"
          placeholder={props.placeholder}
          name={props.attributeName}
          onChange={(e) => setValue(e.target)}
          value={props.objectAttributes[props.attributeName]}
        />
      </Form.Group>{" "}
    </>
  );
}

export default FormImputText;
