import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import img from "../images/wine-and-food-1.jpeg";
const Section = styled.section`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-item: center;
  background: white;
`;
const Container = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 100vh;
  padding: 3rem calc((100vw-1300px) / 2) @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
const ColumnLeft = styled.div`
  display: flex;
  color: black;
  flex-direction: column;
  justify-item: flex-start;
  justify-content: center;
  align-item: flex-start;
  padding: 5rem 2rem;

  h1 {
    margin-bottom: 0.5rem;
    font-size: 2rem;
  }
  p {
    margin: 2rem 0;
    font-size: 4rem;
    line-height: 1.1;
  }
`;

const ColumnRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-item: flex-start;
  justify-content: center;
  align-item: flex-start;
`;
const Images = styled(motion.img)`
  height: 60%;
  width: auto;
  margin-right: 2em;
`;
function Title() {
  const fadeFromBottom = {
    hidden: { opacity: 0, y: 1000 },
    visible: { opacity: 1, y: 0 },
  };
  const fadeFromLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  };
  return (
    <Section>
      <Container className="frontPageContainer">
        <ColumnLeft>
          <motion.h1
            variants={fadeFromLeft}
            initial="hidden"
            animate="visible"
            transition={{ duration: 1.2 }}
          >
            <h1>Restaurant Blog</h1>
            <p>Here are some of New York Top rated restaurant</p>
          </motion.h1>
        </ColumnLeft>
        <ColumnRight>
          <Images
            id="frontPageImg"
            src={img}
            alt="none"
            variants={fadeFromBottom}
            initial="hidden"
            animate="visible"
            transition={{ duration: 1.5 }}
          />
        </ColumnRight>
      </Container>
    </Section>
  );
}

export default Title;
