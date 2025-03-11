import React from "react";
import HeaderNav from "../HeaderNav/HeaderNav"
import HeaderMain from "../HeaderMain/HeaderMain"
const Header = ({changeLang}) => {
  return (
    <header id="Header">
      <HeaderNav changeLang = {changeLang} />
      <HeaderMain changeLang = {changeLang} />
    </header>
  );
};

export default Header;
