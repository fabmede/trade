import { Col, Container, Row } from "react-bootstrap";
import { ContainerProvider } from "../../commons/utils/ContainerContext";

function AppContainer(props) {
  return (
    <div
      style={{
        textAlign: "left",
        marginLeft: "17%",
        marginRight: "17%",
        marginTop: "55px",
        backgroundColor: "white"
      }}
    >
      <Container fluid="sm">
        <ContainerProvider>
        <Row>
              <Col>
                <hr></hr>
              </Col>
            </Row>
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
