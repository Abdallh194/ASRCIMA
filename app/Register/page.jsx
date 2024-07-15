import React from "react";
import { Container, Form, FormControl } from "react-bootstrap";

const Register = () => {
  return (
    <div>
      <Container>
        <Form>
          <FormControl
            type="text"
            className="form-control"
            placeholder="Email"
          />
          <FormControl
            type="password"
            className="form-control"
            placeholder="Password"
          />
        </Form>
      </Container>
    </div>
  );
};

export default Register;
