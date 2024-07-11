import React, { createContext, useContext, ReactNode } from "react";
import { IconProps } from "./types";

const ThemeContext = createContext<IconProps>({});

export const useTheme = () => useContext(ThemeContext);

interface ThemeProviderProps {
  theme: IconProps;
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  theme,
  children,
}) => {
  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};
