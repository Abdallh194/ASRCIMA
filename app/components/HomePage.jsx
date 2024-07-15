import React from "react";
import Navbar from "./Navbar";
import { Form } from "react-bootstrap";

import { Button, TextField } from "@mui/material";

const HomePage = () => {
  return (
    <div className="HomePage">
      <div className="overlay">
        <Navbar />
        <div className="Content">
          <div className="head">Unlimited movies, TV shows, and more</div>
          <div className="sub-head">Watch anywhere. Cancel anytime.</div>
          <div className="mail-head">
            Ready to watch? Enter your email to create or restart your
            membership.
          </div>
        </div>
        <Form>
          <TextField
            id="outlined-textarea"
            label="Enter Your Email"
            placeholder="example@example.com"
            className="Inputs"
            multiline
          />
          <Button variant="contained" color="error" className="btnSubmit">
            Get Started
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default HomePage;
