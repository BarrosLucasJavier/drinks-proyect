import styles from './footer.module.css';
import { useTheme } from '../../hooks/useTheme'

const Footer = () => {
    const { theme } = useTheme();
    
    return (
        <footer className={styles.footer}>
            <small>Drinks App</small>
            <div className={styles.iconContainer}>
                <img onClick={() => {window.open('https://www.pinterest.com/','_blank')}} src={`${theme.icons}pinterest.png`}/>
                <img onClick={() => window.open('https://www.twitter.com','_blank')} src={`${theme.icons}twitter.png`}/>
                <img onClick={() => window.open('https://www.instagram.com','_blank')} src={`${theme.icons}instagram.png`}/>
                <img onClick={() => window.open('https://www.facebook.com','_blank')} src={`${theme.icons}facebook.png`}/>
            </div>
            <small>&copy; Copyrigth 2023</small>
        </footer>
    );
}

export default Footer;
