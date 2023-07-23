import { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { palettes } from '../utils/themes.utils'


export const ThemesContext = createContext();

export const ThemesProvider = ({ children }) => {

    const [theme, setTheme] = useState(palettes[5]);
    const [modalThemes, setModalThemes] = useState(false);
    const storedTheme = localStorage.getItem("_theme");

    if (theme.index === 5){
        document.documentElement.style.setProperty("--mainColor", palettes[5].dark[1])
        document.documentElement.style.setProperty("--secundaryColor", palettes[5].light[1])
        document.documentElement.style.setProperty("--textColor", palettes[5].text)
    }



    useEffect(() => {
        if (storedTheme) {
            setTheme(palettes[storedTheme])
            document.documentElement.style.setProperty("--mainColor", palettes[storedTheme].dark[1])
            document.documentElement.style.setProperty("--secundaryColor", palettes[storedTheme].light[1])
            document.documentElement.style.setProperty("--textColor", palettes[storedTheme].text)
            console.log("si entro aca es ok guardado tema", theme);
        }
    }, []);

    const handleModalThemes = () => {
        setModalThemes(!modalThemes)
    }

    const themesValues = {
        theme,
        setTheme,
        modalThemes,
        setModalThemes,
        handleModalThemes
    }

    return (
        <ThemesContext.Provider value={themesValues}>
            {children}
        </ThemesContext.Provider>
    )
}

ThemesProvider.propTypes = {
    children: PropTypes.node.isRequired,
}