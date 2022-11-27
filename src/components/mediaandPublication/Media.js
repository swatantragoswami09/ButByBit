import { motion, useAnimation } from "framer-motion";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";

import styled from "styled-components";

import PlusJakartaSansRegular from "../../assets/fonts/Plus_Jakarta_Sans/static/PlusJakartaSans-Regular.ttf";
const Mediawrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0rem 3rem 0 3rem;
  justify-content: center;
  padding-bottom: 7rem;
  align-items: center;
`;
const MediaRow1 = styled.div`
  display: flex;
  justify-content: center;
`;
const MediaRow1Content1 = styled.div`
  font-family: PlusjakartaSans;

  font-weight: 500;
  font-size: 11px;
  line-height: 14px;
  /* identical to box height */
  margin-bottom: 1.4rem;
  text-align: center;
  letter-spacing: 3.5px;
  text-transform: uppercase;

  /* Acceent 2 */

  color: #99f8d0;
  @media (max-width: 650px) {
    font-family: PlusjakartaSans !important;
    font-size: 1rem;
    line-height: 14px;
    /* identical to box height */
    margin-bottom: 1.4rem;
    text-align: center;
    letter-spacing: 3.5px;
    text-transform: uppercase;

    /* Acceent 2 */

    color: #99f8d0;
  }
`;
const MediaRow2 = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
`;
const MediaRow2Content = styled.div`
  font-family: PlusjakartaSans;

  font-weight: 700;
  font-size: 32px;
  line-height: 44px;
  /* identical to box height, or 138% */

  text-align: center;

  /* Main white */

  color: #d0d4de;
  @media (max-width: 650px) {
    font-family: PlusjakartaSans;

    font-weight: 700;
    font-size: 2rem;
    line-height: 44px;
    /* identical to box height, or 138% */

    text-align: center;

    /* Main white */

    color: #d0d4de;
  }
`;

const MediaRow3 = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const EachCard = styled.div`
  right: 732px;
  top: 4934px;
  font-family: PlusjakartaSans;
  border-radius: 16px;
  padding: 10px 15px;
  border: 1px solid #5e5959;
  :hover {
    background: linear-gradient(
      34.88deg,
      rgba(255, 255, 255, 0.08) 10.99%,
      rgba(135, 242, 231, 0.08) 91.81%
    );
  }
  margin: 5px 10px;

  @media only screen and (max-width: 1280px) {
    // padding:0px !important;
  }
`;
const EachCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Date = styled.div`
  font-family: PlusjakartaSans;
  margin-bottom: 0.7rem;
  font-weight: 600;
  font-size: 9px;
  line-height: 20px;
  /* identical to box height, or 222% */

  letter-spacing: 1px;
  text-transform: uppercase;

  /* Text color */

  color: #5d6774;
`;
const NewsTitle = styled.div`
  font-family: PlusjakartaSans;
  margin-bottom: 0.7rem;

  font-weight: 700;
  font-size: 20px;
  line-height: 28px;
  /* or 140% */

  /* Main white */

  color: #d0d4de;
  @media only screen and (max-width: 1280px) {
    font-size: 1rem !important;
  }
`;
const NewsDescripation = styled.div`
  font-family: PlusjakartaSans;
  margin-top: 0.7rem;

  font-weight: 400;
  font-size: 12px;
  line-height: 21px;
  /* or 175% */

  /* Text color */

  color: #5d6774;
  @media only screen (max-width: 768px) {
    font-size: 0.6rem;
  }
`;
const Media = () => {
  const { ref, inView } = useInView({
    threshold: 0.3,
  });

  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        y: 0,
        transition: {

          duration: 1,

        },
        opacity: 6,
      });
    }
    if (!inView) {
      animation.start({
        y: 500,
        opacity: 0,
      });
    }
  }, [inView]);

  return (
    <>
      <Mediawrapper>
        <MediaRow1 as={motion.div} animate={animation} ref={ref}>
          <MediaRow1Content1>Media And Publications</MediaRow1Content1>
        </MediaRow1>

        <MediaRow2 as={motion.div} animate={animation} ref={ref}>
          <MediaRow2Content>Read our latest Blogs</MediaRow2Content>
        </MediaRow2>
        <MediaRow3 as={motion.div} animate={animation} ref={ref}>
          <EachCard>
            <EachCardWrapper>
              <Date>July 27, 2021</Date>
              <NewsTitle>
                Unveils a cross-chain <br></br> incubation and grant <br></br>{" "}
                program
              </NewsTitle>
              <NewsDescripation>
                Send crypto as easy as messages <br></br>
                to anyone. No need for messages
              </NewsDescripation>
            </EachCardWrapper>
          </EachCard>
          <EachCard>
            <EachCardWrapper>
              <Date>July 27, 2021</Date>
              <NewsTitle>
                Unveils a cross-chain <br></br> incubation and grant <br></br>{" "}
                program
              </NewsTitle>
              <NewsDescripation>
                Send crypto as easy as messages <br></br>
                to anyone. No need for messages
              </NewsDescripation>
            </EachCardWrapper>
          </EachCard>
          <EachCard>
            <EachCardWrapper>
              <Date>July 27, 2021</Date>
              <NewsTitle>
                Unveils a cross-chain <br></br> incubation and grant <br></br>{" "}
                program
              </NewsTitle>
              <NewsDescripation>
                Send crypto as easy as messages <br></br>
                to anyone. No need for messages
              </NewsDescripation>
            </EachCardWrapper>
          </EachCard>
          <EachCard>
            <EachCardWrapper>
              <Date>July 27, 2021</Date>
              <NewsTitle>
                Unveils a cross-chain <br></br> incubation and grant <br></br>{" "}
                program
              </NewsTitle>
              <NewsDescripation>
                Send crypto as easy as messages <br></br>
                to anyone. No need for messages
              </NewsDescripation>
            </EachCardWrapper>
          </EachCard>
        </MediaRow3>
      </Mediawrapper>
    </>
  );
};

export default Media;
