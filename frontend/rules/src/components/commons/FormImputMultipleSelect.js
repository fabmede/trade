import { Form } from "react-bootstrap";

function FormImputMultipleSelect(props) {

  const setValue = (value) => {

    const valueSelected = props.objectList?.find(
      (x) => String(x[props.objectListValue]) === String(value.value)
    );

    props.objectAttributes[props.attributeName] = valueSelected; 
    let newValue = props.objectAttributes;

    console.log("ObjectAttributes", props.objectAttributes);

    props.setObjectAttributes((oldValue) => ({
      ...oldValue,
      ...newValue,
    }));

    for (var i = 0, l = value.options.length; i < l; i++) {
      if (value.options[i].selected) {
        console.log('Value selected', value.options[i]);
      }
    }

  };

  return (
    <>
      <Form.Group className="mb-3">

        <Form.Label size="sm">{props.label}</Form.Label>
        <Form.Select
          aria-label={props.label}
          size="sm"
          onChange={(e) => setValue(e.target)}
          multiple={true}
        >
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

export default FormImputMultipleSelect;
