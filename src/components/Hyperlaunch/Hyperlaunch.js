import React, { useEffect } from "react";
import "./hyperlaunch.scss";
import { Link } from "react-router-dom";
import Navigation from "../Navigation/Navigation";

const Hyperlaunch = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
    <Navigation/>
    <section className="cmspages-wrapper">
      <div className="hyperlaunchbanner">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6 col-lg-6">
              <div className="bannerlaunchinfo">
                <h2>Hyperlaunch</h2>
                <p>Empowering, Equipping And Enabling Enterprising Projects.</p>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-6"></div>
          </div>
        </div>
      </div>
      <div className="hyperlaunch">
        <div className="hyperlaunchinfo">
          <div className="container">
            <div className="financeintroduces">
              <div className="row">
                <div className="col-12 col-md-5 col-lg-5">
                  <div className="hyperlaunchinfoimg">
                    <img
                      src={`${process.env.PUBLIC_URL}/images/hyperlaunchinfotop.png`}
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                </div>
                <div className="col-12 col-md-7 col-lg-7">
                  <div className="hyperlaunchinfotext">
                    <h2>Spherium Finance introduces</h2>
                    <h6>
                      An Incubation program for{" "}
                      <span>
                        <img
                          src={`${process.env.PUBLIC_URL}/images/launchprogram.svg`}
                          alt=""
                          className="img-fluid"
                        />
                      </span>{" "}
                    </h6>
                    <p>
                      A unique, instant and seamless multi-chain bridge equipped
                      with cross-functionality. With HyperLaunch, we aim to
                      empower and enable enterprising start-ups by providing
                      them with a launchpad to bolster their growth.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-md-12 col-lg-12">
                <div className="throughthyperlaunch">
                  <div className="row">
                    <div className="col-12 col-md-6 col-lg-6">
                      <div className="launchmetaverse">
                        <p>
                          At Spherium Finance we strive to revolutionise the
                          DeFi metaverse as our vision stands to connect
                          investors with aspiring new projects which can further
                          bring developmental changes in the ecosystem.
                        </p>
                        <h2>Through HyperLaunch</h2>
                        <p>
                          <strong>
                            which is our native Incubation Program,
                          </strong>
                        </p>
                        <p>
                          we hope to act as a launchpad for enterprising
                          projects in the realms of{" "}
                          <strong>DeFi , NFTs & Meta-Worlds</strong>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12 col-md-12 col-lg-12 ">
                <div className="makeimpactwrapper">
                  <h2>How do we hope to make an impact</h2>
                  <div className="impactcardsmask">
                    <div class="flip-card">
                      <div class="flip-card-inner">
                        <div class="flip-card-front">
                          <div className="articalone"></div>
                          <p className="articalfont">
                            Extensive Technical Support
                          </p>
                        </div>
                        <div class="flip-card-back">
                          <p>
                            We are a team of leading blockchain/web3 developers
                            and security experts, offering an in-depth coverage
                            of technical support to the partnership projects.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div class="flip-card">
                      <div class="flip-card-inner">
                        <div class="flip-card-front">
                          <div className="articaltwo"></div>
                          <p className="articalfont">
                            Cross Chain Bridge Access
                          </p>
                        </div>
                        <div class="flip-card-back">
                          <p>
                            We are building a high-functionality Multi-Chain
                            Bridge for instant swap of tokens across major
                            blockchain protocols. Partnering projects will have
                            free access to our Eth-Bsc Bridge with more
                            blockchains coming soon.{" "}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div class="flip-card">
                      <div class="flip-card-inner">
                        <div class="flip-card-front">
                          <div className="articalthree"></div>
                          <p className="articalfont">
                            Staking and Dual Farming Solutions
                          </p>
                        </div>
                        <div class="flip-card-back">
                          <p>
                            Projects looking to add DeFi integration into their
                            ecosystem can be facilitated with staking/yield
                            farming and Dual Farming solutions leading to
                            progressive APYs &amp; liquidity augmentation.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div class="flip-card">
                      <div class="flip-card-inner">
                        <div class="flip-card-front">
                          <div className="articalfour"></div>
                          <p className="articalfont">Social Collaboration</p>
                        </div>
                        <div class="flip-card-back">
                          <p>
                            We understand the need to be well connected in the
                            network, and engage with different communities.
                            Hence, we form a series of PR and community
                            interaction events for our partnering projects
                          </p>
                        </div>
                      </div>
                    </div>

                    <div class="flip-card">
                      <div class="flip-card-inner">
                        <div class="flip-card-front">
                          <div className="articalfive"></div>
                          <p className="articalfont">
                            Worthwhile Revenue Structure
                          </p>
                        </div>
                        <div class="flip-card-back">
                          <p>
                            We are dedicated to adding value to the projects
                            listing on our cross-chain DEX, by adding a revenue
                            stream for the initiation of the partnership. The
                            charges levied by Spherium from the users of the
                            project will be reimbursed back for a specific
                            period of time.{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="addfunctionality">
            <div className="container">
              <div className="functionalitytext">
                <h2>
                  Add The Functionality <br /> Of Cross-Chain Interoperability{" "}
                  <br /> Into Your Ecosystem With HyperSwap
                </h2>
                <Link className="nav-link" to="/hyperswap">
                  <button className="btn learnmorebtn">Learn More</button>
                </Link>
              </div>
            </div>
          </div>
          <div className="ourpartnerlaunch">
            <div className="container">
              <h2>Our Partners</h2>
              <div className="partnerlaunchmask">
                <div className="partnerlaunchcards">
                  <img
                    src={`${process.env.PUBLIC_URL}/images/anypad.png`}
                    alt=""
                  />
                </div>
                <div className="partnerlaunchcards">
                  <img
                    src={`${process.env.PUBLIC_URL}/images/logo-knockout.svg`}
                    alt=""
                  />
                </div>

                <div className="partnerlaunchcards">
                  <img
                    src={`${process.env.PUBLIC_URL}/images/lockness.png`}
                    alt=""
                  />
                </div>
                <div className="partnerlaunchcards">
                  <img
                    src={`${process.env.PUBLIC_URL}/images/Partnerships-logos/story.png`}
                    alt=""
                  />
                </div>
                <div className="partnerlaunchcards">
                  <img
                    src={`${process.env.PUBLIC_URL}/images/Partnerships-logos/BROKOLI.png`}
                    alt=""
                  />
                </div>
                <div className="partnerlaunchcards">
                  <img
                    src={`${process.env.PUBLIC_URL}/images/Partnerships-logos/blockius.png`}
                    alt=""
                  />
                </div>
                <div className="partnerlaunchcards">
                  <img
                    src={`${process.env.PUBLIC_URL}/images/Partnerships-logos/BitLiberte.svg`}
                    alt=""
                    style={{width: '100%'}}
                  />
                </div>
                <div className="partnerlaunchcards">
                  <img
                    src={`${process.env.PUBLIC_URL}/images/Partnerships-logos/adlunam-logo-colour-2.png`}
                    alt=""
                  />
                </div>
                <div className="partnerlaunchcards">
                  <img
                  width={'40%'}
                    src={`${process.env.PUBLIC_URL}/images/Partnerships-logos/backed.png`}
                    alt=""
                  />
                </div>
                <div className="partnerlaunchcards">
                  <img
                  width={'40%'}
                    src={`${process.env.PUBLIC_URL}/images/Partnerships-logos/attack-wagon-logo.png`}
                    alt=""
                  />
                </div>
                <div className="partnerlaunchcards">
                  <img
                  width={'40%'}
                    src={`${process.env.PUBLIC_URL}/images/Partnerships-logos/Hyfi1.png`}
                    alt=""
                  />
                </div>
                <div className="partnerlaunchcards">
                  <img
                  width={'100%'} style={{filter: 'invert(1)', width: '100%'}}
                    src={`${process.env.PUBLIC_URL}/images/Partnerships-logos/hypersign.png`}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="towitnesslaunch">
            <div className="container">
              <div className="functionalitytext">
                <h2>
                  Join HyperLaunch To Witness <br /> The True Decentralized
                  Metaworld
                </h2>
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSdUQw-ZeMziz_u7qaLNGu7ZRUc8ISRSodOsWOd44VXbwe0dPQ/viewform?embedded=true"
                  rel="noopener"
                  target="_blank"
                >
                  <button className="btn learnmorebtn">Join Now</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default Hyperlaunch;
