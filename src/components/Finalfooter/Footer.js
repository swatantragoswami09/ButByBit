import React, { startTransition, useEffect } from "react";
import Googleplayimg from "../../assets/Googleplay.svg";
import Applestoreimg from "../../assets/Applestore.svg";
import Facebook from "../../assets/image/Facebook.svg";
import Instagram from "../../assets/image/Insta.svg";
import Email from "../../assets/image/Email.svg";
import Likedin from "../../assets/image/Lin.svg";
import Twitter from "../../assets/image/Twitter.svg";
import spheriumlogo from "../../assets/image/banner/spheriumlogo.svg";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";

import "./Footer.css";

const FooterContainer = styled.div``;

// const FooterWrapper = styled.div`
//   display: grid;
//   grid-teamplate-columns: 50% auto;
//   grid-gap: 123px;
// `;
const DownlaodMobileWrapper = styled.div`
  display: flex;
  justify-content: flex-startTransition;
  flex-direction: column;
`;
const DownloadHead = styled.h1`
  color: #d0d4de;
`;
const Mobilehead = styled.h2`
  background: #7afbe4;
  background: linear-gradient(to right, #7afbe4 0%, #4a54f4 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
const Descripation = styled.h5`
  margin: 2rem 0;
  color: #5d6774;
`;
const StoreWrapper = styled.div`
  display: grid;
  flex-direction: row;
  grid-template-columns: 40% 40%;
`;
const Googleplay = styled.div`
  width: 100%;
  max-width: 154px;
`;
const Applestore = styled.div`
  width: 100%;
  max-width: 142px;
`;
const Footer = () => {
  const list = [
    "Products",
    "Quick Link",
    "Developers",
    "Support",
    "Hyperswap",
    "Home",
    "Documentation",
    "Terams of use",
    "",
    "About us",
    "Governance",
    "privacy policy",
    "",
    "Blog",
    "Whitepaper",
    "Documentation",
    "Media Kit",
    "",
    "Career",
    "Tokenmics",
    "Contact us",
    "",
    "FAQs",
  ];
  const footerList = [
    {
      title: "Products",
      list: [
        "Hyperswap",
        "Hyperlend",
        "Hyperstaking",
        "Cross chain Bridge",
        "Spherium Wallet",
      ],
    },
    {
      title: "Quick Link",
      list: ["Home", "Aboutus", "Blog", "Careers", "FAQs"],
    },
    {
      title: "Developers",
      list: ["Documentation", "Governance", "Whitepaper", "Tokenmics"],
    },
    {
      title: "Support",
      list: ["Terams of use", "privacy policy", "Media Kit", "Contact us"],
    },
  ];
  return (
    <div className="FooterContainer">
      <div className="FooterWrapper">
        <div className="leftFooter">
          <DownlaodMobileWrapper>
            <DownloadHead className="spherium-dwn">
              Download Spherium
            </DownloadHead>
            <Mobilehead className="spherium-dwn">mobile wallet</Mobilehead>
          </DownlaodMobileWrapper>
          <Descripation className="des-ff">
            Swap, Lend, Buy, Transfer, Bridge and Provide Liquidity in Pools In
            Just A Single Tap
          </Descripation>

          <StoreWrapper>
            <Link>
              {" "}
              <img className="showImages" src={Googleplayimg} />
            </Link>
            <Link>
              <img className="showImages" src={Applestoreimg} />
            </Link>
          </StoreWrapper>
        </div>
        <div className="FooterRightContainer">
          <Grid
            item
            xs={12}
            sm={12}
            container
            spacing={2}
            display="flex"
            justifyContent="center"
            flexDirection={"row"}
            className="footerList"
          >
            {footerList.map((data) => {
              return (
                <Grid item xs={6} lg={3}>
                  <div className="f-title">{data.title}</div>
                  {data.list.map((val) => {
                    return (
                      <div>
                        <Link className="listItems">{val}</Link>
                      </div>
                    );
                  })}
                </Grid>
              );
            })}
          </Grid>
          <div></div>
        </div>
      </div>
      <div className="bottomFooter">
        <div className="bottom-first">
          <div className="showLogo">
            <img src={spheriumlogo} />
          </div>
          <div className="copyrightText">
            <div>© 2022 Copyright and rights reserved</div>
          </div>
        </div>
        <div className="iconList">
          <img className="iconListimg" src={Facebook} />
          <img className="iconListinsta" src={Instagram} />
          <img className="iconListimg" src={Email} />
          <img className="iconListimg" src={Likedin} />
          <img className="iconListimg" src={Twitter} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
