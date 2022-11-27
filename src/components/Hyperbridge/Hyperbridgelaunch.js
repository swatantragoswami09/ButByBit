import react from "react";
import Grid from "@mui/material/Grid";
// import Laptop from "../../assets/image/aboutUs/addfundsMockup.svg";
import Crossmockup from "../../assets/image/wallet/crossmockup.svg";
import Profile1 from "../../assets/image/profiles/profile1.svg";
import HeroSection from "../../assets/image/wallet/Hero Section.svg";
import Roll from "../../assets/image/wallet/roll.svg";
import KeyIcon from "../../assets/image/wallet/keyIcon.svg";
import Phone4 from "../../assets/image/wallet/phone4.svg";
import CustomButton from "../../commonComponent/Button";
import Uparrow from "../../assets/image/Uparrow.svg";
import Googleplayimg from "../../assets/Googleplay.svg";
import Applestoreimg from "../../assets/Applestore.svg";
import DotLine from "../../assets/image/wallet/dotLine.svg";
import Transak from "../../assets/image/wallet/Transak.svg";
import Wyre from "../../assets/image/wallet/Wyre.svg";
import hyperbridge from "../../assets/image/hyperbridge/hyperbridge.svg";
import styled from "styled-components";
import circle from '../../assets/circle.svg';
import { Route, Switch, Link, HashRouter as Router } from "react-router-dom";
import HyperBridgelogo from "../../assets/image/Allinone/Productslogo/hyperbridge@3x.png";
import Hyperlendlogo from "../../assets/image/Allinone/products/Hyperlend.svg";
import Hyperstakelogo from "../../assets/image/Allinone/products/Hyperstake.svg";
import Hyperswaplogo from "../../assets/image/Allinone/products/Hyperswap.svg";
import Multichainlogo from "../../assets/image/Allinone/products/Multichain.svg";
import IntegrateEVM from "../../assets/image/backgroundimage/Maskgroup.png";
import Slider from "react-slick";
import "./hyperbridges.scss";
// import "./hyperLaunchNew.scss";

import { Carousel } from "antd";
const contentStyle = {
    height: "160px",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    background: "#364d79",
};

const ProductsSection = styled.div`
//   backdrop-filter: blur(34px);
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
  width: 200px;
`;

const HyperBridge = () => {
    const onChange = (currentSlide) => {
        console.log(currentSlide);
    };
    const cardList = [
        {
            title: "Permissionless Entry",
            description:
                "Enabling token bridge between major EVM & Non-EVM compatible blockchains without any entry barrier",
        },
        {
            title: "Interoperable Swap",
            description:
                "Omni-Directional Bridging across chains will allow a true use case for asset interoperability",
        },
        {
            title: "Multiple Wallet & Login Support",
            description:
                "Multiple wallet integrations like MetaMask, Coinbase, Trustwallet, Unstoppable Domains and more for wider accessibility",
        },
        {
            title: "Lightning Fast Transactions",
            description:
                "HyperBridge works on the Lock and Unlock mechanism to amplify bridging time across chains and completes the transactions in less than 2 minutes",
        },
        {
            title: "Interactive  Design Aesthetics",
            description:
                "Elevating the user interface to simplify Bridge understanding and usability for the masses",
        },
        {
            title: "Secured Ecosystem",
            description:
                "HyperBridge ensures utmost security by working on multi-layer inclusions to build a sustainable cross-chain application model",
        },
    ];
    const bulletList = [
        {
            title: "Bridge security",
            desc: "Bridge contract audited by renowned security firms like Halborn, Quill hash, Blocksec",
        },
        {
            title: "Security Locked Liquidity",
            desc: " HyperBridge will be equipped with Multi-Sig wallet functionality to move major portion of liquidity locked onto a cold wallet (in development)",
        },
        {
            title: "Asset Freeze functionality",
            desc: "Bridge contract will be encoded with asset freeze to restrict access to assets locked from any malicious attacks or unrecognized infringement",
        },
        {
            title: "Insurance Fund",
            desc: "A portion of the revenue generated will be stored as an insurance fund in a transparent secure address to sustain any fund loss (in development). ",
        },
        {
            title: "Bug Improvements",
            desc: "An ever open bounty program to further the security parameters for HyperBridge will dev and community feedback",
        },
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
            <div className="top-wallet margin-content">
                <div className="wallet-top-left">
                    <Grid
                        item
                        xs={12}
                        md={6}
                        sm={6}
                        lg={6}
                        className="walt-content walt-2"
                        container
                        spacing={2}
                        alignContent={"center"}
                        justifyContent="center"
                        direction={"row"}
                    >
                        <Grid item xs={11} className="walt-top-title">
                            Cross-Chain Interoperability Made Simple
                        </Grid>
                        <Grid item xs={11} className="walt-sub-title">
                            HyperBridge is a Token Bridge Protocol Across Multiple
                            Blockchains. The Gateway to Cross-Chain Interoperable ecosystem
                            that lets you bridge tokens on multiple chains at your fingertips
                        </Grid>
                        <Grid item xs={11} className="walt-top-btn">
                            <CustomButton btnName={"Enter App"} icon={Uparrow} />
                        </Grid>
                    </Grid>
                </div>
                <div className="hyper-brodeImg">
                    <img src={hyperbridge} />
                </div>
            </div>
            <div className="IntegrateEVM margin-content">
                <Grid
                    item
                    xs={12}
                    md={10}
                    sm={10}
                    lg={10}
                    //   className="walt-coentent walt-2"
                    container
                    spacing={2}
                    alignContent={"center"}
                    justifyContent="center"
                    direction={"row"}
                    className="wholewrapper"
                >
                    <Grid
                        item
                        xs={12}
                        md={6}
                        lg={6}
                        sm={6}
                        container
                        justifyContent={"center"}

                        className="Leftwarpper"
                    >
                        <div className='doller-container' >
                            <div className="font-color doller-text">$23,967,928</div>
                            <div className="dollet-head">Total Value Locked</div>
                        </div> 
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        md={6}
                        lg={6}
                        sm={6}
                        container
                        justifyContent={"center"}
                    >
                        <div className="doller-container">
                            <div className="dollet-head">
                                <b >05</b>Integrated EVM Chains
                            </div>
                            <div className="solona-text">SOLANA SUPPORT COMING SOON...</div>
                        </div>
                    </Grid>
                </Grid>
            </div>
            {/* <div className=""> */}
            <Grid
                item
                xs={12}
                container
                spacing={2}
                justifyContent="center"
                direction={"row"}
                className="side-wallet-Container img-hyper margin-content"
            >
                <Grid
                    item
                    xs={9}
                    md={9}
                    lg={9}
                    sm={9}
                    container
                    spacing={2}
                    justifyContent="center"
                    alignItems={"center"}
                    //   direction={"row"}
                    className="hyper-multi-block multi-block-chai"
                >
                    <Grid
                        item
                        xs={12}
                        md={10}
                        lg={10}
                        sm={10}
                        container
                        spacing={2}
                        // justifyContent="center"
                        // alignItems={"center"}
                        // direction={"row"}
                        className="ml-chain"
                    >
                        <Grid xs={12} className="walt-top-title">
                            Multiple Blockchains, Multiple Projects, Multiple Tokens, One
                            Bridge
                        </Grid>
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        md={10}
                        lg={10}
                        sm={10}
                        container
                        spacing={2}
                        justifyContent="center"
                        alignItems={"center"}
                        direction={"row"}
                    >
                        <Grid item xs={12} md={6} sm={6} lg={6} className="walt-sub-title">
                           <div className="bridge-gap">
                           HyperBridge is designed to bridge the gap enabling an
                           omnidirectional way to transferring tokenized assets
                           </div>
                        </Grid>
                        <Grid item xs={12} md={6} sm={6} lg={6} className="walt-sub-title">
                           <div className="bridge-gap">
                           From supporting mainstream wallets and login options to having
                           on-ramp & off-ramp solution, Hyperbridge is simplifying the use
                           case of Blockchain between users and projects
                           </div>
                        </Grid>
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
                className="cards-Container margin-content"
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
                        md={6}
                        sm={6}
                        lg={6}
                        className="cads-header info-wrap"
                        container
                        direction={"column"}
                        justifyContent="center"
                    >
                        <div className="cards-title overall">
                            Redefining Cross-Chain Functionality Through Industry First
                            Attribute
                        </div>
                        <div className="desc-font">
                            Experience DeFi through the technology-driven bridge with novel
                            functionalities
                        </div>
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        md={12}
                        sm={12}
                        className="each"
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
                                    sm={5.1}
                                    md={3.3}
                                    className="card-view card-duplicate"
                                    container
                                    spacing={2}
                                    justifyContent="center"
                                    direction={"row"}
                                >
                                    <Grid xs={12} className="desc-title">
                                        <div>{data.title}</div>
                                    </Grid>
                                    <Grid xs={12} className="desc-font">
                                        <div>{data.description}</div>
                                    </Grid>
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
                className="cards-Container margin-content"
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
                        md={6}
                        sm={6}
                        lg={6}
                        className="cads-header info-wrap"
                        container
                        direction={"column"}
                        justifyContent="center"
                    >
                        <div className="cards-title overall">
                            Adding Security Structures To Protect Locked Liquidity Across
                            Multiple Assets
                        </div>
                        <div className="desc-font">
                            Pushing the boundaries of the security layer build upon
                            HyperBridge to make it trustworthy and safe
                        </div>
                    </Grid>
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
                        className="bullet-view-box"
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
                                        <div className="font-color bullet-title">{data.title}</div>
                                        <div className="desc-font">{data.desc}</div>
                                    </div>
                                </Grid>
                            );
                        })}
                    </Grid>
                </Grid>
            </Grid>
            <ProductsSection className=" margin-content">
                <div className="productionWrapper">
                    <div className="productLeft">
                        <div className="Headine1">Audit Partners & Report Assessment</div>
                    </div>
                    <div className="productRight">
                        <ProductbarWrapper className="product-container">
                            <EachProduct className="each-product">
                                <Link to="/hyperswap">
                                    <Productlogo src={HyperBridgelogo} />
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
                    </div>
                </div>
            </ProductsSection>
            <Grid
                item
                xs={12}
                container
                spacing={2}
                justifyContent="center"
                alignItems={'center'}
                direction={"row"}
                className='l-content margin-content'
            >
                <Grid item xs={12} md={7} sm={6} lg={6} className='last-desc'>
                    HyperBridge is facilitating the rise of the biggest use-case for DeFi
                    bringing together the entire network of Blockchains, Projects, Users,
                    Investors to take advantage of the ever-growing utility of tokenized
                    assets in the Cross Chain world
                </Grid>
            </Grid>
        </div>
    );
};

export default HyperBridge;
