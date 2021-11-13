import PortalBackdrop from "HOC/portals/backdrop";
import BackdropCtx from "./styled";
import propTypes from "prop-types";

const Backdrop = (props) => (
  <PortalBackdrop>
    <BackdropCtx onClick={props.onConfirm}>{props.children}</BackdropCtx>
  </PortalBackdrop>
);

Backdrop.propTypes = {
  onConfirm: propTypes.func,
};

export default Backdrop;
