import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useAuth } from '../../hooks/useAuth'
import { faSignOut } from '@fortawesome/free-solid-svg-icons';
import styles from './barUser.module.css'

const BarUser = () => {

    const { currentUser, logout } = useAuth()

    if(currentUser){
        return (
            <div className={styles.barContainer}>
                <h3>{currentUser.name}</h3>
                <button onClick={logout}>
                    <FontAwesomeIcon icon={faSignOut} className={styles.barIcon}/>
                    Salir
                </button>
            </div>
        );
    }else{
        return
    }
}

export default BarUser;
