import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import { useLocation } from "react-router-dom";
import CrudDetail from "../../commons/crud/CrudDetail";

function RoleDetail() {

  const routeLink = "/admin/role/search"; 
  const api = 'http://localhost:8090/traderoles/';
  const location = useLocation();
  const id = location.state.tradeRole.id; 
  const name = location.state.tradeRole.name;
  const description = location.state.tradeRole.description;

  const getData = () => {
    return {
      name : name,
      description : description
    }
  }


  return (
    <>
      <CrudDetail api={api} id={id} getData={getData} routeLink={routeLink}>
        <Form>
          <Form.Group className="mb-3" controlId="tradeRole.nameId">
            <Form.Label size="sm">Name</Form.Label>
            <Form.Control
              size="sm"
              type="text"
              placeholder="Enter name"
              value={name}
              readOnly
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="tradeRole.descriptionId">
            <Form.Label size="sm">Description</Form.Label>
            <Form.Control
              size="sm"
              type="text"
              placeholder="Enter description"
              value={description}
              readOnly
            />
          </Form.Group>
        </Form>
      </CrudDetail>
    </>
  );
}

export default RoleDetail;
