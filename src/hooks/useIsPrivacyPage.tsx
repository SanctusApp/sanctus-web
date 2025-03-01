import { useLocation } from "react-router-dom";

const useIsPrivacyPage = () => {
  const location = useLocation();

  return location.pathname.includes("privacy");
};

export default useIsPrivacyPage;
