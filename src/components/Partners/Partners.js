import react from "react";
import Grid from "@mui/material/Grid";
import Rect from "../../assets/image/profiles/rect.svg";
import Popular1 from "../../assets/image/Blog/popular1.svg";
import Popular2 from "../../assets/image/Blog/popular2.svg";
import Popular3 from "../../assets/image/Blog/popular3.svg";
import Popular4 from "../../assets/image/Blog/popular4.svg";
import Popular5 from "../../assets/image/Blog/popular5.svg";
import Popular6 from "../../assets/image/Blog/popular6.svg";
import { Link } from "react-router-dom";
import { ArrowRightOutlined } from "@ant-design/icons";
// import "./blog.scss";

const PartnerShip = () => {
  const profileList = [
    {
      date: "July 5, 2022",
      header:
        "Spherium Joining Hands with Unmarshal To Integrate Data Driven Dashboards Into HyperSwap",
      profile: Popular1,
      sub: "Blockchain data is publicly accessible and has a right to be viewed by everyone, but extracting useful information from it remains a challenge. ",
    },
    {
      date: "July 5, 2022",
      header:
        "Spherium Joining Hands with Unmarshal To Integrate Data Driven Dashboards Into HyperSwap",
      profile: Popular1,
      sub: "Blockchain data is publicly accessible and has a right to be viewed by everyone, but extracting useful information from it remains a challenge. ",
    },
    {
      date: "July 5, 2022",
      header:
        "Spherium Joining Hands with Unmarshal To Integrate Data Driven Dashboards Into HyperSwap",
      profile: Popular1,
      sub: "Blockchain data is publicly accessible and has a right to be viewed by everyone, but extracting useful information from it remains a challenge. ",
    },
    {
      date: "July 5, 2022",
      header:
        "Spherium Joining Hands with Unmarshal To Integrate Data Driven Dashboards Into HyperSwap",
      profile: Popular1,
      sub: "Blockchain data is publicly accessible and has a right to be viewed by everyone, but extracting useful information from it remains a challenge. ",
    },
    {
      date: "July 5, 2022",
      header:
        "Spherium Joining Hands with Unmarshal To Integrate Data Driven Dashboards Into HyperSwap",
      profile: Popular1,
      sub: "Blockchain data is publicly accessible and has a right to be viewed by everyone, but extracting useful information from it remains a challenge. ",
    },
    {
      date: "July 5, 2022",
      header:
        "Spherium Joining Hands with Unmarshal To Integrate Data Driven Dashboards Into HyperSwap",
      profile: Popular1,
      sub: "Blockchain data is publicly accessible and has a right to be viewed by everyone, but extracting useful information from it remains a challenge. ",
    },
    {
      date: "July 5, 2022",
      header:
        "Spherium Joining Hands with Unmarshal To Integrate Data Driven Dashboards Into HyperSwap",
      profile: Popular1,
      sub: "Blockchain data is publicly accessible and has a right to be viewed by everyone, but extracting useful information from it remains a challenge. ",
    },
  ];
  const openList = [
    { name: "All" },
    { name: "Partnerships" },
    { name: "Announcements" },
    { name: "How To" },
    { name: "Market Insights & Trends" },
  ];
  return (
    <div className="career-whole-container container">
      <Grid
        item
        xs={12}
        container
        spacing={2}
        justifyContent="center"
        direction={"row"}
        className="career-Container"
      >
        <Grid item xs={10} sm={12} md={12} className="career-header">
          Mainstreaming DeFi with
          one cohort at a time

        </Grid>
        <Grid item xs={7} className="career-description">
          <div className="career-in-content">
            Interested to join the revolution? Signup here

          </div>
        </Grid>
      </Grid>
      <div className="add-blur"></div>
      <Grid
        item
        xs={12}
        container
        spacing={2}
        justifyContent="center"
        direction={"row"}
      // className="career-align"
      >
        <Grid
          item
          xs={10}
          container
          spacing={2}
          justifyContent="flex-start"
          direction={"row"}
        // className="career-align"
        >
          <Grid item xs={9} sm={12} md={12} className="popular-heading">
            All partners
          </Grid>
          <Grid item xs={12} sm={12} md={9} lg={6} className="blog-topics">
            {openList.map((data, index) => {
              return (
                <Link className={index === 0 ? "link-select" : "link-list"}>
                  {data.name}
                </Link>
              );
            })}
          </Grid>
          <Grid
            item
            xs={12}
            className="blog-profiles"
            container
            spacing={2}
            flexDirection="row"
            justifyContent={"flex-start"}
          >
            {Array.from(Array(16)).map((data) => {
              return (
                <Grid item xs={12} sm={6} md={6} lg={2.7} className="blog-box">
                  <img src={Popular1} className="blogs-img" />
                </Grid>
              );
            })}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default PartnerShip;
