import React, { useState, createContext, useContext } from "react";
import { allColors } from "../assets/Colors";
type DisplayMode = "light" | "dark";
export type ModeColors = {
  bgColor: string;
  cardBGColor: string;
  textColor: string;
  separatorColor: string;
  cardTitleColor: string;
};
export type DisplayModeContextType = {
  colors: ModeColors;
  mode: DisplayMode;
  changeMode: (mode: DisplayMode) => void;
};

const DisplayModeContext = createContext<DisplayModeContextType>({
  colors: {
    bgColor: "#EDEDED",
    cardBGColor: "#394867",
    textColor: "#000",
    separatorColor: "#212A3E",
    cardTitleColor: "#fff"
  },
  mode: "light",
  changeMode: () => {},
});

export const useDisplayMode = () => useContext(DisplayModeContext);

type DisplayModeProviderProps = {
  children: React.ReactNode;
};
export const DisplayModeProvider = ({
  children,
}: DisplayModeProviderProps): JSX.Element => {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <DisplayModeContext.Provider
      value={{
        colors: darkMode ? allColors.dark : allColors.light,
        mode: darkMode ? "dark" : "light",
        changeMode: (mode) => {
          setDarkMode(mode == "dark");
        },
      }}
    >
      {children}
    </DisplayModeContext.Provider>
  );
};
