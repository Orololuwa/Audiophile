import Image from "next/image";
import LogoContext from "./styled";
import propTypes from "prop-types";
import router from "next/router";

const Logo = (props) => (
  <LogoContext {...props}>
    <Image
      src="/logo_mobile.png"
      alt="Roundup's Logo"
      height={30}
      width={20}
      quality={100}
    />
    <div className="logo">
      <h5 className="logo-header">RoundUp</h5>
      <p className="logo-subheader">By Tannadi</p>
    </div>
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
