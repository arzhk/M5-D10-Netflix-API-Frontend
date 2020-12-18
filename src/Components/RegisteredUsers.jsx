import React from "react";
import { useState } from "react";
import { Alert, Spinner } from "react-bootstrap";

function RegisteredUsers({ index, user }) {
  const [isLoading, setIsLoading] = useState(true);

  setTimeout(() => {
    setIsLoading(false);
  }, 1000);

  return isLoading ? (
    <Spinner animation="border" variant="danger" disabled />
  ) : (
    <Alert variant="light">
      <p className="font-weight-bold">
        <i class="fas fa-user mr-2"></i> # {index + 1}
      </p>
      <div className="d-flex justify-content-between">
        <p className="font-weight-bold">Name:</p>
        <p>{user.name}</p>
      </div>
      <div className="d-flex justify-content-between">
        <p className="font-weight-bold">Surname:</p>
        <p>{user.surname}</p>
      </div>
      <div className="d-flex justify-content-between">
        <p className="font-weight-bold">Date of Birth:</p>
        <p>{user.dob}</p>
      </div>
      <div className="d-flex justify-content-between">
        <p className="font-weight-bold">Address:</p>
        <p>{user.address}</p>
      </div>
      <div className="d-flex justify-content-between">
        <p className="font-weight-bold">City:</p>
        <p>{user.city}</p>
      </div>
      <div className="d-flex justify-content-between">
        <p className="font-weight-bold">Postcode:</p>
        <p>{user.postcode}</p>
      </div>
      <div className="d-flex justify-content-between">
        <p className="font-weight-bold">Email:</p>
        <p>{user.email}</p>
      </div>
      <div className="d-flex justify-content-between">
        <p className="font-weight-bold">Password:</p>
        <p>{user.password}</p>
      </div>
    </Alert>
  );
}

export default RegisteredUsers;
