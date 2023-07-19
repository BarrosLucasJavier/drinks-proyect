import styles from './Header.module.css'
import logo from '../../assets/images/logo.png'

const Header = () => {

    return (
        
            <header className={styles.headerContainer}>
                <h1>Buscador de Bebidas</h1>
                <img src={logo} alt="Logo Bebidas"/>
            </header>
        
    );
}

export default Header;
