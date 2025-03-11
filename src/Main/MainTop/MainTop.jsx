import React from "react";
import "./MainTop.css";
import { useTranslation } from "react-i18next";
const MainTopBase = [
  {
    id: "1",
    icon: "fa-brands fa-dropbox",
    title: "FREE SHIPPING",
    description: "Free Shipping For All Orders Over $99",
  },
  {
    id: "2",
    icon: "fa-solid fa-lock",
    title: "SECURE PAYMENT",
    description: "Your payment information is processed securely.",
  },
  {
    id: "3",
    icon: "fa-duotone fa-solid fa-credit-card",
    title: "SAVE UP TO 50%",
    description:
      "Explore our collections and save up to 50% on your order today!",
  },
];
const MainTop = () => {
  const { t } = useTranslation();
  return (
    <div id="MainTop">
      <div id="MainTopBenefits">
        <div id="MainBenefitsContainer">
          {MainTopBase.map((item) => (
            <div key={item.id} id="MainBenefitsCard">
              <i className={item.icon}></i>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
      <div id="MainTopHero">
        <div id="MainHeroPromo">
          <h3>{t(`headerMainSpan`)}</h3>
          <h1>{t(`headerMainH3`)}</h1>
          <p>
            {t(`headerMainP`)}
          </p>
          <a href="/contact">
            <button>{t(`headerMainBtn`)}</button>
          </a>
        </div>
        <div id="MainHero_Overlay"></div>
      </div>
    </div>
  );
};

export default MainTop;
