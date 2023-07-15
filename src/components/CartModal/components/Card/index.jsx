import PropTypes from 'prop-types';
import styles from './CardModal.module.css';
import { useCart } from '../../../../hooks/useCart';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';



export const ModalCard = ({drink}) =>{

    const { removeOneCart, addToCart, removeAllFromCart } = useCart()

    return(
        <article className={styles.card}>
            <img src={drink.strDrinkThumb} alt=''/>
            <span>{drink.strDrink}</span>
            <span>{drink.price}</span>
            <div className={styles.counter}>
                <button onClick={() => removeOneCart(drink.idDrink)}>-</button>
                <span>{drink.quantity}</span>
                <button onClick={()=>addToCart(drink)}>+</button>
            </div>
            <FontAwesomeIcon icon={faTrash} onClick={() => removeAllFromCart(drink.idDrink)}/>
        </article>
    )
}

ModalCard.propTypes = {
    drink: PropTypes.object.isRequired
}