import React from "react";
import "./Footer.css";
import { useTranslation } from "react-i18next";
const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer id="Footer">
      <div id="FooterContainer">
        <div id="FooterData">
          <div id="FooterDataCard">
            <div id="FooterDataSCard">
              <h4>{t(`footerH31`)}</h4>
              <ul>
                <li>
                  <a
                    href="tel:+998906371001"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {t(`footerPhone`)} +998(90)-637-10-01
                  </a>
                </li>
                <li>{t(`footerPosition`)} Shokhida Naimova</li>
                <li>
                  <a
                    href="https://example@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {t(`footerEmail`)}: mainaccount@gmail.com
                  </a>
                </li>
              </ul>
            </div>
            <div id="FooterDataSCard">
              <ul>
                <li>
                  <a
                    href="tel:+998906371001"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                  {t(`footerPhone`)} +998(90)-637-10-01
                  </a>
                </li>
                <li>{t(`footerPosition2`)} Shokhida Naimova</li>
                <li>
                  <a
                    href="https://example@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {t(`footerEmail`)} mainaccount@gmail.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div id="FooterDataCard">
            <div id="FooterDataSCard">
              <h4>
                {t(`footerH32`)}
                <a href="https://maps.google.com/maps?q=39.751372,64.453918&ll=39.751372,64.453918&z=16" target="_blank" rel="noopener noreferrer">
                  <i
                    style={{ fontSize: "1rem" }}
                    className="fa-solid fa-location-dot"
                  ></i>
                </a>
              </h4>
              <ul>
                <li>
                  <a href="/" target="_blank" rel="noopener noreferrer">
                    Manzil
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div id="FooterDataCard">
            <div id="FooterDataSCard">
              <h4>{t(`footerH33`)}</h4>
              <ul>
                <li dangerouslySetInnerHTML={{ __html: "All About" }} />
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
