import React from 'react'
import './Hyperswapnewpage.scss'
import Grid from '@mui/material/Grid';
import Uparrow from "../../assets/image/Uparrow.svg";
import CustomButton from '../../commonComponent/Button';
const Hyperswapnewpage = () => {
    return (
        <div className='SwapContainer'>

            <div className='TopBackground'>
                <Grid container item xs={10} justifyContent={"center"} alignItems={"center"}>
                    <Grid item xs={11} sm={7} md={7}>
                        <div className="topTitle">
                            Diversifying <br />
                            the DeFi Ecosystem
                        </div>
                        <div className="statement">
                            By introducing of cross-chain interoperability in everything Hyper
                            for Defi 2.0 Defragmented
                        </div>
                        <CustomButton btnName="Cross chain world" icon={Uparrow} />

                    </Grid>
                </Grid>
            </div>



        </div>
    )
}


export default Hyperswapnewpage