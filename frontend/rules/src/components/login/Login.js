import { Button, ButtonGroup, Card, Form } from "react-bootstrap";
import loginImg from "../../img/login.png";
import loginBackgroundImg from "../../img/login_background.png";

import { BsFacebook, BsGoogle } from "react-icons/bs";

function Login(props) {
  return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
          backgroundImage: `url(${loginBackgroundImg})`,
        }}
      >
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={loginImg} />
          <Card.Body>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail" size="sm">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>

              <Form.Group
                className="mb-3"
                controlId="formBasicPassword"
                size="sm"
              >
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Button
                variant="primary"
                type="submit"
                onClick={console.log("There is no implementation")}
              >
                Submit
              </Button>
            </Form>
            <hr />
            <ButtonGroup size="sm">
              <Button
                variant="primary"
                onClick={props.loginEvent}
                size="sm"
                className="btn btn-primary"
              >
                Sign with Google <BsGoogle />
              </Button>
              <Button
                variant="danger"
                onClick={console.log("There is no implementation")}
                size="sm"
                className="btn btn-danger"
              >
                Sign with Facebook <BsFacebook />
              </Button>
            </ButtonGroup>
          </Card.Body>
        </Card>
      </div>
  );
}

export default Login;
