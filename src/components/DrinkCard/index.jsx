import { useDrinks } from '../../hooks/useDrinks';
import PropTypes from 'prop-types';
import { useCart } from '../../hooks/useCart';
import styles from './DrinkCard.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookOpen, faCartShopping } from '@fortawesome/free-solid-svg-icons';


const DrinkCard = ({ drink }) => {

    const { handleModalClick, handleDrinkIdClick } = useDrinks();
    const { addToCart } = useCart();

    const handleAddToCart = (drink) => {
        addToCart(drink)
    }


    return (
        <div className={styles.cardContainer}>
            <div className={styles.cardImg}>
                <img src={drink.strDrinkThumb} alt={`Imagen de ${drink.strDrink}`} />
            </div>
            <div className={styles.infoContainer}>
                <h3>{drink.strDrink}</h3>
                <div className={styles.recipe}>
                    <span>$ {drink.price}</span>
                    <FontAwesomeIcon className={styles.recipeIcon} icon={faBookOpen} onClick={() => {
                        handleModalClick();
                        handleDrinkIdClick(drink.idDrink)
                    }} />
                </div>
                <button
                    className=''
                    onClick={() => handleAddToCart(drink)}
                >
                    <FontAwesomeIcon icon={faCartShopping} />
                    Agregar al Carrito
                </button>
            </div>
        </div>
    );
}

DrinkCard.propTypes = {
    drink: PropTypes.shape({
        strDrinkThumb: PropTypes.string.isRequired,
        strDrink: PropTypes.string.isRequired,
        idDrink: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired
    }).isRequired
}
export default DrinkCard;
