import { palettes } from '../../utils/themes.utils'
import styles from './themes.module.css'
import { useTheme } from '../../hooks/useTheme'

const Themes = () => {

    const { setTheme, modalThemes, handleModalThemes } = useTheme();
    

    const handleTheme = (palette, index) =>{
        document.documentElement.style.setProperty("--mainColor",palette.dark[1])
        document.documentElement.style.setProperty("--secundaryColor",palette.light[1])
        document.documentElement.style.setProperty("--textColor",palette.text)
        setTheme(palettes[index])
        localStorage.setItem("_theme", index)
    }

    if (modalThemes){
        document.body.style.overflow = 'hidden'
        return (
            <section className={styles.container} onClick={handleModalThemes}>
                <div className={styles.themesContainer}>
                    {
                        palettes.map((palette, index) =>(
                            <div className={styles.palettesContainer} key={index}>
                                <img src={palette.img}/>
                                <div className={styles.colorsContainer} onClick={() => handleTheme(palette, index)}>
                                    <div style={{
                                        backgroundColor:palette.dark[1],
                                        color:palette.text
                                        }} className={styles.dark}>{palette.dark[0]}</div>
                                    <div style={{
                                        backgroundColor:palette.light[1],
                                        color:palette.text
                                        }} className={styles.light}>{palette.light[0]}</div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </section>
        );
            }else{
                document.body.style.overflow = 'auto'
            }
}

export default Themes;
