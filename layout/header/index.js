import { useState } from "react";
import HeaderContext, { Menu } from "./styled";
import Logo from "components/logo";
import Nav from "layout/nav";
import ToolBar from "./toolbar";
import Drawer from "components/drawer";

const Header = () => {
  const [showSideDrawer, setShowSideDrawer] = useState(false);
  const onShow = () => setShowSideDrawer(true);
  const onClose = () => setShowSideDrawer(false);
  return (
    <HeaderContext>
      <Logo mobile />
      <Nav screen="desktop" />
      <span style={{ color: "#fff" }}>...cart</span>
      <Drawer isOpen={showSideDrawer} onClose={onClose} placement="right">
        <Nav screen="mobile" />
      </Drawer>
      <Menu size={25} onClick={onShow} />
    </HeaderContext>
  );
};

export default Header;
