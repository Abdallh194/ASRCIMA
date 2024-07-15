import Image from "next/image";
import React from "react";
import { Col, Row } from "react-bootstrap";
import { CircularProgress } from "@mui/material";
const LoopFilm = ({ HomeContent }) => {
  // generate random num
  function getRandomArbitrary(min, max) {
    return (Math.random() * (max - min) + min).toFixed(1);
  }
  return (
    <>
      {HomeContent.length > 0 ? (
        HomeContent.map((e) => {
          return (
            <Col md="2" className="Movie-Card" key={e.movies[1]._id}>
              <Image
                src={e.movies[1].poster_path}
                alt="das"
                width={300}
                height={200}
                className="img-fluid"
              />
              <div class="ribbon-wrapper">
                <div class="ribbon">{getRandomArbitrary(5, 10)}</div>
              </div>
              <div className="Movies-details">
                <div className="movie-name">
                  {e.movies[1].original_title.slice(0, 16)}
                </div>
                <div className="type">{e.movies[1].genres[1]}</div>
                <div className="year">
                  Year of release : {e.movies[1].release_date}
                </div>
              </div>
              <div className="btns">
                <div className="btn1">Watch</div>
                <div className="btn1">Download</div>
              </div>
            </Col>
          );
        })
      ) : (
        <CircularProgress className="progressCircle" />
      )}
    </>
  );
};

export default LoopFilm;
