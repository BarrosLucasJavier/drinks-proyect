import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './CartModal.module.css'
import { faTrash, faXmarkCircle } from '@fortawesome/free-solid-svg-icons'
import useModal from '../../hooks/useModal'
import { useCart } from '../../hooks/useCart';

export default function CartModal (){

    const { isOpen, toogleModal} = useModal();
    const { 
            cart,
            addToCart,
            removeOneFromCart,
            removeAllFromCart,
            clearCart} = useCart();

    return ( isOpen && (
        <div className={styles.modalBg} onClick={toogleModal}>
            <div className={styles.modal}>
                <FontAwesomeIcon icon={faXmarkCircle} className={styles.icon} onClick={toogleModal}/>
                <h2>Mi Carrito</h2>
                <section className={styles.modalBody}>
                    <div className={styles.modalDrinkListContainer}>
                        {cart.cartItems.map((drink) => (
                            <article key={drink.idDrink} className={styles.card}>
                            <img src={drink.strDrinkThumb} alt=''/>
                            <span>{drink.strDrink}</span>
                            <span>{drink.price}</span>
                            <div className={styles.counter}>
                                <button onClick={removeOneFromCart}>-</button>
                                <span>{drink.quantity}</span>
                                <button onClick={()=>addToCart(drink)}>+</button>
                            </div>
                            <FontAwesomeIcon icon={faTrash} onClick={removeAllFromCart}/>
                        </article>))}
                        
                    </div>
                    <aside>
                        <p>Subtotal: xxxxxx</p>
                        <p>Total: xxxxxx</p>
                        <div className={styles.btnContainer}>
                            <button className={styles.clear} onClick={clearCart}>Vaciar carrito</button>
                            <button className={styles.confirmOrder}>Confirmar Compra</button>
                        </div>
                    </aside>
                </section>
            </div>
        </div>)
    )
}

