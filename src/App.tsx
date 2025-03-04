import { BrowserRouter, Route, Routes } from "react-router-dom";
import CookieConsent from "react-cookie-consent";

import NavMenu from "components/menu/NavMenu";
import LandingPage from "pages/LandingPage";
import PrivacyPage from "pages/PrivacyPage";

const App = () => {
  return (
    <BrowserRouter>
      <CookieConsent
        location="bottom"
        buttonText="Accept"
        declineButtonText="Decline"
        enableDeclineButton
        cookieName="userConsent"
        style={{ background: "#2B373B", textAlign: "center" }}
        expires={150}
      >
        🍪 This website uses cookies to improve your experience.
        <a href="/privacy" style={{ color: "#4CAF50" }}>
          Learn more
        </a>
      </CookieConsent>
      <NavMenu />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
