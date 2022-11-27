import * as React from 'react';

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import hyperbridge from "../../assets/image/hyperbridge/hyperbridge.svg";
import { useStyles } from './style';
import IntegrateEVM from "../../assets/image/backgroundimage/Maskgroup.png";
import Uparrow from "../../assets/image/Uparrow.svg";
import Typography from '@mui/material/Typography';
import WaveBackground from "../../assets/image/hyperbridge/wave1.png"
import Container from '@mui/material/Container';
import WebImage from '../../commonComponent/webImge';
import { red } from '@mui/material/colors';
import { textAlign } from '@mui/system';
import { Commoncard } from '../../commonComponent/Commoncard';
import BackgroundImage from "../../assets/image/hyperbridge/BackgroundImage.png";
import { Route, Switch, Link, HashRouter as Router } from "react-router-dom";
import HyperBridgelogo from "../../assets/image/Allinone/Productslogo/hyperbridge@3x.png";
import Hyperlendlogo from "../../assets/image/Allinone/products/Hyperlend.svg";
import styled from "styled-components";

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
  margin: 3rem 0;
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

const StyledPaper = styled(Paper)(({ theme }) => ({
    background: "linear-gradient(21.94deg, rgba(255, 255, 255, 0.064) -6.63%, rgba(110, 250, 235, 0.2) 85.24%)",
    ...theme.typography.body2,
    padding: theme.spacing(2),
    width: "400px",
    height: "200px"
}));

const styles = {
    paperContainer: {
        backgroundImage: `url(${WaveBackground})`,
        height: "100vh",
        backgroundRepeat: "no-repeat"

    },
    AuditContainer: {
        backgroundImage: `url(${WaveBackground})`,
        height: "100vh",
        backgroundRepeat: "no-repeat"
    }
};
export default function ColumnsGrid() {
    const classes = useStyles();
    return (
        <Box sx={{ flexGrow: 1, px: "80px" }}>
            <div class="stars">
                <div class="twinkling">
                    <Box sx={{ minHeight: "90vh" }}>
                        <Grid container px="50px" sx={{ paddingLeft: "153px", paddingTop: "60px" }} spacing={4} columns={16}>
                            <Grid item xs={8} spacing={3} sm={12} >
                                <Grid item className={classes.header}>
                                    Cross-Chain Interoperability Made Simple
                                </Grid>
                                <Grid item className={classes.Subheader}>
                                    HyperBridge is a Token Bridge Protocol Across Multiple Blockchains. The Gateway to Cross-Chain Interoperable ecosystem that lets you bridge tokens on multiple chains at your fingertips
                                </Grid>
                                <Grid item>
                                    <Grid container
                                        classes={classes.ButtonWrapper} sx={{
                                            display: "flex",
                                            flexWrap: "nowrap", alignItems: "center"
                                        }}>
                                        <Grid item>
                                            <div className="enter-app-button-container">
                                                <div className="enter-app-button">Enter App</div>
                                                <img src={Uparrow} />
                                            </div>
                                        </Grid>

                                    </Grid>
                                </Grid>

                            </Grid>
                            <Grid item xs={8} sx={{ paddingLeft: "80px" }}>
                                <img src={hyperbridge} className={classes.hyperbridgeLogo} />

                            </Grid>
                        </Grid>
                    </Box>


                    <Box sx={{ backgroundImage: `url(${WaveBackground})`, height: "100vh", backgroundSize: "cover", }} className={classes.WaveWrapper}>
                        <Grid container xs={12} wrap="nowwrap" direction="column" columnSpacing={{ xs: 4, sm: 5, md: 5, xl: 5 }}>
                            <Grid item xs={12} className={classes.Waveheader}>

                                Multiple Blockchains, Multiple Projects,<br></br> Multiple Tokens, One Bridge
                            </Grid>
                            <Grid item >
                                <Grid container xs={12} direction="row" rowSpacing={{ xs: 5, sm: 4, md: 3 }} >
                                    <Grid item xs={6} className={classes.WaveSubheader}>
                                        HyperBridge is designed to bridge the gap <br></br>enabling an omnidirectional way to <br></br>transferring tokenized assets
                                    </Grid>
                                    <Grid item xs={6} className={classes.WaveSubheader}>
                                        From supporting mainstream wallets and login options to having on- <br></br>ramp & off-ramp solution, Hyperbridge is simplifying the use case of<br></br> Blockchain between users and projects
                                    </Grid>



                                </Grid>


                            </Grid>


                        </Grid>



                    </Box>


                    <Box sx={{ flexGrow: 1, px: 3 }}>
                        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>

                            <Grid item sm={4} md={4} xs={{ width: "377px", p: "50px" }}>
                                <Commoncard title="Permissionless Entry" description="Enabling token bridge between major EVM & Non-EVM compatible blockchains without any entry barrier" />


                            </Grid>
                            <Grid item sm={4} md={4} xs={{ width: "377px", p: "50px" }}>
                                <Commoncard title="Interoperable Swap" description="Omni-Directional Bridging across chains will allow a true use case for asset interoperability" />


                            </Grid>
                            <Grid item sm={4} md={4} xs={{ width: "377px", p: "50px" }}>
                                <Commoncard title="Multiple Wallet 
                        & Login Support" description="Multiple wallet integrations like MetaMask, Coinbase, Trustwallet, Unstoppable Domains and more for wider accessibility" />


                            </Grid>
                            <Grid item sm={4} md={4} xs={{ width: "377px", p: "50px" }}>
                                <Commoncard title="Lightning 
                        Fast Transactions" description="HyperBridge works on the Lock and Unlock mechanism to amplify bridging time across chains and completes the transactions in less than 2 minutes" />


                            </Grid>
                            <Grid item sm={4} md={4} xs={{ width: "377px", p: "50px" }}>
                                <Commoncard title="Interactive 
                        Design Aesthetics" description="Elevating the user interface to simplify Bridge understanding and usability for the masses" />


                            </Grid>
                            <Grid item sm={4} md={4} xs={{ width: "377px", p: "50px" }}>
                                <Commoncard title="Secured Ecosystem" description="HyperBridge ensures utmost security by working on multi-layer inclusions to build a sustainable cross-chain application models" />


                            </Grid>

                        </Grid>


                    </Box>
                    <Box sx={{}} className={classes.SecurityWrapper}>
                        <Typography className={classes.SecurityTitle}>Adding Security Structures To Protect Locked Liquidity Across Multiple Assets </Typography>

                        <Typography className={classes.SecurityDescripation}>
                            Pushing the boundaries of the security layer build upon HyperBridge to make it trustworthy and safe
                        </Typography>



                    </Box>
                    <Container>
                        <Box sx={{
                            p: "50px",



                            left: "114px",
                            top: "2858px",

                            background: "rgba(255, 255, 255, 0.08)",
                            backdropFilter: "blur(54px)",
                            /* Note: backdrop-filter has minimal browser support */

                            borderRadius: "20px",
                            paddingBottom: "37px"
                        }} >
                            <Grid container xs={{ p: "86px" }} rowSpacing={1} columnSpacing={{ xs: 1, sm: 4, md: 3 }} sm={{ fontSize: "0.8rem" }}>
                                <Grid item xs={6} p="20px" >
                                    <Grid container direction="row" >
                                        <Grid item>

                                        </Grid>
                                        <Grid item container direction="column">
                                            <Grid className={classes.TitleItem} sm={{ fontSize: "0.8rem" }}>
                                                Bridge security
                                            </Grid>
                                            <Grid classesName={classes.TitleItem} sx={{
                                                fontFamily: "PlusjakartaSans",
                                                fontStyle: "normal",
                                                fontWeight: "700",
                                                fontSize: "1rem",
                                                color: "#D0D4DE"
                                            }} sm={{ fontSize: "0.5rem" }}>
                                                Bridge contract audited by renowned security firms like Halborn, Quill hash, Blocksec
                                            </Grid>


                                        </Grid>


                                    </Grid>
                                </Grid>
                                <Grid item xs={6} p="20px">
                                    <Grid container direction="row">
                                        <Grid item>

                                        </Grid>
                                        <Grid item container direction="column">
                                            <Grid className={classes.TitleItem} sm={{ fontSize: "0.8rem" }}>
                                                Bridge security
                                            </Grid>
                                            <Grid classesName={classes.TitleItem} sx={{
                                                fontFamily: "PlusjakartaSans",
                                                fontStyle: "normal",
                                                fontWeight: "700",
                                                fontSize: "1rem",
                                                color: "#D0D4DE"
                                            }} sm={{ fontSize: "0.5rem" }}>
                                                Bridge contract audited by renowned security firms like Halborn, Quill hash, Blocksec
                                            </Grid>


                                        </Grid>


                                    </Grid>
                                </Grid>
                                <Grid item xs={6} p="20px">
                                    <Grid container direction="row">
                                        <Grid item>

                                        </Grid>
                                        <Grid item container direction="column">
                                            <Grid className={classes.TitleItem}>
                                                Bridge security
                                            </Grid>
                                            <Grid classesName={classes.TitleItem} sx={{
                                                fontFamily: "PlusjakartaSans",
                                                fontStyle: "normal",
                                                fontWeight: "700",
                                                fontSize: "1rem",
                                                color: "#D0D4DE"
                                            }}>
                                                Bridge contract audited by renowned security firms like Halborn, Quill hash, Blocksec
                                            </Grid>


                                        </Grid>


                                    </Grid>
                                </Grid>
                                <Grid item xs={6} p="20px">
                                    <Grid container direction="row">
                                        <Grid item>

                                        </Grid>
                                        <Grid item container direction="column">
                                            <Grid className={classes.TitleItem}>
                                                Bridge security
                                            </Grid>
                                            <Grid classesName={classes.TitleItem} sx={{
                                                fontFamily: "PlusjakartaSans",
                                                fontStyle: "normal",
                                                fontWeight: "700",
                                                fontSize: "1rem",
                                                color: "#D0D4DE"
                                            }}>
                                                Bridge contract audited by renowned security firms like Halborn, Quill hash, Blocksec
                                            </Grid>


                                        </Grid>


                                    </Grid>
                                </Grid>
                                <Grid item xs={6} p="20px">
                                    <Grid container direction="row">
                                        <Grid item>

                                        </Grid>
                                        <Grid item container direction="column">
                                            <Grid className={classes.TitleItem}>
                                                Bridge security
                                            </Grid>
                                            <Grid classesName={classes.TitleItem} sx={{
                                                fontFamily: "PlusjakartaSans",
                                                fontStyle: "normal",
                                                fontWeight: "700",
                                                fontSize: "1rem",
                                                color: "#D0D4DE"
                                            }}>
                                                Bridge contract audited by renowned security firms like Halborn, Quill hash, Blocksec
                                            </Grid>


                                        </Grid>


                                    </Grid>
                                </Grid>
                                <Grid item xs={6} p="20px">
                                    <Grid container direction="row">
                                        <Grid item>

                                        </Grid>
                                        <Grid item container direction="column">
                                            <Grid className={classes.TitleItem}>
                                                Bridge security
                                            </Grid>
                                            <Grid classesName={classes.TitleItem} sx={{
                                                fontFamily: "PlusjakartaSans",
                                                fontStyle: "normal",
                                                fontWeight: "700",
                                                fontSize: "1rem",
                                                color: "#D0D4DE"
                                            }}>
                                                Bridge contract audited by renowned security firms like Halborn, Quill hash, Blocksec
                                            </Grid>


                                        </Grid>


                                    </Grid>
                                </Grid>
                            </Grid>


                        </Box>
                    </Container>
                    <ProductsSection >
                        <div className="productionWrapper">
                            <div className="productLeft">
                                <div className="Headine1">
                                    Audit Partners &  <br></br>Report Assessment

                                </div>

                            </div>
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

                                </ProductbarWrapper>


                            </div>
                        </div>
                    </ProductsSection>
                    <Box sx={{}} className={classes.LowerContainerWrapper}>
                        <Typography className={classes.LowerContainer}>
                            HyperBridge is facilitating the rise of the biggest use-case for DeFi bringing together the entire network of Blockchains, Projects, Users, Investors to take advantage of the ever-growing utility of tokenized assets in the Cross Chain world
                        </Typography>


                    </Box>
                </div>
            </div>
        </Box >
    );
}
