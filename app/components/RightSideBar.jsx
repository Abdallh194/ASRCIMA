import { IconButton, TextField } from "@mui/material";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import ConnectedTvIcon from "@mui/icons-material/ConnectedTv";
import EmojiNatureIcon from "@mui/icons-material/EmojiNature";
import BroadcastOnHomeIcon from "@mui/icons-material/BroadcastOnHome";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import Diversity3Icon from "@mui/icons-material/Diversity3";
import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";
import AddReactionIcon from "@mui/icons-material/AddReaction";
import UpdateIcon from "@mui/icons-material/Update";
import FilterAltIcon from "@mui/icons-material/FilterAlt";

const RightSideBar = () => {
  return (
    <>
      <TextField
        label="Search in ASR Cinima"
        sx={{ width: "100%", direction: "ltr" }}
        InputProps={{
          endAdornment: (
            <IconButton>
              <SearchIcon />
            </IconButton>
          ),
        }}
      />
      <div className="section">
        <i
          class="bi bi-camera-reels-fill section-icon"
          style={{ color: "#ff00fc" }}
        ></i>
        <div className="secion-name">Films</div>
      </div>
      <div className="section">
        <ConnectedTvIcon className="section-icon" sx={{ color: "#650ec7" }} />
        <div className="secion-name">Series</div>
      </div>
      <div className="section">
        <EmojiNatureIcon className="section-icon" sx={{ color: "#ff7800" }} />
        <div className="secion-name"> Anime And Cartoon</div>
      </div>
      <div className="section">
        <FitnessCenterIcon className="section-icon" sx={{ color: "#65ff00" }} />
        <div className="secion-name">Wrestling</div>
      </div>
      <div className="section">
        <BroadcastOnHomeIcon
          className="section-icon"
          sx={{ color: "#2d63af" }}
        />
        <div className="secion-name"> tv programs</div>
      </div>
      <hr />
      <div className="filter-section">
        <div className="filter-head">Filters and customization</div>
        <div className="filter-card">
          <Diversity3Icon sx={{ fontSize: "45px" }} />
          <div style={{ marginRight: "10px" }}>
            <div>Age group</div>
            <h5 style={{ marginTop: "5px", fontSize: "19px" }}>
              Censorship of scenes
            </h5>
          </div>
        </div>
        <div className="filter-card" style={{ backgroundColor: "#ff7800" }}>
          <TravelExploreIcon sx={{ fontSize: "45px" }} />
          <div style={{ marginRight: "10px" }}>
            <div>Year fo Production</div>
            <h5 style={{ marginTop: "5px", fontSize: "19px" }}>
              customiz the year
            </h5>
          </div>
        </div>
        <div className="filter-card" style={{ backgroundColor: "#2d63af" }}>
          <SettingsSuggestIcon sx={{ fontSize: "45px" }} />
          <div style={{ marginRight: "10px" }}>
            <div>category</div>
            <h5 style={{ marginTop: "5px", fontSize: "18px" }}>
              Choose your category
            </h5>
          </div>
        </div>
        <div className="filter-card" style={{ backgroundColor: "#ff00fc" }}>
          <UpdateIcon sx={{ fontSize: "45px" }} />
          <div style={{ marginRight: "10px" }}>
            <div>Up To Date</div>
            <h5 style={{ marginTop: "5px", fontSize: "18px" }}>
              Latest additions
            </h5>
          </div>
        </div>
        <div className="filter-card" style={{ backgroundColor: "#02bec7" }}>
          <AddReactionIcon sx={{ fontSize: "45px" }} />
          <div style={{ marginRight: "10px" }}>
            <div>interests</div>
            <h5 style={{ marginTop: "5px", fontSize: "17px" }}>
              Determine your interests
            </h5>
          </div>
        </div>
        <div className="filter-card" style={{ backgroundColor: "#95aa00" }}>
          <FilterAltIcon sx={{ fontSize: "45px" }} />
          <div style={{ marginRight: "10px" }}>
            <div>Display type</div>
            <h5 style={{ marginTop: "5px", fontSize: "17px" }}>
              Choose your flavour
            </h5>
          </div>
        </div>
      </div>
    </>
  );
};

export default RightSideBar;
