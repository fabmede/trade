import { Col, Container, Row } from "react-bootstrap";
import { ContainerProvider } from "../../commons/utils/ContainerContext";

function AppContainer(props) {
  return (
    <div
      style={{
        textAlign: "left",
        marginLeft: "10%",
        marginRight: "10%",
        marginTop: "2%",
      }}
    >
      <Container fluid="sm">
        <ContainerProvider>
            <Row>
              <Col>
                <h1 style={{fontSize: '20px'}}>{props.title} - <i>{props.subtitle}</i></h1>
                <hr></hr>
              </Col>
            </Row>
            <Row>
              <Col>{props.children}</Col>
            </Row>
          </ContainerProvider>
        </Container>
    </div>
  );
}

export default AppContainer;
