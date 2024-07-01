import { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import AxiosHttp from "../../commons/utils/AxiosHttpInterceptor";

function FormImputSelect(props) {

  const [objects, setObjects] = useState([]);
  const axiosHttp = AxiosHttp();

  useEffect(() => {
    loadObjects();
  }, []);

  const loadObjects = () => {

    axiosHttp
      .get(props.apiLoadObjects)
      .then((res) => {
        setObjects(res.data);
      })
      .catch((err) => {
        console.error("Error call " + props.apiLoadObjects, err);
      })
      .finally(() => {});
  };

  const setValue = (value) => {

    const valueSelected = objects?.find(
      (x) => String(x.id) === String(value.value)
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
          {objects
            ? objects.map((obj, index) => (
                <option
                  reavalue={obj.id}
                  key={index}
                  value={obj.id}
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
