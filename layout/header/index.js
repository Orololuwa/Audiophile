import { useState } from "react";
import HeaderContext, { Menu } from "./styled";
import Logo from "components/logo";
import Nav from "layout/nav";
import Drawer from "components/drawer";
import { IoCartOutline } from "react-icons/io5";
import theme from "theme";

const Header = () => {
  const [showSideDrawer, setShowSideDrawer] = useState(false);
  const onShow = () => setShowSideDrawer(true);
  const onClose = () => setShowSideDrawer(false);
  return (
    <HeaderContext>
      <Menu size={25} onClick={onShow} />
      <Logo />
      <Nav screen="desktop" />
      <IoCartOutline
        color={theme.colors.white}
        size={25}
        style={{ cursor: "pointer" }}
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
