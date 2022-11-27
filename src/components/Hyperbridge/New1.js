import * as React from 'react';
import { styled } from '@mui/material/styles';

import './New1.scss'

export default function ColumnsGrid() {
    return (

        <>
            <div class="stars">
                <div class="twinkling">

                    <Box sx={{ flexGrow: 1, px: "80px" }}>
                        <div class="stars">
                            <div class="twinkling">
                                <Box sx={{ minHeight: "90vh" }}>
                                    <Grid container px="50px" sx={{ paddingLeft: "153px", paddingTop: "60px" }} spacing={4} columns={16}>
                                        <Grid item xs={8} spacing={3} >
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
                                <Box sx={{
                                    minHeight: "10vh", BackgroundImage: `url(${IntegrateEVM})`
                                }} >
                                    <Grid container py="51px" px="200px" spacing={4} justifyContent='center' sx={{}}>
                                        <Grid item className={classes.dollarHead} sx={{

                                        }}>
                                            $23,982,928
                                        </Grid>

                                        <Grid item sx={{ paddingLeft: "7rem" }}>
                                            <Grid container direction="row" spacing={0.5} >
                                                <Grid item className={classes.numberChain} sx={{
                                                    color: "gray",
                                                    fontSize: "2rem"
                                                }} >
                                                    05

                                                </Grid>
                                                <Grid item>
                                                    <Grid container direction="column" spacing={0.4}>
                                                        <Grid item sx={{ fontSize: "1rem", color: "gray" }}>
                                                            Integrated EVM Chains
                                                        </Grid>
                                                        <Grid item sx={{ fontSize: "0.8rem", color: "gray" }}>
                                                            Solana support coming soon...
                                                        </Grid>

                                                    </Grid>

                                                </Grid>


                                            </Grid>

                                        </Grid>


                                    </Grid>
                                </Box>

                                <Box sx={{ backgroundImage: `url(${WaveBackground})`, height: "100vh", backgroundSize: "cover" }}>




                                </Box>

                                <Box sx={{ textAlign: "center", display: "flex", flexWrap: 'wrap' }} px="291px" py="60px" spacing={4}>

                                    <Typography className={classes.RefineTitle} sx={{
                                        fontStyle: "normal",
                                        fontWeight: "700",
                                        fontSize: "36px",

                                        /* or 133% */

                                        textAlign: "center",

                                        /* Main white */

                                        color: "#D0D4DE"
                                    }}>
                                        Redefining Cross-Chain Functionality Through Industry First Attribute

                                    </Typography>

                                    <Typography className={classes.RedefineContent}>
                                        Experience DeFi through the technology-driven bridge with novel functionalities
                                    </Typography>


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
                                <Box>
                                    <Paper>

                                    </Paper>


                                </Box>
                                <Box sx={{}} className={classes.LowerContainerWrapper}>
                                    <Typography className={classes.LowerContainer}>
                                        HyperBridge is facilitating the rise of the biggest use-case for DeFi bringing together the entire network of Blockchains, Projects, Users, Investors to take advantage of the ever-growing utility of tokenized assets in the Cross Chain world
                                    </Typography>


                                </Box>
                            </div>
                        </div>
                    </Box >



                </div>

            </div>



        </>



    )

}