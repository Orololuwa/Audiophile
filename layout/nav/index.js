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
        <MdOutlineDashboard size={15} />
        <Link href="/" className="menu-link">
          Dashboard
        </Link>
      </span>
      <span
        className={`menu-item ${router.pathname == "/data" ? "active" : ""}`}
      >
        <RiPieChartLine size={15} />
        <Link href="/data">Data</Link>
      </span>
      <span
        className={`menu-item ${
          router.pathname == "/customers" ? "active" : ""
        }`}
      >
        <FiUsers size={15} />
        <Link href="/customers">Customers</Link>
      </span>
      <span
        className={`menu-item ${
          router.pathname == "/settings" ? "active" : ""
        }`}
      >
        <FiSettings size={15} />
        <Link href="/settings">Settings</Link>
      </span>
    </NavContext>
  );
};

Nav.propTypes = {
  screen: propTypes.oneOf(["mobile", "desktop"]).isRequired,
};

export default Nav;
