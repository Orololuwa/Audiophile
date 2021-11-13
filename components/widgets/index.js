import { DashboardWidgetCtx } from "./styled";
import Flex from "components/flex";
import propTypes from "prop-types";

export const DashboardWidget = (props) => {
  const { Icon, title, content } = props;
  return (
    <DashboardWidgetCtx {...props} width="18rem" height="7.5rem">
      <Flex alignItems="center" justifyContent="space-between">
        <p>{title}</p>
        {Icon}
      </Flex>
      <h3>{content}</h3>
    </DashboardWidgetCtx>
  );
};

DashboardWidget.defaultProps = {
  color: "green",
  variant: "filled",
  title: "Total Assets under Mgt.",
  content: "10,613,650",
};

DashboardWidget.propTypes = {
  Icon: propTypes.element,
  variant: propTypes.oneOf(["filled", "ghost"]),
  title: propTypes.string,
  content: propTypes.string,
};
