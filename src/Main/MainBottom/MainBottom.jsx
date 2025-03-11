import React from "react";
import "./MainBottom.css";
import { useTranslation } from "react-i18next";

const ProductGloves = [
  {
    id: 1,
    name: "Nitrile Gloves",
    description:
      "Lateksga allergiyasi bor odamlar uchun yaxshi alternativa. Kimyoviyga va teshilishga yordam beradi.",
    image:
      `https://i.ibb.co/ycBn2QZs/1.jpg`,
  },
  {
    id: 2,
    name: "Latex Gloves",
    description:
      "Tabiiy kauchukdan ishlab chiqariladi. Juda moslashuvchan va qulay",
    image:
      "https://i.ibb.co/NgTPhqM1/2.jpg ",
  },
  {
    id: 3,
    name: "Vinyl Gloves",
    description:
      "Sintetik materialdan ishlab chiqariladi. Nisbatan arzon, lekin kamroq mustahkam",
    image:
      "https://i.ibb.co/9kz2R1wF/3.jpg",
  },
];
const MainBottom = () => {
  const { t } = useTranslation();
  return (
    <div id="MainBottom">
      <div id="MainFeature">
        <div id="FeatureContainer">
          <div id="FeatureGloves"></div>
          <div id="FeatureGlovesInfo">
            <div id="FeatureGlovesText">
              <h2>{t(`mainTopH3`)}</h2>
              <p>
              {t(`mainTopP1`)}
              </p>
              <p>
              {t(`mainTopP2`)}
              </p>
              <p>
              {t(`mainTopP4`)}
              </p>
            </div>
            <a href="/contact">
              <button>{t(`mainTopBtn`)}</button>
            </a>
          </div>
        </div>
        <div id="MainFeatureProducts">
          <h2>{t(`mainProductH1`)}</h2>

          <div id="MainProductsContainer">
            {ProductGloves.map((item) => (
              <div key={item.id} id="ProductGloves">
                <img src={item.image} alt={item.name} loading="lazy" />
                <div id="GlovesText">
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
          <a href="#">
            <button>{t(`mainProductBtn`)}</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default MainBottom;
