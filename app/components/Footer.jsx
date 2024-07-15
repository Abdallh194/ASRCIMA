import { Button, TextField } from "@mui/material";
import React from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import ChildCareIcon from "@mui/icons-material/ChildCare";
import MovieIcon from "@mui/icons-material/Movie";
import BrowserUpdatedIcon from "@mui/icons-material/BrowserUpdated";

const Footer = () => {
  // GET YEAR
  let year = new Date().getFullYear();
  return (
    <div className="footer">
      <div className="overlay">
        <Container className="content">
          <div className="head">
            Ready to watch? Enter your email to create your membership.
          </div>
          <div className="desc">
            subscribe to our newsletter to get the latest film of this movie
          </div>
          <Form>
            <TextField
              id="name"
              label="Your Name"
              placeholder="Abdallh Sabry"
              className="Inputs name"
              multiline
            />
            <TextField
              id="email"
              label="Your Email"
              placeholder="example@example.com"
              className="Inputs email"
              multiline
            />
            <Button variant="contained" color="error">
              Subscribe{" "}
            </Button>
          </Form>
          <Row style={{ width: "100%", marginTop: "50px" }}>
            <Col md={4} sm={12} className="foot-card">
              <ChildCareIcon sx={{ fontSize: "115px" }} />
              <div className="card-head">Create profiles for kids</div>
              <div className="card-desc">
                Send kids on adventures with their favorite characters in a
                space made just for them
              </div>
            </Col>
            <Col md={4} sm={12} className="foot-card">
              <MovieIcon sx={{ fontSize: "115px" }} />
              <div className="card-head">Watch everywhere</div>
              <div className="card-desc">
                Stream unlimited movies and TV shows on your phone, tablet,
                laptop, and TV.
              </div>
            </Col>
            <Col md={4} sm={12} className="foot-card">
              <BrowserUpdatedIcon sx={{ fontSize: "115px" }} />
              <div className="card-head">Download your shows</div>
              <div className="card-desc">
                Save your favorites easily and always have something to watch.
              </div>
            </Col>
          </Row>
          <div className="copy">
            <div className="">
              {year} © ASR CINIMA, All Right Reserved. Designed By Abdallh Sabry
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Footer;
