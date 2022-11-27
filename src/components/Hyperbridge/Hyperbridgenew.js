import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import MuiAppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import hyperbridge from "../../assets/image/hyperbridge/hyperbridge.svg";
import IntegrateEVM from "../../assets/image/hyperbridge/IntegrateEVM.svg";
import BackgroundImage from "../../assets/image/banner/backgroundImage.svg";
import Uparrow from "../../assets/image/Uparrow.svg";
import { makeStyles } from "@material-ui/core/styles";
import Hyperbridge from './Hyperbridge';
import Grid from '@mui/material/Grid';
import './hyperbridge.css';

const styles = {
    background: {
        background: '#02040F',
        height: '100vh',
        width: '100vw'

    },
    paperContainer: {
        BackgroundImage: `url(${BackgroundImage})`,
        height: '100vh',
        width: '100vw'
    },
    EvmConatiner: {
        BackgroundImage: `url(${IntegrateEVM})`,

        width: '100vw'

    },
    MarginHeader:{
        PaddingLeft:"60px"
    }

};

export default function Hyperbridgenew() {
    return (

        <>
            <Grid container justifyContent="center" xs={12} lg={12} md={12} alignItems="center" direction="column">
                <Grid container>
                    <Grid item lg={12}>
                        <Grid container direction="column" >
                            <Grid item className="header">
                                Cross-Chain Interoperability Made Simple
                            </Grid>
                            <Grid item className="sub-header">
                                HyperBridge is a Token Bridge Protocol Across Multiple Blockchains. The Gateway to Cross-Chain Interoperable ecosystem that lets you bridge tokens on multiple chains at your fingertips
                            </Grid>
                            <Grid item>
                                <Grid container
                                    alignItems="center"
                                    justifyContent="center" sx={{ border: "1px solid white" }}>
                                    <Grid item>
                                        <div className="enter-app-button-container">
                                            <div className="enter-app-button">Enter App</div>
                                            <img src={Uparrow} />
                                        </div>
                                    </Grid>
                                    <Grid item className="solana">
                                        Solana support coming soon....
                                    </Grid>
                                </Grid>
                            </Grid>

                        </Grid>

                    </Grid>

                    <Grid item xs={6} >
                        <img src={hyperbridge} className="hyperbridge-image"></img>



                    </Grid>
                </Grid>

            </Grid>
            <h1>digvijay </h1>



        </>





    )
}