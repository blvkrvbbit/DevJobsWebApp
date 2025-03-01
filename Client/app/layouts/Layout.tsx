import { use, useEffect } from "react";
import { Outlet } from "react-router";
import Navbar from "~/components/Navbar/Navbar";
import { useStore } from "~/store/useStore";

const Layout = () => {
  const {
    state: { theme },
  } = useStore();
  useEffect(() => {
    if (!theme.darkMode) {
      document.body.style.background = "#F4F6F8";
    } else {
      document.body.style.background = "#121721";
    }
  });

  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default Layout;
