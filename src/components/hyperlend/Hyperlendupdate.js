import React from 'react'
import Grid from '@mui/material/Grid';
import styled from "styled-components";
import Box from '@mui/material/Box';
import { useStyles } from './Finalstyle';
import { Typography } from '@material-ui/core';
import Topcontainer from "../../assets/image/HyperSwap/HeroSection.png";
import CustomButton from "../../commonComponent/Button";
import Uparrow from "../../assets/image/Uparrow.svg";
import IntegrateEVM from "../../assets/image/backgroundimage/Maskgroup.png";
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
        title: "Different deposit  methods",
        description:
            "Such as ERC20 transfer and streaming.",
    },

];
const Hyperlendupdate = () => {
    const classes = useStyles();
    return (
        <Box>

            <Box sx={{ backgroundImage: `url(${Topcontainer})`, height: "90vh", backgroundRepeat: "no-repeat", backgroundSize: "cover" }} >
                <Grid container px="50px" sx={{}} spacing={4} xs={12} className={classes.Toprow}>
                    <Grid item xs={12} md={6} sm={12} lg={5}>
                        <Grid item >
                            <Typography className={classes.header}> Cross-chain agnostic
                                Lend / Borrow / Earn
                                Changing at one second    </Typography>
                        </Grid>
                        <Grid item className={classes.Subheaderwrapper} >
                            <Typography className={classes.Subheader}> A non-custodial multichain lending protocol built for individuals and institutions to make most of their digital assets </Typography>
                        </Grid>
                        <Grid item>
                            <Grid container
                                sx={{
                                    display: "flex",
                                    flexWrap: "nowrap", alignItems: "center"
                                }}>
                                <Grid item>
                                    <CustomButton btnName={"Hyperlend"} icon={Uparrow} width="247px" />
                                </Grid>

                            </Grid>
                        </Grid>

                    </Grid>

                </Grid>



            </Box>
            <Box sx={{
                backgroundImage: `url(${IntegrateEVM})`, width: "100vw", height: "40vh", backgroundRepeat: "no-repeat", backgroundSize: "cover", marginBottom: "40px"
            }}>
                <Grid container xs={10} direction="column">
                    <Typography>
                        Decentralised multichain money market to lend and borrow digital assets at interest rates determined by supply and demand.
                    </Typography>

                    <Typography>
                        Features:
                    </Typography>


                </Grid>
            </Box>

          <Grid container>

          
          
          </Grid>



        </Box>
    )
}
export default Hyperlendupdate;