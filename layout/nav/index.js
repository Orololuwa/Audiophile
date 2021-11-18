import Link from "next/link";
import { useRouter } from "next/router";
import NavContext from "./styled";
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
          /headphones*/g.test(router.pathname) ? "active" : ""
        }`}
      >
        <Link href="/headphones">HEADPHONES</Link>
      </span>
      <span
        className={`menu-item ${
          /speakers*/g.test(router.pathname) ? "active" : ""
        }`}
      >
        <Link href="/speakers">SPEAKERS</Link>
      </span>
      <span
        className={`menu-item ${
          /earphones*/g.test(router.pathname) ? "active" : ""
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
