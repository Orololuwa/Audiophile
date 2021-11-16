import Logo from "components/logo";
import Nav from "layout/nav";
import { IoLogoFacebook, IoLogoInstagram, IoLogoTwitter } from "react-icons/io";
import FooterCtx, { Flex_ } from "./styled";
import Flex from "components/flex";

const Footer = () => (
  <FooterCtx>
    <Flex_
      justifyContent="space-between"
      alignItems="center"
      style={{ padding: "1rem 0" }}
    >
      <Logo className="logo" />
      <Nav screen="desktop" className="nav" />
      <Nav screen="mobile" className="nav" />
    </Flex_>
    <Flex_ style={{ padding: "1rem 0" }}>
      <article className="copy">
        <p>
          Audiophile is an all in one stop to fulfil your audio needs. We are a
          smaal team of music lovers and audio specialists who are devoted to
          helping you get the most out of personal audio. Come and visit our
          demo facility - we're open 7 days a week
        </p>
        <p>Copyright 2021. All rights reserved</p>
      </article>
      <span className="socials">
        <Flex justifyContent="flex-end" style={{ marginRight: "1rem" }}>
          <IoLogoFacebook size={25} className="socials-icon" />
          <IoLogoTwitter size={25} className="socials-icon" />
          <IoLogoInstagram size={25} className="socials-icon" />
        </Flex>
      </span>
    </Flex_>
  </FooterCtx>
);

export default Footer;
