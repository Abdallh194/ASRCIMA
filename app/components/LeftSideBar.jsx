import React from "react";
import TwitterIcon from "@mui/icons-material/Twitter";
import TelegramIcon from "@mui/icons-material/Telegram";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { CircularProgress } from "@mui/material";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";

const LeftSideBar = ({ HomeContent }) => {
  return (
    <React.Fragment>
      <div className="head">
        Follow <span>ASRCINIMA</span>
      </div>
      <a
        href="https://twitter.com/AbdallhSabry9"
        className="social"
        target="_blanck"
      >
        <div className="social-name">Twitter / تويتر</div>
        <TwitterIcon
          className="social-icon"
          style={{ backgroundColor: "#1DA1F2" }}
        />
      </a>
      <a href="#s" className="social">
        <div className="social-name">Telegram / تيليجرام</div>
        <TelegramIcon
          className="social-icon"
          style={{ backgroundColor: "#229ED9" }}
        />
      </a>
      <a
        href="https://www.facebook.com/profile.php?id=100007172563893"
        target="_blanck"
        className="social"
      >
        <div className="social-name">Facebook / فيسبوك</div>
        <FacebookIcon
          className="social-icon"
          style={{ backgroundColor: "#4267B2" }}
        />
      </a>

      <a href="#a" className="social">
        <div className="social-name">YouTube / يوتيوب</div>
        <YouTubeIcon
          className="social-icon"
          style={{ backgroundColor: "#FF0000" }}
        />
      </a>

      <a href="https://wa.me/+201091415560" className="social" target="_blanck">
        <div className="social-name">WhatsApp / واتساب</div>
        <WhatsAppIcon
          className="social-icon"
          style={{ backgroundColor: "#25D366" }}
        />
      </a>
      <hr />
      <div className="commons">
        <div className="common-head">common in ASR Cinima</div>
        {HomeContent.length > 0 ? (
          HomeContent.map((e) => {
            return (
              <div className="ternding" key={e.title}>
                Watch {e.title.slice(0, 25)}{" "}
                <LocalFireDepartmentIcon color="error" />
              </div>
            );
          })
        ) : (
          <CircularProgress className="progressCircle" />
        )}
      </div>
    </React.Fragment>
  );
};

export default LeftSideBar;
