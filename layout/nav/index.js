import Link from "next/link";
import { useRouter } from "next/router";
import NavContext from "./styled";
import { MdOutlineDashboard } from "react-icons/md";
import { RiPieChartLine } from "react-icons/ri";
import { FiUsers, FiSettings } from "react-icons/fi";
import propTypes from "prop-types";

const Nav = (props) => {
  const router = useRouter();
  return (
    <NavContext {...props} size={15}>
      <span className={`menu-item ${router.pathname == "/" ? "active" : ""}`}>
        <Link href="/" className="menu-link">
          HOME
        </Link>
      </span>
      <span
        className={`menu-item ${
          router.pathname == "/headphones" ? "active" : ""
        }`}
      >
        <Link href="/headphones">HEADPHONES</Link>
      </span>
      <span
        className={`menu-item ${
          router.pathname == "/speakers" ? "active" : ""
        }`}
      >
        <Link href="/speakers">SPEAKERS</Link>
      </span>
      <span
        className={`menu-item ${
          router.pathname == "/earphones" ? "active" : ""
        }`}
      >
        <Link href="/earphones">EARPHONES</Link>
      </span>
    </NavContext>
  );
};

Nav.propTypes = {
  screen: propTypes.oneOf(["mobile", "desktop"]).isRequired,
};

export default Nav;
