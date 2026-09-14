import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState
} from "react";

import translations from "../data/translation";

const AppContext = createContext(null);

export function AppProvider({ children }) {
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem("craftsaathi_language") || "English";
  });

  const changeLanguage = (newLanguage) => {
    setLanguage(newLanguage);
    localStorage.setItem("craftsaathi_language", newLanguage);
  };

  useEffect(() => {
    const savedLanguage =
      localStorage.getItem("craftsaathi_language");

    if (savedLanguage) {
      setLanguage(savedLanguage);
    }
  }, []);

  /*
   * GLOBAL TRANSLATION FUNCTION
   *
   * Every page can use:
   *
   * const { t } = useApp();
   *
   * {t("home")}
   */

  const t = (key) => {
    // Selected language
    const selectedLanguage =
      translations[language];

    // Selected language translation
    if (
      selectedLanguage &&
      selectedLanguage[key]
    ) {
      return selectedLanguage[key];
    }

    // English fallback
    if (
      translations.English &&
      translations.English[key]
    ) {
      return translations.English[key];
    }

    // If key does not exist
    return key;
  };

  const value = useMemo(
    () => ({
      language,
      setLanguage: changeLanguage,
      changeLanguage,
      chooseLanguage: changeLanguage,
      t
    }),
    [language]
  );

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error(
      "useApp() must be used inside AppProvider"
    );
  }

  return context;
}