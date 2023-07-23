import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useAuth } from '../../hooks/useAuth'
import { faPalette, faSignOut } from '@fortawesome/free-solid-svg-icons';
import styles from './barUser.module.css'
import { useTheme } from '../../hooks/useTheme';


const BarUser = () => {

    const { currentUser, logout } = useAuth()
    const { handleModalThemes } = useTheme()

    if(currentUser){
        return (
            <div className={styles.barContainer}>
                <h3>{currentUser.name}</h3>
                <div>
                <button onClick={handleModalThemes}>
                    <FontAwesomeIcon icon={faPalette} className={styles.barIcon}/>
                    Temas
                </button>
                <button onClick={ logout }>
                    <FontAwesomeIcon icon={faSignOut} className={styles.barIcon}/>
                    Salir
                </button>
                </div>
            </div>
        );
    }else{
        return
    }
}

export default BarUser;
