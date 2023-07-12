import { useDrinks } from '../../hooks/useDrinks';
import PropTypes from 'prop-types';
import { useCart } from '../../hooks/useCart'


const DrinkCard = ({ drink }) => {

    const { handleModalClick, handleDrinkIdClick} = useDrinks();
    const { addToCart } = useCart();

    const handleAddToCart = (drink) => {
        addToCart(drink)
    }


    return (
        <div>
            <img src={drink.strDrinkThumb} alt={`Imagen de ${drink.strDrink}`}/>
            <div>
                <h3>{drink.strDrink}</h3>
                <span>{drink.price}</span>
                <div>
                    <button onClick={()=>{
                        handleModalClick();
                        handleDrinkIdClick(drink.idDrink)
                        }}>Ver receta</button>
                    <button
                        className=''
                        onClick={() => handleAddToCart(drink)}
                    >
                        Agregar al Carrito
                    </button>
                </div>
            </div>
        </div>
    );
}

DrinkCard.propTypes ={
    drink: PropTypes.shape({
        strDrinkThumb: PropTypes.string.isRequired,
        strDrink: PropTypes.string.isRequired,
        idDrink: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired
    }).isRequired
}
export default DrinkCard;
