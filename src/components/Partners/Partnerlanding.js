import React from 'react';

import styled from "styled-components";
import { Link } from 'react-router-dom';

import AdlunamLogo from "../../assets/image/products/adlunam-logo-black.png"
import Anypad from "../../assets/image/products/Anypad.svg"
import Brokoli_logo from "../../assets/image/products/Brokoli_logo.png"
import HYFI from "../../assets/image/products/HYFI-removebg-preview.png"
import hypersign_black_transparent_rect from "../../assets/image/products/hypersign_black_transparent_rect.png"
import Supra from "../../assets/image/products/supra-logo.svg"
import StorytokenLogo from "../../assets/image/products/StorytokenLogoi-removebg-preview.png"
import './partner.scss';


import PlusJakartaSansRegular from "../../assets/fonts/Plus_Jakarta_Sans/static/PlusJakartaSans-Regular.ttf"
const PartnerSection = styled.div`

border-radius: 16px;
    display: flex;
    justify-content: center;
    margin: 4rem 1rem 8rem 1rem;
`

const PartnerWrapper = styled.div`
display:flex;
flex-direction:column;
background: #FFFFFF05;
padding: 3rem 7rem;
border-radius: 20px;
margin : 3rem 7rem;

`

const UpperSection = styled.div`
display:flex;
justify-content:center;

`
const PartnerTitle = styled.div`
font-family: 'PlusJakartaSansRegular';
src: url(${PlusJakartaSansRegular}) format('ttf');
font-style: normal;
font-weight: 700;
font-size: 48px;
line-height: 64px;
margin-bottom: 2rem;
/* identical to box height, or 133% */


/* Main white */

color: #D0D4DE;



`
const LowerSection = styled.div`

display:flex;
justify-content: center;
flex-wrap: wrap;


`
const Eachsection = styled.div`
width:width: 150px;
margin: 10px
background: rgba(255, 255, 255, 0.1);
border-radius: 10px;
`

const Partnerimg = styled.img`
width:177px;

@keyframes spin {
  from {
    transform: rotateY(0);
  }
  to {
    transform: rotateY(1turn);
  }
}

{
  animation: spin 5s ease;
  animation-iteration-count: infinite;
}
`

const Emptysection = styled.div`


`
const PartnerLanding = () => {
    return (
        <div className='partner-container'>
            <div className='sub-partner'>
                <div className='PartnerTitle'>
                    Our Partners
                </div>
                <div className='logo-list'>
                    <div className='each-img'>
                        <img className='Partnerimg' src={AdlunamLogo} />
                    </div>
                    <div className='each-img'>
                        <img className='Partnerimg' src={Anypad} />
                    </div>
                    <div className='each-img'>
                        <img className='Partnerimg' src={Brokoli_logo} />
                    </div>
                    <div className='each-img'>
                        <img className='Partnerimg' src={HYFI} />
                    </div>
                    <div className='each-img'>
                        <img className='Partnerimg' src={hypersign_black_transparent_rect} />
                    </div>
                    <div className='each-img'>
                        <img className='Partnerimg' src={Supra} />
                    </div>
                    <div className='each-img'>
                        <img className='Partnerimg' src={StorytokenLogo} />
                    </div>
                    <div className='each-img'>
                        <img className='Partnerimg' src={Anypad} />
                    </div>
                    <div className='each-img'>
                        <img className='Partnerimg' src={Supra} />
                    </div>

                </div>
            </div>

            {/* <PartnerSection>
        <PartnerWrapper>
          <UpperSection>

            <PartnerTitle>
              Our partners
            </PartnerTitle>

          </UpperSection>
          <LowerSection>

            <Eachsection>
              <Partnerimg src={AdlunamLogo} />
            </Eachsection>
            <Eachsection>
              <Partnerimg src={Anypad} />
            </Eachsection>
            <Eachsection>
              <Partnerimg src={Brokoli_logo} />
            </Eachsection>
            <Eachsection>
              <Partnerimg src={HYFI} />
            </Eachsection>
            <Eachsection>
              <Partnerimg src={hypersign_black_transparent_rect} />
            </Eachsection>
            <Eachsection>
              <Partnerimg src={Supra} />
            </Eachsection>
            <Eachsection>
              <Partnerimg src={StorytokenLogo} />
            </Eachsection>
            <Eachsection>
              <Partnerimg src={Anypad} />
            </Eachsection>
            <Eachsection>
              <Partnerimg src={Anypad} />
            </Eachsection>



          </LowerSection>




        </PartnerWrapper>




      </PartnerSection> */}

        </div>
        //   <div className="partnersContainer">
        //       <div className="container">
        //   <h1>PARTNERS</h1>
        //   <div className="col-lg-12">
        //     <div className="row align-items-center">
        //       <div className="col-lg-3 d-flex justify-content-center" style={{borderRight: '2px solid rgba(255, 255, 255, 0.1)'}}>
        //         <img
        //           src={`${process.env.PUBLIC_URL}/images/Partnerships-logos/Partnerships-logo-1.png`}
        //           alt=""
        //           width={'40%'}
        //           className="img-fluid"
        //         />
        //       </div>
        //       <div className="col-lg-3 d-flex justify-content-center" style={{borderRight: '2px solid rgba(255, 255, 255, 0.1)'}}>
        //         <img
        //           src={`${process.env.PUBLIC_URL}/images/Partnerships-logos/Partnerships-logo-2.png`}
        //           alt=""
        //           className="img-fluid"
        //         />
        //       </div>
        //       <div className="col-lg-3 d-flex justify-content-center" style={{borderRight: '2px solid rgba(255, 255, 255, 0.1)'}}>
        //         <img
        //           src={`${process.env.PUBLIC_URL}/images/Partnerships-logos/adlunam-logo-colour-2.png`}
        //           alt=""
        //           width={'40%'}
        //           className="partner-img"
        //         />
        //       </div>
        //       <div className="col-lg-3 d-flex justify-content-center">
        //         <img
        //           src={`${process.env.PUBLIC_URL}/images/Partnerships-logos/ANYPAD-LOGO.svg`}
        //           alt=""
        //           width={'25%'}
        //           className="partner-img"
        //         />
        //       </div>
        //       <div className="col-lg-3 d-flex justify-content-center" style={{borderRight: '2px solid rgba(255, 255, 255, 0.1)'}}>
        //         <img
        //           src={`${process.env.PUBLIC_URL}/images/Partnerships-logos/BROKOLI.png`}
        //           alt=""
        //           width={'40%'}
        //           className="partner-img"
        //         />
        //       </div>
        //       <div className="col-lg-3 d-flex justify-content-center" style={{borderRight: '2px solid rgba(255, 255, 255, 0.1)'}}>
        //         <img
        //           src={`${process.env.PUBLIC_URL}/images/Partnerships-logos/blockius.png`}
        //           alt=""
        //           width={'40%'}
        //           className="partner-img"
        //         />
        //       </div>
        //       <div className="col-lg-3 d-flex justify-content-center" style={{borderRight: '2px solid rgba(255, 255, 255, 0.1)'}}>
        //         <img
        //           src={`${process.env.PUBLIC_URL}/images/Partnerships-logos/GAMERSE.png`}
        //           alt=""
        //           width={'30%'}
        //           className="partner-img"
        //         />
        //       </div>
        //       <div className="col-lg-3 d-flex justify-content-center">
        //         <img
        //           src={`${process.env.PUBLIC_URL}/images/Partnerships-logos/POLKALLY.svg`}
        //           alt=""
        //           width={'40%'}
        //           className="partner-img"
        //         />
        //       </div>
        //       <div className="col-lg-3 d-flex justify-content-center" style={{borderRight: '2px solid rgba(255, 255, 255, 0.1)'}}>
        //         <img
        //           src={`${process.env.PUBLIC_URL}/images/Partnerships-logos/story.png`}
        //           alt=""
        //           width={'40%'}
        //           className="partner-img"
        //         />
        //       </div>
        //       <div className="col-lg-3 d-flex justify-content-center" style={{borderRight: '2px solid rgba(255, 255, 255, 0.1)'}}>
        //         <img
        //           src={`${process.env.PUBLIC_URL}/images/Partnerships-logos/SUPRAORACLES.svg`}
        //           alt=""
        //           width={'40%'}
        //           className="partner-img"
        //         />
        //       </div>
        //       <div className="col-lg-3 d-flex justify-content-center" style={{borderRight: '2px solid rgba(255, 255, 255, 0.1)'}}>
        //         <img
        //           src={`${process.env.PUBLIC_URL}/images/Partnerships-logos/attack-wagon-logo.png`}
        //           alt=""
        //           width={'30%'}
        //           className="partner-img"
        //         />
        //       </div>
        //       <div className="col-lg-3 d-flex justify-content-center">
        //         <img
        //           src={`${process.env.PUBLIC_URL}/images/Partnerships-logos/backed.png`}
        //           alt=""
        //           width={'30%'}
        //           className="partner-img"
        //         />
        //       </div>
        //       <div className="col-lg-3 d-flex justify-content-center" style={{borderRight: '2px solid rgba(255, 255, 255, 0.1)'}}>
        //         <img
        //           src={`${process.env.PUBLIC_URL}/images/Partnerships-logos/BitLiberte.svg`}
        //           alt=""
        //           className="partner-img"
        //         />
        //       </div>
        //       <div className="col-lg-3 d-flex justify-content-center" style={{borderRight: '2px solid rgba(255, 255, 255, 0.1)'}}>
        //         <img
        //           src={`${process.env.PUBLIC_URL}/images/Partnerships-logos/Hyfi1.png`}
        //           alt=""
        //           width={'40%'}
        //           className="partner-img"
        //         />
        //       </div>
        //       <div className="col-lg-3 d-flex justify-content-center" style={{borderRight: '2px solid rgba(255, 255, 255, 0.1)'}}>
        //         <img
        //           src={`${process.env.PUBLIC_URL}/images/Partnerships-logos/hypersign.png`}
        //           alt=""
        //           style={{filter: 'invert(1)', width: '70%'}}
        //           className="partner-img"
        //         />
        //       </div>
        //       <div className="col-lg-3 d-flex justify-content-center">
        //         <img
        //           src={`${process.env.PUBLIC_URL}/images/Partnerships-logos/lockness.png`}
        //           alt=""

        //           className="partner-img"
        //         />
        //       </div>

        //     </div>
        //   </div>
        //   </div>
        // </div>
    );
};

export default PartnerLanding;