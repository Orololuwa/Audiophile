import React from "react";
import HomeCtx, { YX1, ZX7, ZX9 } from "./styled";
import Section from "components/section";
import Button from "components/Button";
import Col from "components/col";
import Categories from "layout/content/categories";
import Flex from "components/flex";
import Image from "next/image";
import SectionAudioGear from "layout/content/sectionAudioGear";
import Head from "next/head";

const Home = (props) => {
  return (
    <>
      <Head>
        <title>Audiophile e-commerce website | Home</title>
      </Head>
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
            <Button variant="filled" colorScheme="orange">
              SEE PRODUCT
            </Button>
          </Col>
          <div className="hero-right">.</div>
        </Section>
        <Section>
          <Categories />
        </Section>
        <Section style={{ paddingTop: "0" }}>
          <Flex gap="3.5rem" wrap justifyContent="space-between">
            <ZX9>
              <div className="zx9-image">
                <Image
                  src="/assets/home/desktop/image-speaker-zx9.png"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
              <Col className="zx9-textcontent">
                <h1>
                  ZX9 <br />
                  SPEAKER
                </h1>
                <p>
                  Upgrade to premium speakers that are phenomenally built to
                  deliver truly remarkable sound.
                </p>
                <Button variant="filled" colorScheme="gray">
                  SEE PRODUCT
                </Button>
              </Col>
            </ZX9>
            <ZX7>
              <Col className="zx7-textcontent">
                <h4>ZX7 SPEAKER</h4>
                <Button variant="outline" colorScheme="gray">
                  SEE PRODUCT
                </Button>
              </Col>
            </ZX7>
            <YX1>
              <div className="yk1-image"></div>
              <Col className="yk1-textcontent" justifyContent="center">
                <h4>YK1 SPEAKER</h4>
                <Button variant="outline" colorScheme="gray">
                  SEE PRODUCT
                </Button>
              </Col>
            </YX1>
          </Flex>
        </Section>
        <SectionAudioGear />
      </HomeCtx>
    </>
  );
};

export default Home;
