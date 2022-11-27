import React from "react";
import styled from "styled-components";
import Box from '@mui/material/Box';
import { Hyperswapstyle } from './style'
import CustomButton from "../../commonComponent/Button";
import Grid from '@mui/material/Grid';
import Uparrow from "../../assets/image/Uparrow.svg";
import { useStyles } from './finalstyle';
import { Typography } from '@material-ui/core';
import Topcontainer from "../../assets/image/HyperSwap/Herosection.svg"
import Layers from "../../assets/image/HyperSwap/Layers.svg"
import IntegrateEVM from "../../assets/image/hyperbridge/IntegrateEVM.svg";
const MainContainer = styled('div')(() => ({
  height: '100vh',
  width: '100vw',
  overflow: 'hidden'
}));
const Subcontainer = styled('div')(() => ({
  height: '100vh',
  width: '100vw',
  overflow: 'hidden',

}));

function Hyperswapnew() {
  const classes = useStyles();

  return (

    <Box>
      <Box sx={{ backgroundImage: `url(${Topcontainer})`, height: "90vh", backgroundRepeat: "no-repeat", backgroundSize: "cover" }} >
        <Grid container px="50px" sx={{ paddingLeft: "200px", paddingTop: "60px" }} spacing={4} columns={16} className={classes.Toprow}>
          <Grid item xs={8} >
            <Grid item >
              <Typography variant="h1" className={classes.header}> Injecting the power of Cross-Chain interoperability in asset swaps    </Typography>
            </Grid>
            <Grid item className={classes.Subheader}>
              <Typography>  An automate market maker powered Decentralised Exchange facilitating not just assets swaps but chain swaps as well.</Typography>
            </Grid>
            <Grid item>
              <Grid container
                sx={{
                  display: "flex",
                  flexWrap: "nowrap", alignItems: "center"
                }}>
                <Grid item>
                  <CustomButton btnName={"Hyperswap"} icon={Uparrow} width="247px" />
                </Grid>

              </Grid>
            </Grid>

          </Grid>
          <Grid item xs={8}>
          
          
          </Grid>

        </Grid>



      </Box>
      <Box className={classes.SecondRow} sx={{ height: "10vh", BackgroundImage: `url(${IntegrateEVM}) !important`, backgroundSize: "cover" }}>
        <Grid conatiner className={classes.SecondRowWrapper} xs={12}>
          <Typography className={classes.Headline}>
            <span className={classes.Headline.Headlinecolor}>HyperSwap </span>is the most simple solution to trade, swap & manage digital asset portfolio across mainstream EVM compatible chains

          </Typography>



        </Grid>


      </Box>
      <Grid container xs={10} className={classes.FiveRowwrapper}>
        <Typography className={classes.FiverowContent}>
          HyperSwap is an application layer protocol<br></br> embedded on top of an Automated Market <br></br>Maker algorithm to sustain:

        </Typography>



      </Grid>
      <Grid
        item
        xs={9}
        container
        spacing={2}
        justifyContent="center"
        direction={"row"}
      >
        <Grid item xs={6} className={classes.Mainwrapper}>
          <img className="animationImgs" src={Layers} />
        </Grid>
        <Grid item xs={6} className={classes.Maincontent}>
          <div className="evm-text">
            {" "}
            Add token utility through <br /> 5+ DeFi solutions
          </div>
        </Grid>
      </Grid>

    </Box>

  );
}

export default Hyperswapnew;
