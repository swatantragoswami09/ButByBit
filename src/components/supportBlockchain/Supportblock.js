import React, { useEffect } from "react";
import styled from "styled-components";
import Binancelogo from "../../assets/image/support/binance.svg";
import Avanlanchelogo from "../../assets/image/support/Avanlanche.svg";
import Polygonlogo from "../../assets/image/support/Polygon.svg";
import Ethernumlogo from "../../assets/image/support/Ethernum.svg";
import Cominglogo from "../../assets/image/support/Comingsoon.svg";


const SupportConatiner = styled.div`
  background: rgba(0, 0, 0, 0.63);
  padding: 20px 160px 22px 130px;
`;
const SupportWrapper = styled.div`
  display: grid;
  grid-template-columns: 40% auto;
  grid-gap: 180px;
`;
const SupportInteroperateContain = styled.div`
  font-family: "Plus Jakarta Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  /* or 150% */

  /* Main white */

  color: #d0d4de;
`;
const Eachbar = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 10px 20px;
  gap: 10px;
  height: 44px;

  background: rgba(255, 255, 255, 0.02);
  border-radius: 10px;
`;
const EachbarWrapper = styled.img``;

const Supportblock = () => {
  return (
    <SupportConatiner>
      <SupportWrapper>
        <SupportInteroperateContain>
          Supported Interoperable <br></br> Blockchains
        </SupportInteroperateContain>

        <Eachbar>
          <img src={Binancelogo} />
          <img src={Avanlanchelogo} />
          <img src={Polygonlogo} />

          <img src={Ethernumlogo} />
          <img src={Cominglogo} />
        </Eachbar>


      </SupportWrapper>
    </SupportConatiner>
  );
};

export default Supportblock;
