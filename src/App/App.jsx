import "./App.css"
import Top from "../Top/Header/Header"
import Main from "../Main/Main/Main"
import Bottom from "../Bottom/Footer/Footer"
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationsEn from "../locales/translationsEn";
import translationsRu from "../locales/translationsRu";
import translationsUz from "../locales/translationsUz";

i18n.use(initReactI18next).init({
  resources: {
    en: {translation: translationsEn},
    ru: {translation: translationsRu},
    uz: {translation: translationsUz},
  },
  lng: "en", // Change this value to switch languages
  fallbackLng: "en", // if user language isn't available, use en as fallback
});
function App() {
  const changeLang = (value) =>{
    i18n.changeLanguage(value)
  }
  return (
    <div id="App">
      <Top changeLang = {changeLang}/>
      <Main />
      <Bottom />
    </div>
  );
}

export default App;
