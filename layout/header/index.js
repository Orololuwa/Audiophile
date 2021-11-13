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
      <Logo mobile />
      <Nav screen="desktop" />
      <IoCartOutline color={theme.colors.white} size={25} />
      <Drawer isOpen={showSideDrawer} onClose={onClose} placement="right">
        <Nav screen="mobile" />
      </Drawer>
      <Menu size={25} onClick={onShow} />
    </HeaderContext>
  );
};

export default Header;
