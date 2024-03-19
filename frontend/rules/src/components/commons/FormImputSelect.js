import { Form } from "react-bootstrap";

function FormImputSelect(props) {

  const setValue = (value) => {

    const valueSelected = props.objectList?.find(
      (x) => String(x[props.objectListValue]) === String(value.value)
    );

    props.objectAttributes[props.attributeName] = valueSelected; 
    let newValue = props.objectAttributes;

    props.setObjectAttributes((oldValue) => ({
      ...oldValue,
      ...newValue,
    }));
  };

  return (
    <>
      <Form.Group className="mb-3">

        <Form.Label size="sm">{props.label}</Form.Label>
        <Form.Select
          aria-label={props.label}
          size="sm"
          onChange={(e) => setValue(e.target)}
        >
          <option>Select one</option>
          {props.objectList
            ? props.objectList.map((obj, index) => (
                <option
                  reavalue={obj[props.objectListValue]}
                  key={index}
                  value={obj[props.objectListValue]}
                >
                  {obj[props.objectListShow]}
                </option>
              ))
            : null}
        </Form.Select>
      </Form.Group>{" "}
    </>
  );
}

export default FormImputSelect;
