import React from 'react'
import Box from '@mui/material/Box';
import { useStyles } from './Finalstyle';
import Grid from '@mui/material/Grid';
import CustomButton from '../../commonComponent/Button';
import Uparrow from "../../assets/image/Uparrow.svg";
import hyperbridge from "../../assets/image/hyperbridge/hyperbridge.svg";
import IntegrateEVM from "../../assets/image/hyperbridge/IntegrateEVM.svg";
import { Typography } from '@material-ui/core';

const HyperbridgeFinal = () => {


    const classes = useStyles();
    const cardList = [
        { title: "Permissionless Entry", description: "Enabling token bridge between major EVM & Non-EVM compatible blockchains without any entry barrier" },
        { title: "Interoperable Swap", description: "Omni-Directional Bridging across chains will allow a true use case for asset interoperability" },
        { title: "Multiple Wallet & Login Support", description: "Multiple wallet integrations like MetaMask, Coinbase, Trustwallet, Unstoppable Domains and more for wider accessibility" },
        {
            title: "Lightning Fast Transactions", description: "HyperBridge works on the Lock and Unlock mechanism to amplify bridging time across chains and completes the transactions in less than 2 minutes",
        },
        { title: "Interactive  Design Aesthetics", description: "Elevating the user interface to simplify Bridge understanding and usability for the masses" },
        { title: "Secured Ecosystem", description: "HyperBridge ensures utmost security by working on multi-layer inclusions to build a sustainable cross-chain application model" },
    ];

    return (

        <Box className={classes.wrapper}>
            <Grid container px="50px" sx={{ paddingLeft: "153px", paddingTop: "60px" }} spacing={4} columns={16}>
                <Grid item xs={8}  >
                    <Grid item >
                        <Typography variant="h1" className={classes.header}> Cross-Chain <br></br>Interoperability Made <br></br> Simple    </Typography>
                    </Grid>
                    <Grid item className={classes.Subheader} >
                        <Typography>  HyperBridge is a Token Bridge Protocol Across Multiple Blockchains. The <br></br> Gateway to Cross-Chain Interoperable ecosystem that lets you bridge <br></br> tokens on multiple chains at your fingertips</Typography>
                    </Grid>
                    <Grid item>
                        <Grid container
                            sx={{
                                display: "flex",
                                flexWrap: "nowrap", alignItems: "center"
                            }}>
                            <Grid item>
                                <CustomButton btnName={"Enter App"} icon={Uparrow} width="247px" />
                            </Grid>

                        </Grid>
                    </Grid>

                </Grid>
                <Grid item xs={8} sx={{ paddingLeft: "80px" }}>
                    <img src={hyperbridge} />

                </Grid>
            </Grid >

            <Box className={classes.SecondRow} sx={{ height: "10vh", BackgroundImage: `url(${IntegrateEVM}) !important`, backgroundSize: "cover" }}>

                <Grid container className={classes.SecondRowwrapper} xs={12} >

                    <Grid item xs={6} direction="column">
                        <Typography className={classes.Dollarsign}> $ 23,982,928</Typography>
                        <Typography className={classes.dollorLower}> Total Value Locked</Typography>

                    </Grid>
                    <Grid item xs={6}>
                        <Grid container direction="row">
                            <Grid item>
                                <Typography className={classes}>
                                    05
                                </Typography>
                            </Grid>

                            <Grid item direction="column">

                                <Typography> Integrated EVM chains</Typography>
                                <Typography> Solana support coming soon..</Typography>
                            </Grid>


                        </Grid>


                    </Grid>


                </Grid>

            </Box>
            <Box sx={{ backgroundImage: `url(${WaveBackground})`, height: "100vh", backgroundSize: "cover", }} className={classes.WaveWrapper}>
                <Grid container xs={12} direction="column" columnSpacing={{ xs: 4, sm: 5, md: 5, xl: 5 }}>
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

            <Box>
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
                            <Grid item xs={3.5} className={classes.CardView}>
                                <Typography className={classes.Cardtitle}> {data.title}</Typography>
                                <Typography className={classes.CardDescripation}>
                                    {data.description}
                                </Typography>

                            </Grid>
                        );
                    })}
                </Grid>

            </Box>






        </Box >
    )
}

export default HyperbridgeFinal