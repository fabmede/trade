import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import { useLocation } from "react-router-dom";
import CrudDetail from "../../commons/crud/CrudDetail";
import FormImputText from "../../commons/FormImputText";

function FunctionalityDetail() {
  const routeLink = "/admin/functionality/search";
  const api = "http://localhost:8090/tradefunctionalities/";
  const location = useLocation();
  const id = location.state.functionality.id;
  const detailObject = location.state.functionality;

  const getData = () => {
    return detailObject;
  };

  return (
    <>
      <CrudDetail api={api} id={id} getData={getData} routeLink={routeLink}>
        <Form>
          <FormImputText
            label="Name"
            placeholder="Enter with the name"
            attributeName="name"
            objectAttributes={detailObject}
          ></FormImputText>

          <FormImputText
            label="Name"
            placeholder="Enter with the description"
            attributeName="description"
            objectAttributes={detailObject}
          ></FormImputText>
        </Form>
      </CrudDetail>
    </>
  );
}

export default FunctionalityDetail;
