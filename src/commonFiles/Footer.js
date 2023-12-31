import React from "react";
import { useContext } from "react";
import UserContext from "../contextApi/UserContext";
// import { LOGO_IMG } from "../utils/common";
import {
  GMAIL_URL,
  TWITTER_URL,
  LINKEDIN_URL,
  FACEBOOK_URL,
  INSTAGRAM_URL,
  YOUTUBE_URL,
  SKYPE_URL,
} from "../utils/social_links";
import { BiLogoGmail } from "react-icons/bi";
import { BsGithub } from "react-icons/bs";

import {
  TiSocialLinkedin,
  TiSocialSkype,
  TiSocialTwitter,
  TiSocialInstagram,
  TiSocialYoutube,
  TiSocialFacebook,
} from "react-icons/ti";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const { loggedInUser } = useContext(UserContext);
  const navigate = useNavigate();
  return (<>
    <div className="mt-5">
    </div>
    <div className="footer mt-5">
      {/* <div className="footer-logo">
      <img width="200px" height="80px" src={LOGO_IMG} alt="food-logo" /> */}
      <p className="social p-2">
        Created by {loggedInUser} © 2023 Namaste React  <span className="social" onClick={() => navigate({ GMAIL_URL })}>
          <BiLogoGmail to={GMAIL_URL} />
        </span>
        <span className="social" onClick={() => window.location.href = 'https://www.instagram.com/___akash45____/'}>
        <TiSocialInstagram />
         </span>

        <span className="social" onClick={() => window.location.href = 'https://www.linkedin.com/in/akashmaddhehsiya06/'}>
        <TiSocialLinkedin/>
         </span>

        <span className="social" onClick={() => window.location.href = 'https://github.com/akashmaddheshiya06'}>
        <BsGithub/>
         </span>

      </p>
    </div>
    </>
  );
};

export default Footer;
