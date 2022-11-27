// import react from 'react'

import { Grid } from "@mui/material";
import Uparrow from "../../assets/image/Uparrow.svg";
import CustomButton from "../../commonComponent/Button";
import Mobilelogoimg from "../../assets/image/Allinone/Mobilelogo.svg";
import styled from "styled-components";
import { Route, Switch, Link, HashRouter as Router } from "react-router-dom";
import HyperBridgelogo from "../../assets/image/Allinone/Productslogo/hyperbridge@3x.png";
import Hyperlendlogo from "../../assets/image/Allinone/products/Hyperlend.svg";
import Hyperstakelogo from "../../assets/image/Allinone/products/Hyperstake.svg";
import Hyperswaplogo from "../../assets/image/Allinone/products/Hyperswap.svg";
import Multichainlogo from "../../assets/image/Allinone/products/Multichain.svg";
import Dotlogo from "../../assets/image/Allinone/security/Dotlogo.svg";
import RoadMap from "../../components/Roadmaps/RoadMap";
import Media from "../mediaandPublication/Media";
import Audit from "../audits/Audit";

import { motion, Variants } from "framer-motion";
// import "./landing.scss";
import "./allinoneapp.scss";

const imageAnimate = {
  offscreen: { x: -100, opacity: 0 },
  onscreen: {
    x: 0,
    opacity: 1,
    rotate: [0, 10, 0],
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 1
    }
  }

}
const buttonsVariants = {
  visible: {
    x: -20,
    transition: { delay: 2 }
  },
  hover: {
    scale: 1.1,
    textShadow: "0px 0px 8px rgb(255,255,255)",
    boxShadow: "0px 0px 8px rgb(255,255,255)",
    transition: {
      duration: 0.3,
      yoyo: Infinity
    }
  }

}
const AllinoneappWrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
margin-bottom: 3rem
width: 100%;

`;
const Row1 = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  width: 80%;
  @media only screen and (min-width: 768px) {
    margin-bottom: 0rem !important;
  }
`;

const MobileLogoWrapper = styled.img``;
const Row1Right = styled.div`
  display: flex;
  flex-direction: column;
  font-family: PlusjakartaSans;
`;

const Row1Righthead1 = styled.div`
  font-family: PlusjakartaSans;
  height: 14px;
  font-weight: 500;
  font-size: 11px;
  line-height: 14px;
  /* identical to box height */

  letter-spacing: 3.5px;
  text-transform: uppercase;

  /* Acceent 2 */

  color: #99f8d0;
`;
const Row1RightHead2 = styled.div`
  height: 128px;
  font-family: PlusjakartaSans;
  font-weight: 700;
  font-size: 48px;
  line-height: 64px;
  margin-bottom: 1rem;
  /* or 133% */

  /* Main gradient */

  background: linear-gradient(88.49deg, #7afbe4 48.72%, #4a54f4 84.08%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
`;

const Row1Head3 = styled.div`
  font-family: PlusjakartaSans;
  font-weight: 400;
  font-size: 19px;
  line-height: 28px;
  /* or 175% */

  /* Main white */

  color: #d0d4de;
`;
const ProductsSection = styled.div`
  backdrop-filter: blur(34px);
  /* Note: backdrop-filter has minimal browser support */
  width: 100%;
  border-radius: 16px;
  display: flex;
  justify-content: center;
  border-radius: 20px;
  margin-bottom: 3rem;
`;

const ProductbarWrapper = styled.div`
  // display:grid;
  // grid-template-columns:repeat(3,1fr);
  // grid-template-rows:repeat(2,1fr);
  // grid-row-gap:11px;
  // grid-column-gap:11px;
  // @media only screen (min-width:768px){

  //   padding: 2rem !important;
  //   display:flex;
  //   flex-direction:column !important;

  // }
`;
const EachProduct = styled.div``;

const Productlogo = styled.img`
  height: 46.19px;
  width: 247px;
`;
const ProductLowerhead = styled.div`
  font-family: PlusjakartaSans;
  margin: 1rem 0;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  /* identical to box height, or 150% */

  /* Main gradient */

  background: linear-gradient(88.49deg, #7afbe4 48.72%, #4a54f4 84.08%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
`;
const SecurityRighthead1 = styled.div`
  font-family: PlusjakartaSans;

  font-weight: 500;
  font-size: 1rem;
  line-height: 14px;
  /* identical to box height */

  letter-spacing: 3.5px;
  text-transform: uppercase;

  /* Acceent 2 */

  color: #99f8d0;
  @media (max-width: 650px) {
    font-family: PlusjakartaSans !important;
    font-size: 1rem;
    line-height: 14px;
    /* identical to box height */
  
    letter-spacing: 3.5px;
    text-transform: uppercase;
  
    /* Acceent 2 */
  
    color: #99f8d0;
  }

`;

const SecurityRightHead2 = styled.div`
  font-family: PlusjakartaSans;
  margin: 2rem 0;
  font-weight: 700;
  font-size: 48px;
  line-height: 64px;
  /* or 133% */

  /* Main white */

  color: #d0d4de;
  @media (max-width: 650px) {
    font-family: PlusjakartaSans !important;
    font-size: 3rem;
    line-height: 64px;
    /* or 133% */
  
    /* Main white */
  
    color: #d0d4de;
  }
`;
const SecurityRightHead3 = styled.div`
  font-family: PlusjakartaSans;

  font-weight: 400;
  font-size: 16px;
  line-height: 28px;
  /* or 175% */

  /* Main white */

  color: #d0d4de;
  @media (max-width: 650px) {
    font-family: PlusjakartaSans !important;
    font-size: 1rem;
    line-height: 28px;
    /* or 133% */
  
    /* Main white */
  
    color: #d0d4de;
  }
`;
const SingleWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;
const Dotwrapper = styled.img`
  width: 10px;
  height: 10px;
`;

const SecurityLeftHead1 = styled.div``;
const BlockchainblockWrapper = styled.div`
  display: flex;
  // grid-template-columns: 25% 25% 25% 25%;
  @media (min-width: 750px) {
    // display: grid;
  /
  // grid-template-columns: 25% 25% 25% 25%;
  }
`;

const EachColumn = styled.div`
  // width: 50px;
  @media (max-width: 767px) {
    justify-content: center;
  }
`;
const LastEachColumn = styled.div`
  @media only screen and (min-width: 768px) {
    padding: 0 1rem !important;
  }
`;
const Numberhead = styled.div`
  // width: 66px;
  height: 64px;
  font-family: "Plus Jakarta Sans";
  font-weight: 700;
  // font-size: 48px;
  line-height: 64px;
  /* identical to box height, or 133% */

  text-align: center;

  /* Acceent 2 */

  color: #99f8d0;
`;
const Subhead = styled.div`
  // width: 119px;
  height: 28px;

  font-family: "Plus Jakarta Sans";
  font-weight: 700;
  font-size: 20px;
  line-height: 28px;
  /* identical to box height, or 140% */

  text-align: center;

  /* Main white */

  color: #d0d4de;
`;

const LandingPage = () => {
  const list = [
    { count: "04", name: "Blockchains" },
    { count: "15+", name: "Partners" },
    { count: "20+", name: "Backers" },
    { count: "80k+", name: "Community" },
  ];
  const images = [{ img: HyperBridgelogo }];
  return (
    <motion.div initial={"offscreen"}
      whileInView={"onscreen"}
      viewport={{ once: false, amount: 0.5 }}
      transition={{ staggerChildren: 0.5 }}>
      <div className="land-top-container" >
        <Grid container item xs={10} sm={7} md={7}>
          <Grid item xs={12} sm={7} md={7}>
            <div className="topTitle">
              Diversifying <br />
              the DeFi Ecosystem
            </div>
            <div className="statement">
              By introducing of cross-chain interoperability in everything Hyper
              for Defi 2.0 Defragmented
            </div>
            <CustomButton variants={buttonsVariants}
              whileHover="hover" btnName="Cross chain world" width={274} icon={Uparrow} />

          </Grid>
        </Grid>
      </div>
      <div className="count-box">
        <Grid container direction="row" justifyContent="center">
          <Grid
            item
            xs={10}
            sm={6}
            md={6}
            container
            direction="row"
            className="count-list"
          >
            {list.map((data, index) => {
              return (
                <Grid
                  item
                  xs={3}
                  sm={3}
                  md={3}
                  lg={3}
                  className={`count-cards ${index !== 3 && "border-card"}`}
                >
                  <div className="count-number">{data.count}</div>
                  <div className="count-name">{data.name}</div>
                </Grid>
              );
            })}
          </Grid>
        </Grid>
      </div>
      <Grid container justifyContent={"center"}>
        <Grid
          item
          xs={12}
          container
          spacing={2}
          justifyContent="center"
          direction={"row"}
          className="info-wrap"
        >
          <Grid
            item
            xs={9}
            container
            spacing={2}
            justifyContent="center"
            alignItems={"center"}
            direction={"row"}
          >
            <Grid item xs={12} sm={6} md={6} className="lan-evm-image" >

              <img className="anima"

                src={Mobilelogoimg} />

            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <div className="lan-mob-title">One of a Kind All In One</div>
              <div className="lan-mob-main"><span className="mobile-title"> Mobile First</span> DeFi Platform</div>
              <div className="lan-mob-des">
                Defragmented by chain agnostic protocols we are eliminating the
                need to jump on endless applications and bring the most
                inclusive framework of DeFi solutions To empower Innovators,
                Builders and Traders we are revealing Mobile First DeFi
                Application under which everything that you want to do, you can
                do{" "}
              </div>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          xs={12}
          container
          spacing={2}
          justifyContent="center"
          direction={"row"}
          className="info-wrap"
        >
          <Grid
            item
            xs={9}
            container
            spacing={2}
            justifyContent="center"
            alignItems={"center"}
            direction={"row"}
            className="productionWrapper"
          >
            <Grid
              item
              xs={12}
              sm={6}
              md={6}
              container
              justifyContent="center"
              direction={"row"}
            >
              <div className="productLeft">
                <div className="Headine1">
                  Introducing  <br></br>
                  Everything <div className="font-color">Hyper</div>
                </div>
                <div className="Headline2">
                  Discover The Most Inclusive Set of Cross-Chain DApps Pushing
                  Interoperability At The Forefront
                </div>
              </div>

            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <div className="productRight">
                <ProductbarWrapper className="product-container">
                  <EachProduct className="each-product">
                    <Link to="/hyperswap">
                      <Productlogo src={HyperBridgelogo} />
                    </Link>
                  </EachProduct>
                  <EachProduct className="each-product">
                    <Link to="/hyperlend">
                      <Productlogo src={Hyperlendlogo} />
                    </Link>
                  </EachProduct>
                  <EachProduct className="each-product">
                    <Link to="/hyperswap">
                      <Productlogo src={Hyperlendlogo} />
                    </Link>
                  </EachProduct>
                  <EachProduct className="each-product">
                    <Link to="/hyperswap">
                      <Productlogo src={Hyperswaplogo} />
                    </Link>
                  </EachProduct>
                  <EachProduct className="each-product">
                    <Link to="/hyperswap">
                      <Productlogo src={Multichainlogo} />
                    </Link>
                  </EachProduct>
                </ProductbarWrapper>

                <ProductLowerhead>More DApps Landing Soon...</ProductLowerhead>
              </div>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          xs={12}
          container
          spacing={2}
          justifyContent="center"
          direction={"row"}
          className="info-wrap"
        >
          <Grid
            item
            xs={9}
            container
            spacing={2}
            justifyContent="center"
            alignItems={"center"}
            direction={"row"}
            className="security-container"
          >
            <Grid
              item
              xs={12}
              sm={6}
              md={6}
              container
              justifyContent="center"
              direction={"row"}
            >
              <div className="securityLeft">
                <SecurityRighthead1>
                  One of a Kind All In One
                </SecurityRighthead1>

                <SecurityRightHead2>
                  Security Parameter <br></br>Engaged
                </SecurityRightHead2>
                <SecurityRightHead3>
                  Discover The Most Inclusive Set of Cross-Chain <br></br>DApps
                  Pushing Interoperability At The Forefront
                </SecurityRightHead3>
              </div>
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <div className="securityLeft">
                <SingleWrapper>
                  <Dotwrapper src={Dotlogo} className="dotLogo" />
                  <SecurityLeftHead1 className="leftHeadeline">
                    Audits By Industry Leading Partners
                  </SecurityLeftHead1>
                </SingleWrapper>

                <SingleWrapper>
                  <Dotwrapper src={Dotlogo} className="dotLogo" />
                  <SecurityLeftHead1 className="leftHeadeline">
                    Long Testnet Phases For Bug Fixes & Vulnerability
                    Identification
                  </SecurityLeftHead1>
                </SingleWrapper>

                <SingleWrapper>
                  <Dotwrapper src={Dotlogo} className="dotLogo" />
                  <SecurityLeftHead1 className="leftHeadeline">
                    Adoption of Practises To Safeguard Liquidity & Assets Locked
                  </SecurityLeftHead1>
                </SingleWrapper>
              </div>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          xs={12}
          container
          spacing={2}
          justifyContent="center"
          direction={"row"}
          className="info-wrap"
        >
          {/* <Grid
            item
            xs={10}
            container
            spacing={2}
            justifyContent="center"
            alignItems={"center"}
            direction={"row"}
          > */}
          {/* <Grid item xs={10}> */}
          <Audit />
          {/* <PartnerLanding /> */}
          <RoadMap />
          <Media />
        </Grid>
        {/* </Grid> */}
        {/* </Grid> */}
      </Grid>
    </motion.div>
  );
};

export default LandingPage;
