import styles from './Header.module.css'
import { useTheme } from '../../hooks/useTheme'

const Header = () => {

    const { theme } = useTheme()

    return (

        <header className={styles.headerContainer}>
            <h1>Buscador de Bebidas</h1>
            <img src={theme.img} alt="Logo Bebidas" />
        </header>

    );
}

export default Header;
