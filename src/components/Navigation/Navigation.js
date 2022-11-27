import React from 'react';
import './navigation.scss';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <section className="navigation-wrapper">
            <nav className="navbar navbar-expand-lg navbar-light custom-navigation">
            <div className="container" style={{padding: '0px 0px'}}>
        
            
            <Link className="navbar-brand" to="/">
                {/* <img src={`${process.env.PUBLIC_URL}/images/logo-white.svg`} alt="" className="img-fluid nonscroll-logo"/>
                <img src={`${process.env.PUBLIC_URL}/images/logo-black.svg`} alt="" className="img-fluid scroll-logo"/> */}
                <img src={`${process.env.PUBLIC_URL}/images/logo-white.png`} alt="" className="img-fluid nonscroll-logo"/>
                {/* <img src={`${process.env.PUBLIC_URL}/images/logo-black.svg`} alt="" className="img-fluid scroll-logo"/> */}
            </Link>

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                        <Link className="nav-link" to="/hyperswap">Hyperswap</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/hyperlend">Hyperlend</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/hyperlaunch">Hyperlaunch</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/demo">Demo</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/wallet">Wallet</Link>
                    </li>
                    <li className="nav-item">
                        <a href="https://lilth.gitbook.io/spherium-developer/" target={'_blank'} rel="noopener noreferrer" className="nav-link">
                        Documentation
                        </a>
                        {/* <div className="dropdown-menu headerdropdown" aria-labelledby="navbarDropdown">
                            <Link to="/documentation" className="dropdown-item">Documentation</Link>
                            <li><a className="navbar-brand" href={`${process.env.PUBLIC_URL}/pdf/Spherium-Finance-Whitepaper-EN.pdf`} target="_blank" rel="noopener">Whitepaper(EN)</a></li>
                            <li><a className="navbar-brand" href={`${process.env.PUBLIC_URL}/pdf/Spherium-Finance-Whitepaper-CN.pdf`} target="_blank" rel="noopener">Whitepaper(CN)</a></li>
                        </div> */}
                    </li>
                </ul>
            </div>
            </div>
            </nav>
        </section>
    );
};

export default Navigation;