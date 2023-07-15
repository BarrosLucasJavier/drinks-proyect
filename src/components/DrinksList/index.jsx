import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDrinks } from '../../hooks/useDrinks';
import DrinkCard from '../DrinkCard';
import styles from './DrinkList.module.css'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import useModal from '../../hooks/useModal';


const DrinksList = () => {
    const { drinks } = useDrinks();
    const { toogleModal } = useModal()

    if (drinks.length === 0) {
        return (
            <div>
                <h2>No hay resultados</h2>
            </div>
        )
    }

    return (
        <div>
            <FontAwesomeIcon icon={faCartShopping} className={styles.headerIcon} onClick={toogleModal}/>
            {
                drinks.map((drink) => (
                    <DrinkCard key={drink.idDrink} drink={drink}/>
                ))
            }
        </div>
    );
}

export default DrinksList;
