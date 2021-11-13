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
      <Logo mobile className="logo" />
      <Nav screen="desktop" />
      <IoCartOutline color={theme.colors.white} size={25} />
      <Drawer
        isOpen={showSideDrawer}
        onClose={onClose}
        placement="left"
        color="gray"
      >
        <Nav screen="mobile" />
      </Drawer>
    </HeaderContext>
  );
};

export default Header;
