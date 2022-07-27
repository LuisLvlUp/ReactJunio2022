import { createContext } from "react";

const darkTheme = '#040638';
const lightTheme = '#D691EE';
export const initTheme = {
    dark: darkTheme,
    light: lightTheme,
    active: false
}


export const ThemeContext = createContext(initTheme); 