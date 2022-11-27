import react from "react";
import Grid from "@mui/material/Grid";
// import HyperBridgelogo from "../../assets/image/Allinone/Productslogo/hyperbridge@3x.png";
// import Hyperlendlogo from "../../assets/image/Allinone/products/Hyperlend.svg";
import styled from "styled-components";
import { Route, Switch, Link, HashRouter as Router } from "react-router-dom";
import serverIcon from "../../assets/image/hyperLaunch/serverIcon.svg";
import Uparrow from "../../assets/image/Uparrow.svg";
import Stackimage from "../../assets/image/hyperLaunch/Stackimage.svg";
import Defi from "../../assets/image/hyperLaunch/defi.svg";
import Mobile from "../../assets/image/hyperLaunch/mobileIcon.svg";
import HyperBridgelogo from "../../assets/image/Allinone/Productslogo/hyperbridge@3x.png";
import Hyperlendlogo from "../../assets/image/Allinone/products/Hyperlend.svg";
import Hyperstakelogo from "../../assets/image/Allinone/products/Hyperstake.svg";
import Hyperswaplogo from "../../assets/image/Allinone/products/Hyperswap.svg";
import Multichainlogo from "../../assets/image/Allinone/products/Multichain.svg";
import CustomButton from "../../commonComponent/Button";
import "./hyperLaunchNew.scss";

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
const Productlogo = styled.img`
  height: 46.19px;
  width: 247px;
`;
const ProductLowerhead = styled.div`
  font-family: PlusjakartaSans;
  margin-left: 1rem;
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
const HyperLaunchNew = () => {
  const cardList = [
    { description: "Technical support for multi-chain acessibilty" },
    { description: "Free cross-chain bridge support" },
    { description: "Revenue  rebate" },
    {
      description: "Integration in Spherium's suit of cross-chain applications",
    },
    { description: "Marketing collabrations to build  a stronger ecosystem" },
    { description: "Defined  revenue structure" },
  ];
  return (
    <div className="launch-whole-container container">
      <Grid
        item
        xs={12}
        container
        spacing={2}
        justifyContent="center"
        direction={"row"}
        className="header-Container"
      >
        <Grid item xs={12} sm={9} md={11} className="lan-header font-color">
          HyperLaunch
        </Grid>
        <Grid item xs={9} className="lan-description">
          Empowering,equipping and enabling enterprising <br /> projects.
        </Grid>
      </Grid>

      <div className="curve-bg">
        <Grid
          item
          xs={12}
          container
          spacing={2}
          justifyContent="center"
          direction={"row"}
          className="info-Container"
        >
          <Grid item xs={8} className="lan-info-container">
            <div className="lan-info-header font-color">
              Spherium Finance introduces
            </div>{" "}
            an incubation & grant program for
            <br /> Web3 projects to experience <br /> Cross-Chain
            Interoperability.
            <br /> A unique, fast and seamless way to <br /> connect with
            cross-chain compatible <br /> DeFi applications equipped with <br />{" "}
            cross-funcionality
          </Grid>
        </Grid>
      </div>
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
                Introducing <br></br> Everything{" "}
                <div className="hyperTxt">Hyper</div>
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
          direction={"row"}
        >
          <Grid item xs={12} sm={6} md={6} className="lan-evm-content">
            <div className="evm-text">
              {" "}
              Access to 20+ EVM & <br /> Non EVM compatible chains
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={6} className="lan-evm-image">
            <img className="animationImgs" src={Stackimage} />
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
          direction={"row"}
          className="wrap-reverse"
        >
          <Grid item xs={12} sm={6} md={6} className="lan-evm-image">
            <img className="animationImgs" src={serverIcon} />
          </Grid>
          <Grid item xs={12} sm={6} md={6} className="lan-evm-content">
            <div className="evm-text">
              {" "}
              Add token utility through <br /> 5+ DeFi solutions
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
        >
          <Grid item xs={12} sm={6} md={6} className="lan-evm-content">
            <div className="evm-text">
              {" "}
              Token availability on <br /> mobile app interface
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={6} className="lan-evm-image">
            <img className="animationImgs" src={Mobile} />
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
        className="cards-Container"
      >
        <Grid
          item
          xs={9}
          container
          spacing={2}
          justifyContent="center"
          direction={"row"}
        >
          <Grid
            item
            xs={12}
            className="cads-header info-wrap"
            container
            direction={"column"}
            justifyContent="center"
          >
            <div className="cards-title">
              How do we look to make an impact through HyperLaunch
            </div>
            <div className="font-color card-sub-title">HyperLaunch</div>
          </Grid>
          <Grid
            item
            xs={10}
            className="each"
            container
            spacing={3}
            justifyContent="center"
            direction={"row"}
          >
            {cardList.map((data) => {
              return (
                <Grid item xs={5.5} sm={3.5} md={3.5} className="card-view">
                  {data.description}
                </Grid>
              );
            })}
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
          xs={8}
          container
          spacing={2}
          justifyContent="center"
          direction={"row"}
          className="launchPad-content"
        >
          <Grid item xs={12} sm={6} md={6} className="launchPad-evm">
            <div className="evm-text">
              Be a part of the most <br /> unique cohort of projects <br /> from
              DeFi, NFT, P2E <br /> Launchpad To DAOs
            </div>
          </Grid>
          <Grid
            item
            xs={12} sm={6} md={6}
            container
            spacing={2}
            justifyContent="center"
            alignItems="flex-end"
            direction={"row"}
          >
            <Grid item xs={4.5}>
              <CustomButton btnName={"Apply Here"} icon={Uparrow} />
            </Grid>
            <Grid item xs={4.5}>
              <CustomButton btnName={"Talk to us"} icon={Uparrow} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default HyperLaunchNew;
