import React, { useEffect, useState } from "react";
import Navbackgroundimgae from "../../assets/image/banner/Navback.svg";
import spheriumlogo from "../../assets/image/banner/spheriumlogo.svg";
import Animationlogo2img from "../../assets/image/banner/Animationlogo2.svg";
import { Button, Popover } from "antd";
import "./Header.css";
import { Route, Switch, Link, HashRouter as Router } from "react-router-dom";
import subMenuList from '../../menuList/Menulist';

const Header = () => {
    const [showContent, setShowContent] = useState(true);
    useEffect(() => {
        document.body.style.backgroundColor = "#00121d";
    }, []);

    const getContent = (data) => {
        return (
            <div className="pop_over">
                {data &&
                    data.map((val) => {
                        return (
                            <Link to={val.path} className="showLink">
                                {val.name}
                            </Link>
                        );
                    })}
            </div>
        );
    };

    return (
        <div style={{ width: "100%" }}>
            <div className="headerBackground">
                <div className="showLogo">
                    <img src={spheriumlogo} />
                </div>
                <div className="navList">
                    {subMenuList.map((data) => {
                        return (
                            <>
                                <Popover
                                    content={() => getContent(data.subMenu)}
                                    trigger="hover"
                                >
                                    <Button className="menuSublist">{data.name}</Button>
                                </Popover>
                            </>
                        );
                    })}
                </div>
                <div className="enterBtn">
                    <button className="btnShow">Enter App</button>
                </div>
            </div>
        </div>
    );
};
export default Header;
