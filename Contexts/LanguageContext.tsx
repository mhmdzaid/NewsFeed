import React, { ReactNode, createContext, useContext, useState } from "react";

type LanguageContextType = {
  language: Language;
  changeLanguage: (newLanguage: Language) => void;
};
type Language = "en" | "it";
const LanguageContext = createContext<LanguageContextType>({
  language: "en",
  changeLanguage: () => {},
});

export const useLanguage = () => useContext(LanguageContext);

export type LanguageProviderProps = {
  children: ReactNode;
};

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
  const [language, setLanguage] = useState<Language>("en");
  const changeLanguage = (newLanguage: Language) => {
    setLanguage(newLanguage);
  };

  return (
    <LanguageContext.Provider value={{language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
