import { faHome, faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from './notFound.module.css'
import { useNavigate } from "react-router-dom";

const NotFound = () => {
    const navigate = useNavigate()

    return (
        <div className={styles.notFoundContainer}>
            <FontAwesomeIcon className={styles.alertIcon} icon={faTriangleExclamation} />
            <h2>404</h2>
            <h3>Not Found</h3>
            <div className={styles.homeContainer} onClick={() => navigate("/")}>
                <FontAwesomeIcon className={styles.homeIcon} icon={faHome} />
                <p>Inicio</p>
            </div>
        </div>
    );
}

export default NotFound;
