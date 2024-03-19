import { Form } from "react-bootstrap";

function FormImputTextArea(props) {
  const setValue = (value) => {
    let newValue = props.objectAttributes;
    newValue[value.name] = value.value;
    props.setObjectAttributes((oldValue) => ({
      ...oldValue,
      ...newValue,
    }));
  };

  return (
    <>
      <Form.Group className="mb-3" controlId="outputControlId">
        <Form.Label size="sm">{props.label}</Form.Label>
        <Form.Control
          as="textarea"
          size="sm"
          rows={props.rows}
          disabled={props.disabled}
          placeholder={props.placeholder}
          name={props.attributeName}
          onChange={(e) => setValue(e.target)}
          value={props.objectAttributes[props.attributeName]}
          style={props.style}
        />
      </Form.Group>{" "}
    </>
  );
}

export default FormImputTextArea;
