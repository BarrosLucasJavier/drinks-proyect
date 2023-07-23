import { useContext } from "react";
import { ThemesContext } from "../context/ThemeProvider";


export function useTheme () {
    return useContext(ThemesContext);
}