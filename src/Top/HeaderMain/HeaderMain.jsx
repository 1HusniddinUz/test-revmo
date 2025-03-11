import React from "react";
import "./HeaderMain.css"
import HeaderBg from "../../media/HeaderBg.mp4"
import { useTranslation } from "react-i18next";

const HeaderMain = () => {
    const { t } = useTranslation();
  return (
    <div id="HeaderMain">
      <video src={HeaderBg} autoPlay loop muted ></video>
      <div id="HeaderContent">
        <h1><span>RevmoGloves</span> <br />{t(`quotes`)}
        </h1>
      </div>
      <div id="HeaderMain_Overlay"></div>
    </div>
  );
};

export default HeaderMain;
