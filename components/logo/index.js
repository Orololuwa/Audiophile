import Image from "next/image";
import LogoContext from "./styled";
import propTypes from "prop-types";
import router from "next/router";

const Logo = (props) => (
  <LogoContext {...props}>
    <Image
      src="/assets/shared/desktop/logo.svg"
      alt="Roundup's Logo"
      height={20}
      width={100}
      quality={100}
    />
  </LogoContext>
);

Logo.defaultProps = {
  onClick: () => router.push("/"),
};

Logo.propTypes = {
  mobile: propTypes.bool,
  onClick: propTypes.func,
};

export default Logo;
