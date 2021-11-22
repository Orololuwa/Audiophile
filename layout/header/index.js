import { useState } from "react";
import HeaderContext, { Menu } from "./styled";
import Logo from "components/logo";
import Nav from "layout/nav";
import Drawer from "components/drawer";
import { IoCartOutline } from "react-icons/io5";
import theme from "theme";
import { useDispatch } from "react-redux";
import actions from "redux/cart/actions";

const Header = () => {
  const dispatch = useDispatch();

  const [showSideDrawer, setShowSideDrawer] = useState(false);
  const onShow = () => setShowSideDrawer(true);
  const onClose = () => setShowSideDrawer(false);

  const toggleCartDisplay = () => {
    dispatch(actions.toggleCartDisplay());
  };

  return (
    <HeaderContext>
      <Menu size={25} onClick={onShow} />
      <Logo />
      <Nav screen="desktop" />
      <IoCartOutline
        color={theme.colors.white}
        size={25}
        style={{ cursor: "pointer" }}
        onClick={toggleCartDisplay}
      />
      <Drawer
        isOpen={showSideDrawer}
        onClose={onClose}
        placement="left"
        color="gray"
      >
        <Logo style={{ margin: "1rem 1rem 2.5rem 1rem" }} />
        <Nav screen="mobile" />
      </Drawer>
    </HeaderContext>
  );
};

export default Header;
