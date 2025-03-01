import { FC, JSX } from "react";
import ReactFlagsSelect from "react-flags-select";

import { languages } from "utils/utils";

const LanguageSelector: FC<LanguageSelectorProps> = ({
  selectedLanguage,
  handleLanguageChange,
  t,
}): JSX.Element => (
  <div className="hidden lg:block ml-auto">
    <ReactFlagsSelect
      selected={
        languages.find((lang) => lang.code === selectedLanguage)?.country_code
      }
      onSelect={handleLanguageChange}
      countries={languages.map((lang) => lang.country_code)}
      customLabels={languages.reduce((acc, lang) => {
        acc[lang.country_code] = lang.code.toUpperCase();
        return acc;
      }, {})}
      className="flag-select"
      placeholder={t("select_language")}
      selectedSize={14}
      optionsSize={14}
    />
  </div>
);

export default LanguageSelector;

interface LanguageSelectorProps {
  selectedLanguage: string;
  handleLanguageChange: (code: string) => void;
  t: (key: string) => string;
}
