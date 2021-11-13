import React from "react";
import HomeCtx from "./styled";
import withAuth from "HOC/withAuth";
import Section from "components/section";
import Button from "components/Button";
import Col from "components/col";

const Home = (props) => {
  return (
    <HomeCtx>
      <Section className="hero">
        <Col className="hero-left" gap="1rem">
          <h4>NEW PRODUCT</h4>
          <h1>
            XX99 MARK II <br />
            HEADPHONES
          </h1>
          <p>
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
          <Button colorScheme="orange">SEE PRODUCT</Button>
        </Col>
        <div className="hero-right">.</div>
      </Section>
      <Section>tgul liih</Section>
    </HomeCtx>
  );
};

export default withAuth(Home);
