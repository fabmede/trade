import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import Image from 'react-bootstrap/Image';

function Profile() {
  const userLooged = () => {
    return JSON.parse(window.localStorage.getItem("userLogged"));
  };

  return (
    <Form>
      <Image src={userLooged().userInfo.picture} thumbnail />

      <Form.Group className="mb-3" controlId="formGroupName">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" disabled value={userLooged().userInfo.name} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control disabled value={userLooged().userInfo.email} />
      </Form.Group>
    </Form>
  );
}

export default Profile;
