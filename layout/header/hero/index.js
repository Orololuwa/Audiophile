import HeroCtx from "./styled";
import propTypes from "prop-types";

const Hero = (props) => (
  <HeroCtx>
    <h1>{props.title}</h1>
  </HeroCtx>
);

Hero.propTypes = {
  title: propTypes.string,
};

export default Hero;
