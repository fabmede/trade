import { Form } from "react-bootstrap";

function FormImputMultipleSelect(props) {

  const setValue = (value) => {

    const valuesSelected = []
    for (var i = 0, l = value.options.length; i < l; i++) {
      if (value.options[i].selected) {
        const valueSelected = props.objectList?.find(
          (x) => String(x[props.objectListValue]) === String(value[i].value)
        );
    
        valuesSelected.push(valueSelected);
      }
    }
    props.objectAttributes[props.attributeName] = valuesSelected; 

    props.setObjectAttributes((oldValue) => ({
      ...oldValue,
      ...valuesSelected,
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
