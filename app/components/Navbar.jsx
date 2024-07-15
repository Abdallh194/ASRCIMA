import Link from "next/link";
import React from "react";
import { Container } from "react-bootstrap";

const Navbar = () => {
  return (
    <nav>
      <Container className="HomeNavbar">
        <div className="logo">
          ASR<span>CINIMA</span>
        </div>
        <Link href="/Register" className="log-btn">
          Login
        </Link>
      </Container>
    </nav>
  );
};

export default Navbar;
