"use client";
import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import LeftSideBar from "../components/LeftSideBar";
import RightSideBar from "../components/RightSideBar";
import MovieNavbar from "../components/MovieNavbar";
import LoopFilm from "../components/LoopFilm";
import CenterMovieHomeMenu from "../components/CenterMovieHomeMenu";
import axios from "axios";
const MoviesHome = () => {
  let [HomeContent, setHomeContent] = useState([]);
  const Base_URL = "https://movies-api14.p.rapidapi.com/home";
  const options = {
    method: "GET",
    url: Base_URL,
    headers: {
      "X-RapidAPI-Key": "9b7928c1d2msha124e05e4b043abp1ede7bjsnbf13cd325843",
      "X-RapidAPI-Host": "movies-api14.p.rapidapi.com",
    },
  };
  useEffect((r) => {
    axios.get(Base_URL, options).then((response) => {
      setHomeContent(response.data);
    });
  }, []);
  console.log(HomeContent);
  return (
    <div className="HomeMoives">
      <MovieNavbar />
      <Row>
        <Col md={2} xs={12} className="sideBar-Left">
          <LeftSideBar HomeContent={HomeContent} />
        </Col>
        <Col md={8} xs={12} className="CenterContent">
          <Row>
            <LoopFilm HomeContent={HomeContent} />
          </Row>
          <CenterMovieHomeMenu />
        </Col>
        <Col md={2} xs={12} className="sideBar-right">
          <RightSideBar />
        </Col>
      </Row>
    </div>
  );
};

export default MoviesHome;
