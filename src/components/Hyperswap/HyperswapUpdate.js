import React, { useEffect } from 'react';
import './style.js';
import { useStyles } from './style';
import styled from "styled-components";
import Grid from "@mui/material/Grid";
import CustomButton from "../../commonComponent/Button";
import Rectangle from "../../assets/image/HyperSwap/Headerbackground.svg"
import Uparrow from "../../assets/image/Uparrow.svg";
import Box from '@mui/material/Box';
import { Container } from '@mui/material';
import { Typography } from 'antd';
import "./Hyperswapupdate.scss"
import IntegrateEVM from "../../assets/image/hyperbridge/IntegrateEVM.svg";
import MobileAndWave from "../../assets/image/HyperSwap/Rectangle&Mobile.svg"
const HeaderBackground = styled.img`

background-image: url(${Rectangle});
width: 100vw;
height: 100vh;
background-repeat: no-repeat;
`
const styles = {
    paperContainer: {
        backgroundImage: `url(${Image})`,

    }
};

const HyperSwapUpdate = () => {
    const classes = useStyles();
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <Grid style={{ height: "100vh" }}>
            <div style={{
                backgroundImage: `url(${Rectangle})`, height: "90vh", backgroundRepeat: "no-repeat", backgroundSize: "cover"
            }}>

                <Grid container className="headerWrapper">
                    <Grid xs={6} item container direction="column">
                        <Grid className="Headertitle" xs={{ marginBottom: "20px" }}>
                            Injecting the power of <br>
                            </br>Cross-Chain interoperability <br>
                            </br> in asset swaps
                        </Grid>
                        <Grid className="Descripation">
                            An automate market maker powered Decentralised Exchange facilitating not just assets swaps but chain swaps as well.
                        </Grid>
                        <Grid>
                            <CustomButton btnName={"Hyperswap"} width={12} icon={Uparrow} />
                        </Grid>



                    </Grid>


                </Grid>
                <div className="Row2Wrapper" style={{ backgroundImage: `url({IntegrateEVM})`, height: "40vh", backgroundRepeat: "no-repeat", backgroundSize: "cover", }}>
                    <div container xs={8} className="Row2Content">
                        <span>HyperSwap</span>  is the most simple solution to<br></br> trade, swap & manage digital asset portfolio <br></br> across mainstream EVM compatible chains
                    </div>

                </div>
            </div>

            <div className="MobileWavebackground"  >
                <div style={{ backgroundImage: `url(${MobileAndWave})`, height: "50vh", backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>


                </div>


            </div>
        </Grid>
    )

}

export default HyperSwapUpdate;