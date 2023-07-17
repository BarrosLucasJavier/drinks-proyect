import PropTypes from 'prop-types';
import styles from './CardModal.module.css';
import { useCart } from '../../../../hooks/useCart';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';



export const ModalCard = ({drink}) =>{

    const { removeOneCart, addToCart, removeAllFromCart } = useCart()

    return(
        <article className={styles.card}>
            <div className={styles.cardHeader}>
                <img src={drink.strDrinkThumb} alt=''/>
            </div>
            <div className={styles.cardBody}>
                <span>{drink.strDrink}</span>
                <span>$ {drink.price}</span>
                <div className={styles.counter}>
                    <button onClick={() => removeOneCart(drink.idDrink)}>-</button>
                    <span>{drink.quantity}</span>
                    <button onClick={()=>addToCart(drink)}>+</button>
                </div>
            </div>
            <FontAwesomeIcon className={styles.cardIcon} icon={faTrash} onClick={() => removeAllFromCart(drink.idDrink)}/>
        </article>
    )
}

ModalCard.propTypes = {
    drink: PropTypes.object.isRequired
}