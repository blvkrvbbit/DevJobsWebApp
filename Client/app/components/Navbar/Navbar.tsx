import cn from "~/utils/cn";
import Container from "../Container/Container";
import "./navbar.css";

import { Link } from "react-router";
import SearchBar from "../SearchBar/SearchBar";
import { useStore } from "~/store/useStore";

/**
 *
 * TODO: Fix responsiveness of navbar
 */
const Navbar = () => {
  const { dispatch } = useStore();
  const toggleTheme = () => {
    dispatch({
      type: "TOGGLE_THEME",
    });
  };
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
            <input onClick={toggleTheme} type="checkbox" />
            <span className="slider"></span>
          </label>
          <img src="/assets/desktop/icon-moon.svg" alt="" />
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
