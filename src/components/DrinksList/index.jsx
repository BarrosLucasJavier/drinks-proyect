import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDrinks } from '../../hooks/useDrinks';
import DrinkCard from '../DrinkCard';
import styles from './DrinkList.module.css'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import useModal from '../../hooks/useModal';
import { useTheme } from '../../hooks/useTheme'


const DrinksList = () => {
    const { drinks } = useDrinks();
    const { toogleModal } = useModal();
    const { theme } = useTheme();

    if (drinks.length === 0) {
        return (
            <>
                <div className={styles.listContainerAlter}>
                    <img src={theme.coctel} alt='Imagen de fondo de bebidas'/>
                    <h2>No hay resultados</h2>
                </div>
                <FontAwesomeIcon icon={faCartShopping} className={styles.headerIcon} onClick={toogleModal}/>
            </>
        )
    }

    return (
        <section className={styles.listContainer}>
            <FontAwesomeIcon icon={faCartShopping} className={styles.headerIcon} onClick={toogleModal}/>
            {
                drinks.map((drink) => (
                    <DrinkCard key={drink.idDrink} drink={drink}/>
                ))
            }
        </section>
    );
}

export default DrinksList;
