import React from "react";
import Roadmap from "../../assets/image/Roadmap.svg";
import Ellipse from "../../assets/image/Ellipse.svg";
import RoadImage from "../../assets/image/test.png";
import MiddleRoadmap from "../../assets/image/banner/MiddleRoadmap.svg";
import { Grid } from "@mui/material";
import { motion } from "framer-motion"
import "./RoadMap.css";

const RoadMap = () => {
    return (
        <Grid item xs={9} md={9} sm={9} className="roadContainer">
            {/* <div > */}
            <div className="leftSide">
                <div  className="boxView showrighttop">
                    <div>
                        <img className="ellipseImg" src={Ellipse} />
                        <div>Q2 - 2022</div>
                    </div>
                    <div>Complete Development</div>
                    <div>User Interface</div>
                    <div>Alpha platform release</div>
                    <div>Audit</div>
                    <div>Token Presale</div>
                </div>
                <div className="boxView showRightTab">
                    <div>
                        <img className="ellipseImg" src={Ellipse} />
                        <div>Q2 - 2022</div>
                    </div>
                    <div>Complete Development</div>
                    <div>User Interface</div>
                    <div>Alpha platform release</div>
                    <div>Audit</div>
                    <div>Token Presale</div>
                </div>
            </div>
            <div className="imageGrid">
                <div className="containers">
                    <img src={Roadmap} className="image1" />
                    <img className="image2" src={MiddleRoadmap} />
                    {/* <img src={RoadImage} /> */}
                </div>
            </div>
            <div className="rightSide">
                <div className="boxView showPosition">
                    <div>
                        <img className="ellipseImg" src={Ellipse} />
                        <div>Q2 - 2022</div>
                    </div>
                    <div>Complete Development</div>
                    <div>User Interface</div>
                    <div>Alpha platform release</div>
                    <div>Audit</div>
                    <div>Token Presale</div>
                </div>
                <div className="boxView showTabposition">
                    <div>
                        <img className="ellipseImg" src={Ellipse} />
                        <div>Q2 - 2022</div>
                    </div>
                    <div>Complete Development</div>
                    <div>User Interface</div>
                    <div>Alpha platform release</div>
                    <div>Audit</div>
                    <div>Token Presale</div>
                </div>
            </div>
            {/* </div> */}
        </Grid>
    );
};

export default RoadMap;
