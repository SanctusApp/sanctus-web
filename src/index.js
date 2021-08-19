import React, {Suspense} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';
import 'flag-icon-css/css/flag-icon.min.css'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Loading from './pages/Loading'


i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(LanguageDetector) // passes LanguageDetector
  .use(HttpApi)
  .init({
    supportedLngs: ['pt', 'en', 'es'],
    fallbackLng: "en",
    detection: {
      order: ['cookie', 'htmlTag', 'localStorage', 'path', 'subdomain'],
      caches: ['cookie']
    },
    backend: {
      loadPath: '/assets/locales/{{lng}}/translation.json',
    }
  });


const loadingMarkup = (
  <Loading/>
)// with this we avoid that appear the keys on the screen before load the values of the translation

ReactDOM.render(
  <Suspense fallback={loadingMarkup}>
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </Suspense>,
  document.getElementById('root')
);

reportWebVitals();
