import styles from './footer.module.css';
import pinterest from '../../assets/images/pinterest.png'
import twitter from '../../assets/images/twitter.png'
import instagram from '../../assets/images/instagram.png'
import facebook from '../../assets/images/facebook.png'

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <small>Drinks App</small>
            <div className={styles.iconContainer}>
                <img onClick={() => {window.open('https://www.pinterest.com/','_blank')}} src={pinterest}/>
                <img onClick={() => window.open('https://www.twitter.com','_blank')} src={twitter}/>
                <img onClick={() => window.open('https://www.instagram.com','_blank')} src={instagram}/>
                <img onClick={() => window.open('https://www.facebook.com','_blank')} src={facebook}/>
            </div>
            <small>&copy; Copyrigth 2023</small>
        </footer>
    );
}

export default Footer;
