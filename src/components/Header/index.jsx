import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from './Header.module.css'
import logo from '../../assets/images/logo.png'
import useModal from "../../hooks/useModal";

const Header = () => {
    const { toogleModal } = useModal()
    return (
        <header className={styles.headerContainer}>
            <h1>Buscador de Bebidas</h1>
            <img src={logo} alt="Logo Bebidas"/>
            <FontAwesomeIcon icon={faCartShopping} className={styles.headerIcon} onClick={toogleModal}/>
        </header>
    );
}

export default Header;
