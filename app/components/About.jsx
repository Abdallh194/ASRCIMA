import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";

const About = () => {
  return (
    <div className="About">
      <Container fluid>
        <Row>
          <Col md={12} lg={6} className="Image-Card">
            <Image
              src="/homePage_spiderman.jpg"
              alt="spider man"
              width={1000}
              height={500}
              className="img-fluid"
            />
            <div className="aquar"></div>
          </Col>
          <Col md={12} lg={6} className="Info-Card">
            <div className="top-head">Watch anywhere. Cancel anytime.</div>
            <div className="main-head">ASR CINIMA</div>
            <div className="bg-head">
              Ready to watch? Unlimited movies, TV shows, and more
            </div>
            <div className="desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              temporibus labore quo laudantium quibusdam minus nemo deleniti
              eligendi
            </div>
            <Link href="/MoviesHome" className="more">
              Get Strated
            </Link>{" "}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
