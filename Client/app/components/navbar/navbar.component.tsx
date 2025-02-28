import cn from "~/utils/cn";
import Container from "../container/container.component";
import "./navbar.styles.css";

import { Link } from "react-router";
import SearchBar from "../search-bar/search-bar.component";

/**
 *
 * TODO: Fix responsiveness of navbar
 */
const Navbar = () => {
  return (
    <div className="navbar h-[13.6rem] md:pt-[4.2rem]">
      <Container className="pt-8 md:md:max-w-[68.9rem] flex  justify-between">
        <Link to="/">
          <div className="brand">
            <img src="/assets/desktop/logo.svg" alt="" />
          </div>
        </Link>
        <div className="flex items-center w-[11.2rem] justify-between">
          <img src="/assets/desktop/icon-sun.svg" alt="" />
          <label className="switch">
            <input type="checkbox" />
            <span className="slider"></span>
          </label>
          <img src="/assets/desktop/icon-moon.svg" alt="" />
        </div>
      </Container>
      <SearchBar />
    </div>
  );
};

export default Navbar;
