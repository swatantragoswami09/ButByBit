import react from "react";
import Grid from "@mui/material/Grid";
import Laptop from "../../assets/image/aboutUs/laptop.svg";
import Mobile1 from "../../assets/image/aboutUs/mob1.svg";
import Profile1 from "../../assets/image/profiles/profile1.svg";
import Profile2 from "../../assets/image/profiles/profile2.svg";
import LinkedIn from "../../assets/image/aboutUs/lin.svg";

import "./about.scss";
import CustomButton from "../../commonComponent/Button";
// import "./hyperLaunchNew.scss";

const AboutUs = () => {
    const profileList = [
        {
            designation: "CEO. Co-Founder",
            name: "Aanchal Thakur",
            profile: Profile1,
        },
        { designation: "COO, Co.Founder", name: "Sash Jeetun", profile: Profile2 },
    ];
    return (
        <div className="about-whole-container container">
            <Grid
                item
                xs={12}
                container
                spacing={2}
                justifyContent="center"
                direction={"row"}
                className="header-Container"
            >
                <Grid
                    item
                    xs={12}
                    md={8}
                    sm={10}
                    lg={8}
                    className="about-header font-color"
                >
                    About Us
                </Grid>
                <Grid item xs={12} md={8} sm={10} lg={8} className="about-description">
                    <div className="ab-in-content">
                        An all-in-one DeFi protocol that empowers the cross-chain community
                        with a suite of DeFi applications fully compatible with major EVM{" "}
                        <br />
                        chains, including a Bridge, Universal Wallet, Token Swap platform,
                        Money Markets, Staking services, Lending/Borrowing protocol, and{" "}
                        <br />
                        inter-blockchain liquidity transfer.
                    </div>
                </Grid>
            </Grid>
            <Grid
                item
                xs={12}
                container
                spacing={2}
                justifyContent="center"
                direction={"row"}
                className="info-about-Container"
            >
                <Grid
                    item
                    xs={10}
                    md={8}
                    sm={10}
                    lg={8}
                    container
                    spacing={2}
                    justifyContent="center"
                    alignItems={"center"}
                    direction={"row"}
                    className="abt-mis-Container"
                >
                    <Grid
                        item
                        xs={12}
                        md={6}
                        sm={6}
                        lg={6}
                        className="lan-evm-image"
                        container
                        alignItems={"flex-start"}
                    >
                        <img className="animationI" src={Mobile1} />
                    </Grid>
                    <Grid item xs={12} md={6} sm={6} lg={6} className="abt-mis-content">
                        <div className="mis-tite">Mission</div>
                        <div className="mission-text">
                            Connect the world through our transparent, decentralised,
                            non-custodial, and user-friendly one-stop DeFi financial system.
                            Users can access the DeFi ecosystem, such as decentralised
                            exchanges, lending protocols, staking, mobile wallet and
                            cross-chain transfer on over 16+ networks such as Ethereum,
                            Binance Smart Chain, Avalanche, and more.
                        </div>
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
                className="info-about-Container"
            >
                <Grid
                    item
                    xs={10}
                    md={8}
                    sm={10}
                    lg={8}
                    container
                    spacing={2}
                    justifyContent="center"
                    alignItems={"center"}
                    direction={"row"}
                    className="abt-mis-Container wrap-reverse"
                >
                    <Grid
                        item
                        xs={12}
                        md={6}
                        sm={6}
                        lg={6}
                        className="l"
                        container
                        alignItems={"flex-start"}
                    >
                        <div className="mis-tite">Vision</div>
                        <div className="mission-text">
                            Spherium envisions becoming a robust banking and investment
                            solution for the 1.7 billion unbanked population globally by
                            playing a vital part in changing Tradfi and redistributing the
                            profits and power balance of the shared financial system to the
                            users. We aim to create an ecosystem where every individual,
                            irrespective of their geographical location, faith, and social
                            standing, becomes its own “Wealth Manager” that ensures maximum
                            returns on their investments with relatively low risk.
                        </div>
                    </Grid>
                    <Grid item xs={12} md={6} sm={6} lg={6} className="abt-mis-content">
                        <img className="animationI" src={Laptop} />
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
                className="info-evm-Container"
            >
                <Grid
                    item
                    xs={10}
                    md={8}
                    sm={10}
                    lg={10}
                    container
                    spacing={2}
                    justifyContent="center"
                    direction={"row"}
                    className="abt-mis-Container abt-last"
                >
                    <Grid
                        item
                        xs={12}
                        md={6}
                        sm={12}
                        lg={6}
                        className="lan-evm-image"
                        container
                        spacing={2}
                        flexDirection="row"
                        justifyContent={"center"}
                    >
                        {profileList.map((data) => {
                            return (
                                <Grid item xs={12} md={2.5} sm={4.5} lg={4.5} className="profile-container">
                                    <img src={data.profile} className="profile-img" />
                                    <div className="profile-name">{data.name}</div>
                                    <div className="profile-desg">{data.designation}</div>
                                    <img src={LinkedIn} className="link-img" />
                                </Grid>
                            );
                        })}
                    </Grid>
                    <Grid item xs={12} md={6} sm={12} lg={5} className="abt-mis-content">
                        <div className="mis-tite">Team</div>
                        <div className="mission-text">
                            Spherium is a team of global DeFi experts with diverse areas of
                            expertise, including fintech, law, innovative contract
                            development, business development, AML/KYC, and blockchain
                            research, is focusing on developing services that will unleash the
                            potential DeFi revolution.
                            <br />
                            <br /> We believe in Building together each day, every day.
                        </div>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
};

export default AboutUs;
