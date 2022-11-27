import react from "react";
import Grid from "@mui/material/Grid";
import CustomButton from "../../commonComponent/Button";
import Uparrow from "../../assets/image/Uparrow.svg";
import hyperbridge from "../../assets/image/hyperbridge/hyperbridge.svg";
import styled from "styled-components";
import circle from "../../assets/circle.svg";
import Animationlogo2img from "../../assets/image/banner/Animationlogo2.svg";
import Hedra from "../../assets/image/hyperlend/hedra.svg";
import Fantom from "../../assets/image/hyperlend/fantom.svg";
import { useStyles } from "./Finalstyle";
import Topcontainer from "../../assets/image/HyperSwap/HeroSection.png";
import Box from "@mui/material/Box";
import "./hypers.scss";
import { Typography } from "@material-ui/core";
// import "./hyperLaunchNew.scss";

import { Carousel } from "antd";
const contentStyle = {
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

const Hyperlend = () => {
  const classes = useStyles();
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };
  const cardList = [
    {
      title: "Cross-chain interoperability",
      description:
        "Move your deposits on multiple chains to obtain more APY’s on your asset",
    },
    {
      title: "NFT collateral",
      description:
        "Borrow against your NFT  across multiple networks and assets",
    },
    {
      title: "Different deposit methods",
      description: "Such as ERC20 transfer and streaming.",
    },
  ];
  const bulletList = [
    "Transparent floating interest rates",
    "Support for multiple lending pools.",
    "Algorithmically driven interest rates are based on the supply and demand of assets.",
    "Transparent floating interest rates",
    "Peer to-Peer Lending and Borrowing",
    "Secured Ecosystem ",
    "Transparent collaterals",
  ];
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <div className="wallet-page">
      <div className="TopBackground swap-master">
        <Grid
          container
          item
          xs={11}
          lg={12}
          justifyContent={"flex-start"}
          alignItems={"center"}
          className="SwapPadding-left"
        >
          <Grid
            item
            xs={12}
            sm={7}
            md={7}
            lg={7}
            className="MobileViewAligment"
          >
            <div className="topTitle-hyperswap">
              Cross-chain agnostic <br></br>
              Lend / Borrow / Earn <br></br>
              Changing at one second
            </div>
            <div className="statement">
              A non-custodial multichain lending protocol built for individuals
              and institutions to make most of their digital assets
            </div>
            <CustomButton btnName="hyperlend" icon={Uparrow} />
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
        // className="cards-Container margin-content"
      >
        <Grid
          item
          xs={9}
          container
          spacing={2}
          justifyContent="center"
          direction={"row"}
          className="lend-space-all"
        >
          <div className="cmn-title3 align-content">
            Decentralised multichain money market to lend and borrow digital
            assets at interest rates determined by supply and demand.
          </div>
          <div className="cmn-sub-title2 desc-feature-font">Features:</div>
          <Grid
            item
            xs={12}
            md={12}
            sm={12}
            // className="each"
            container
            spacing={3}
            justifyContent="space-between"
            direction={"row"}
          >
            {cardList.map((data) => {
              return (
                <Grid
                  item
                  xs={12}
                  sm={5.1}
                  md={3.3}
                  className="card-lend-view card-duplicate"
                  container
                  spacing={2}
                  //   justifyContent="center"
                  //   direction={"row"}
                >
                  <Grid xs={12} className="cmn-title6 lend-title">
                    <div>{data.title}</div>
                  </Grid>
                  <Grid xs={12} className="cmn-sub-title2">
                    <div>{data.description}</div>
                  </Grid>
                </Grid>
              );
            })}
          </Grid>
        </Grid>
      </Grid>
      {/* <div className="supprt"> */}
      <Grid
        item
        xs={12}
        container
        spacing={2}
        justifyContent="center"
        direction={"row"}
        className="lend-space-all"
      >
        <Grid
          item
          xs={12}
          sm={9}
          lg={9}
          md={9}
          container
          spacing={2}
          justifyContent="space-between"
          direction={"row"}
          className="support-block"
        >
          <Grid
            item
            xs={12}
            sm={6}
            md={6}
            lg={6}
            container
            // justifyContent="center"
          >
            <div className="supp-content">
              <div className="suppot-title">Supported Chains</div>
              <div className="icon-box">
                <img src={Fantom} />
                <img src={Hedra} />
              </div>
            </div>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={6}
            lg={6}
            container
            justifyContent="flex-end"
          >
            <div className="supp-content">
              <div className="suppot-title">Supported Chains : 0.00%</div>
            </div>
          </Grid>
        </Grid>
      </Grid>
      {/* </div> */}
      <Grid
        item
        xs={12}
        container
        spacing={2}
        justifyContent="center"
        direction={"row"}
        className="lend-space-all"
      >
        <Grid
          item
          xs={9}
          md={9}
          sm={9}
          lg={9}
          container
          spacing={2}
          justifyContent="center"
          direction={"row"}
        >
          <Grid
            item
            xs={12}
            lg={12}
            sm={12}
            md={12}
            // className="each"
            container
            spacing={3}
            // justifyContent="center"
            className="bullets-box"
            direction={"row"}
          >
            {bulletList.map((data) => {
              return (
                <Grid
                  item
                  xs={12}
                  md={6}
                  sm={6}
                  lg={5.4}
                  className="bullet-content"
                >
                  <img src={circle} />
                  <div>
                    <div className="font-color cmn-title7">{data}</div>
                    {/* <div className="desc-font">{data.desc}</div> */}
                  </div>
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
        className="lend-space-all"
      >
        <Grid
          item
          xs={9}
          container
          spacing={2}
          justifyContent="center"
          direction={"row"}
        >
          <Grid item xs={12} md={12} sm={12} lg={12} className="last-audit">
            <div className="topTitle title-foot">Audited By:</div>

            {/* <h5 className="font-color Coming-soon"> Coming soon.....</h5> */}
          </Grid>
          <Grid item xs={12} md={12} sm={12} lg={12}>
            <div className="lend-footer">
              <div className="topTitle title-foot">
                Learn more about <br />
                HyperLend here
              </div>
              <CustomButton btnName="learn more" customstyle="btn-custom" icon={Uparrow} />
            </div>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Hyperlend;
