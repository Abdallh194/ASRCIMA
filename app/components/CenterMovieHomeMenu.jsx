import React from "react";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import AnimationIcon from "@mui/icons-material/Animation";
import Diversity1Icon from "@mui/icons-material/Diversity1";
import VaccinesIcon from "@mui/icons-material/Vaccines";
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";
const CenterMovieHomeMenu = () => {
  return (
    <div className="center-menu">
      <div className="ternding" style={{ backgroundColor: "#02bec7 " }}>
        <LocalFireDepartmentIcon fontSize="large" /> Trending Movies
      </div>
      <div className="ternding" style={{ backgroundColor: "#2d63af" }}>
        <AnimationIcon fontSize="large" /> Best Animation Movies
      </div>
      <div className="ternding" style={{ backgroundColor: "#ff00fc" }}>
        <Diversity1Icon fontSize="large" /> Famility Time
      </div>
      <div className="ternding" style={{ backgroundColor: "#3c9a4d" }}>
        <VaccinesIcon fontSize="large" /> shot of adrenaline
      </div>
      <div className="ternding" style={{ backgroundColor: "#ff7800" }}>
        <LocalLibraryIcon fontSize="large" />
        Docuseries
      </div>
    </div>
  );
};

export default CenterMovieHomeMenu;
