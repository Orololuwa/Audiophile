import Backdrop from "components/backdrop";
import Card from "./styled";
import propTypes from "prop-types";

const Modal = (props) => {
  const { show, children, onClose } = props;

  if (show) {
    return (
      <>
        <Backdrop onConfirm={onClose} />
        <Card height="fit-content" width="fit-content">
          {children}
        </Card>
      </>
    );
  } else {
    return <div style={{ display: "none" }} />;
  }
};

Modal.propTypes = {
  onClose: propTypes.func,
};

export default Modal;
