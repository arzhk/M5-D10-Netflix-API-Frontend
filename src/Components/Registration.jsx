import React from "react";
import RegisteredUsers from "./RegisteredUsers";
import { useState } from "react";
import { Spinner, Container, Row, Col, Form, Button } from "react-bootstrap";

function Registration() {
  const [isLoading, setIsLoading] = useState(true);
  const [isFormComplete, setIsFormComplete] = useState(false);
  const [users, setUsers] = useState([]);
  const [newUser, setnewUser] = useState({
    name: "",
    surname: "",
    dob: "",
    address: "",
    city: "",
    postcode: "",
    email: "",
    password: "",
  });

  setTimeout(() => {
    setIsLoading(false);
  }, 500);

  const updateField = (e) => {
    setnewUser({ ...newUser, [e.target.id]: e.target.value });
  };

  const submitData = async (e) => {
    e.preventDefault();
    setUsers([...users, newUser]);
    setnewUser({ name: "", surname: "", dob: "", address: "", city: "", postcode: "", email: "", password: "" });
    console.log(await users);
  };

  React.useEffect(() => {
    console.log(users);
  }, [users]);

  React.useEffect(() => {
    newUser.name.length > 1 &&
      newUser.surname.length > 2 &&
      newUser.dob !== "" &&
      newUser.address.length > 0 &&
      newUser.city.length > 0 &&
      newUser.postcode.length > 0 &&
      newUser.email.length > 0 &&
      newUser.password.length > 0 &&
      setIsFormComplete(true);
  }, [newUser]);

  return (
    <Container id="registration" style={{ minHeight: "80vh" }} className="pt-5">
      <div className="pt-5 mb-4">
        <h1>Register Now</h1>
      </div>
      {isLoading ? (
        <div className="d-block w-100 mb-5 mt-5">
          <h5 className="d-inline-block mb-0 mr-2" style={{ color: "white" }}>
            Loading...
          </h5>
          <Spinner animation="border" variant="danger" disabled />
        </div>
      ) : (
        <Row className="border-left border-danger py-3 d-flex align-items-center">
          <Col xs={8}>
            <Form onSubmit={submitData}>
              <Row>
                <Col xs={12} className=" mb-2">
                  <h2 className="text-danger">Personal information</h2>
                </Col>
                <Col xs={4}>
                  <Form.Group controlId="name">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control
                      type="text"
                      value={newUser.name}
                      onChange={updateField}
                      placeholder="Enter First name..."
                      required
                    />
                    <Form.Text className="text-muted">Must be at least 2 characters.</Form.Text>
                  </Form.Group>
                </Col>
                <Col xs={4}>
                  <Form.Group controlId="surname">
                    <Form.Label>Surname</Form.Label>
                    <Form.Control
                      type="text"
                      value={newUser.surname}
                      onChange={updateField}
                      placeholder="Enter Surname..."
                      required
                    />
                    <Form.Text className="text-muted">Must be at least 3 characters.</Form.Text>
                  </Form.Group>
                </Col>
                <Col xs={4}>
                  <Form.Group controlId="dob">
                    <Form.Label>Date of birth</Form.Label>
                    <Form.Control value={newUser.dob} onChange={updateField} type="date" required />
                  </Form.Group>
                </Col>
                <Col xs={10}>
                  <Form.Group controlId="address">
                    <Form.Label>Address</Form.Label>
                    <Form.Control
                      type="text"
                      value={newUser.address}
                      onChange={updateField}
                      placeholder="Enter Address..."
                      required
                    />
                  </Form.Group>
                </Col>
                <Col xs={4}>
                  <Form.Group controlId="city">
                    <Form.Label>City</Form.Label>
                    <Form.Control
                      type="text"
                      value={newUser.city}
                      onChange={updateField}
                      placeholder="Enter City..."
                      required
                    />
                  </Form.Group>
                </Col>
                <Col xs={4}>
                  <Form.Group controlId="postcode">
                    <Form.Label>Post Code</Form.Label>
                    <Form.Control
                      type="text"
                      value={newUser.postcode}
                      onChange={updateField}
                      placeholder="Enter Postcode..."
                      required
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col xs={12} className="mt-4 mb-3">
                  <h2 className="text-danger">Account information</h2>
                </Col>
                <Col xs={7}>
                  <Form.Group controlId="email">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                      type="email"
                      value={newUser.email}
                      onChange={updateField}
                      placeholder="Enter email"
                      required
                    />
                    <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
                  </Form.Group>
                </Col>
                <Col xs={7}>
                  <Form.Group controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      value={newUser.password}
                      onChange={updateField}
                      placeholder="Password"
                      required
                    />
                  </Form.Group>
                </Col>
              </Row>
              {isFormComplete && (
                <Button variant="primary" type="submit" className="mt-4">
                  Submit
                </Button>
              )}
            </Form>
          </Col>
        </Row>
      )}

      {users.length > 0 && (
        <Row className="mt-5">
          <Col xs={12}>
            <h2 className="d-block w-100 mb-3">All Users</h2>
          </Col>
          {users.map((e, index) => {
            return (
              <Col xs={4}>
                <RegisteredUsers key={index} index={index} user={e} />
              </Col>
            );
          })}
        </Row>
      )}
    </Container>
  );
}

export default Registration;
