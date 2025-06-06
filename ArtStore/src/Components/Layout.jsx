import React from "react";
import { Link, Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import CartWidget from "./CartWidget";

function Layout() {
  return (
    <>
      <CartWidget></CartWidget>
      <NavBar />
      <Outlet />
    </>
  );
}

export default Layout;
