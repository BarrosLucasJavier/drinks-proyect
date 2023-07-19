import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDrinks } from '../../hooks/useDrinks';
import DrinkCard from '../DrinkCard';
import styles from './DrinkList.module.css'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import useModal from '../../hooks/useModal';
import backDrink from '../../assets/images/cocteles.png'


const DrinksList = () => {
    const { drinks } = useDrinks();
    const { toogleModal } = useModal()

    if (drinks.length === 0) {
        return (
            <>
                <div className={styles.listContainerAlter}>
                    <img src={backDrink} alt='Imagen de fondo de bebidas'/>
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
