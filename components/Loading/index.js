const { default: LoadingCtx, Loading2Ctx } = require("./styled");
import propTypes from "prop-types";

const Loading = (props) => <LoadingCtx {...props} />;

export const Loading2 = (props) => <Loading2Ctx {...props} />;

Loading.defaultProps = {
  size: "11em",
  color: "green",
};

Loading2.defaultProps = {
  size: "11em",
  color: "green",
};

Loading.propTypes = {
  size: propTypes.string,
  color: propTypes.string,
};

Loading2.propTypes = {
  size: propTypes.string,
  color: propTypes.string,
};

export default Loading;
