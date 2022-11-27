import react from "react";
import Grid from "@mui/material/Grid";
// import Laptop from "../../assets/image/aboutUs/addfundsMockup.svg";
import Crossmockup from "../../assets/image/wallet/crossmockup.svg";
import Profile1 from "../../assets/image/profiles/profile1.svg";

import Roll from "../../assets/image/wallet/roll.svg";
import Dollar from "../../assets/image/hyperstack/dollar.svg";
import Clock from "../../assets/image/hyperstack/clock.svg";
import Alarm from "../../assets/image/hyperstack/alarm.svg";
import Dollarnew from "../../assets/image/hyperstack/dollarnew.svg";
import Phone4 from "../../assets/image/wallet/phone4.svg";
import CustomButton from "../../commonComponent/Button";
import Uparrow from "../../assets/image/Uparrow.svg";
import Googleplayimg from "../../assets/Googleplay.svg";
import Applestoreimg from "../../assets/Applestore.svg";
import DotLine from "../../assets/image/wallet/dotLine.svg";
import Transak from "../../assets/image/wallet/Transak.svg";
import Wyre from "../../assets/image/wallet/Wyre.svg";
import Springlogo from "../../assets/image/hyperstack/Herosection.svg";
import Slider from "react-slick";
import "./hyperstack.scss";
import { Carousel } from "antd";
const contentStyle = {
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

// import "./hyperLaunchNew.scss";

const HyperStack = () => {
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };
  const cardList = [
    {
      icon: Dollar,
      description:
        "Liquidity providers, looking to stake their assets present on multiple chains to earn dynamic yield rewards.",
    },
    {
      icon: Alarm,
      description:
        "Long-Term investors wanting stable returns by locking their assets in their preferred ecosystem",
    },
    {
      icon: Clock,
      description:
        "Short-Term investors locking their assets for some passive revenue.",
    },
    {
      icon: Dollarnew,
      description:
        "Protocols looking to reduce sell pressure on their tokens by using long-term staking or LP incentives. ",
    },
  ];
  const stackList = [
    {
      title: "Single Asset Fixed Staking",
      list: [
        "Stake any asset available for a fixed time period.",
        "Higher APY for higher time frame",
        "Early redemption penalties applies to some of the staking if withdrawn before the maturity time frame",
      ],
    },
    {
      title: "Single Asset Flexible Staking",
      list: [
        "Stake any asset available in a non-binding time period",
        "Higher APY for higher time frame",
        "No add-on penalty for un-staking without the completion of time frame",
      ],
    },
    {
      title: "LP Token Staking",
      list: [
        "Lock LP tokens and earn extra rewards ",
        "Provide liquidity on available LP pools",
      ],
    },
  ];
  const list = [
    { count: "100K", name: "Assets staked worth" },
    { count: "2", name: "Chains activated" },
    { count: "10k", name: "Rewards distributed" },
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
      <div className="top-wallet">
        <div className="wallet-top-left">
          <Grid
            item
            xs={12}
            md={6}
            sm={6}
            lg={6}
            className="walt-content walt-2 hy-stack"
            container
            spacing={2}
            alignContent={"center"}
            justifyContent="center"
            direction={"row"}
          >
            <Grid item xs={11} className="walt-top-title">
              Locking asset liquidity on multiple chains is simpler than ever
            </Grid>
            <Grid item xs={11} className="walt-sub-title">
              Unlocking the potential of moving locked liquidity in a
              cross-chain interoperable protocol
            </Grid>
            <Grid item xs={11} className="walt-top-btn">
              <CustomButton btnName={"hyperstake"} width={12} icon={Uparrow} />
            </Grid>
          </Grid>
        </div>
        <div>
          <img src={Springlogo} style={{ width: "100%" }} />
        </div>
      </div>
      {/* <div className=""> */}

      <Grid
        item
        xs={12}
        container
        spacing={2}
        justifyContent="center"
        direction={"row"}
        className="asset-wallet-Container"
      >
        <Grid
          item
          xs={9}
          container
          spacing={3}
          justifyContent="center"
          direction={"row"}
          className="stack-header"
        >
          Hyper Stack Is A Multi-Chain Staking protocol <br /> built to cater a
          diverse set of stakeholders
        </Grid>
        <Grid
          item
          xs={10}
          className="hy-card cross-card"
          container
          spacing={3}
          justifyContent="center"
          direction={"row"}
        >
          {cardList.map((data) => {
            return (
              <Grid
                item
                xs={12}
                md={2.5}
                sm={2.5}
                className="card-views "
                container
                justifyContent="center"
                alignItems={"center"}
                direction={"row"}
              >
                <Grid xs={12} className="cross-icon-view">
                  <img src={data.icon} />
                </Grid>
                <Grid xs={12} className="stack-icon-des">
                  <div>{data.description}</div>
                </Grid>
              </Grid>
            );
          })}
        </Grid>
      </Grid>
      <Grid
        item
        xs={12}
        container
        spacing={2}
        justifyContent="center"
        direction={"row"}
        className="asset-wallet-Container"
      >
        <Grid
          item
          xs={12}
          container
          spacing={3}
          justifyContent="center"
          direction={"row"}
          className="stack-header"
        >
          HyperStake Is A Multi-Chain Staking protocol <br /> built to cater a
          diverse set of stakeholders
        </Grid>
        <Grid
          item
          xs={12}
          container
          spacing={3}
          justifyContent="center"
          direction={"row"}
        >
          {stackList.map((data) => {
            return (
              <Grid xs={12} md={3.5} className="stack-box" wrap="nowwrap">
                <div className="inner-box">
                  <div className="card-header">{data.title}</div>
                  <div>
                    <ul className="bullet-list">
                      {data.list.map((val) => {
                        return <li>{val}</li>;
                      })}
                    </ul>
                  </div>
                </div>
              </Grid>
            );
          })}
        </Grid>
        <div className="count-box stack-count">
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
                    xs={4}
                    sm={4}
                    md={4}
                    lg={4}
                    className={`count-cards ${index !== 2 && "border-card"}`}
                  >
                    <div className="count-number">{data.count}</div>
                    <div className="count-name">{data.name}</div>
                  </Grid>
                );
              })}
            </Grid>
          </Grid>
        </div>
      </Grid>
      {/* </div> */}
      {/* <div className="test">
        <Carousel afterChange={onChange}>
          <h3 style={contentStyle}>1</h3>
          <div>
            <h3 style={contentStyle}>2</h3>
          </div>
          <div>
            <h3 style={contentStyle}>3</h3>
          </div>
          <h3 style={contentStyle}>4</h3>
        </Carousel>
      </div> */}
    </div>
  );
};

export default HyperStack;
