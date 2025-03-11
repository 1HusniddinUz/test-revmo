import React from "react";
import "./HeaderNav.css";
import { useTranslation } from "react-i18next";
const HeaderNav = ({changeLang}) => {
  const { t } = useTranslation();
  const changeLangHandler = (e) =>{
    changeLang(e.target.value)
  }
  return (
    <div id="HeaderNav">
      <div className="container">
        <div id="HeaderLogo">
          <a href="/"><img src="https://i.ibb.co/Ld43pF77/image-removebg-preview-4.png" alt="CompanyLogo" style={{height: "50px"}} /></a>
        </div>
        <div id="HeaderTools">
          <ul>
            <li>
              <a href="#Header">{t(`home`)}</a>
            </li>
            <li>
              <a href="#MainBottom">{t(`about`)}</a>
            </li>
            <li>
              <a href="#MainFeatureProducts">{t(`products`)}</a>
            </li>
            <li>
              <a href="#Footer">{t(`contact`)}</a>
            </li>
          </ul>
        </div>
        <div id="HeaderSocialLinks">
          <a href="https://t.me/revmatologiya_dr_shohida" target="_blank" rel="noopener noreferrer" >
          <i class="fa-brands fa-telegram"></i>
          </a>
          <a href="https://www.instagram.com/dr.shohida_anvarovna/?igsh=cml4ZDd2bGY0M256" target="_blank" rel="noopener noreferrer">
          <i class="fa-brands fa-instagram"></i>
          </a>
          <a href="https://t.me/" target="_blank" rel="noopener noreferrer">
          <i class="fa-brands fa-facebook"></i>
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
          <i class="fa-brands fa-youtube"></i>
          </a>
          <select id="select"
          onChange={changeLangHandler}
          defaultValue="en"
          style={{
            backgroundColor: "transparent",
            border: "1px solid #000",
            padding: "7px 20px",
            color: "black"
          }}
          >
            <option value="en">English</option>
            <option value="uz">Uzbek</option>
            <option value="ru">Russian</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default HeaderNav;
