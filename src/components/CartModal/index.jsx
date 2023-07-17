import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './CartModal.module.css'
import useModal from '../../hooks/useModal'
import { useCart } from '../../hooks/useCart';
import { ModalCard } from './components/Card';
import { faXmarkCircle } from '@fortawesome/free-solid-svg-icons';

export default function CartModal (){

    const { isOpen, toogleModal} = useModal();
    const { 
            cart,
            clearCart,
            sendOrder,
            orderTotal
        } = useCart();

    return ( isOpen && (
        <div className={styles.modalBg}>
            <div className={styles.modal}>
                <FontAwesomeIcon icon={faXmarkCircle} className={styles.icon} onClick={toogleModal}/>
                <h2>Mi Carrito</h2>
                <section className={styles.modalBody}>
                    <div className={styles.modalDrinkListContainer}>
                    {cart.cartItems.length === 0 && <h3>No hay productos en el carrito</h3>}
                        {cart.cartItems.map((drink) => (
                            <ModalCard key={drink.idDrink} drink={drink}/>
                        ))}
                    </div>
                    <aside>
                        <div className={styles.modalTotal}>
                            <p>Subtotal: ${orderTotal}</p>
                            <p>Total: ${orderTotal}</p>
                        </div>
                        <div className={styles.btnContainer}>
                            <button className={styles.clear} onClick={clearCart}>Vaciar carrito</button>
                            <button className={styles.confirmOrder} onClick={sendOrder}>Confirmar Compra</button>
                        </div>
                    </aside>
                </section>
            </div>
        </div>)
    )
}

