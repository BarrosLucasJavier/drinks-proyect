import { useDrinks } from '../../hooks/useDrinks';
import DrinkCard from '../DrinkCard';


const DrinksList = () => {
    const { drinks } = useDrinks();

    if (drinks.length === 0) {
        return (
            <div>
                <h2>No hay resultados</h2>
            </div>
        )
    }

    return (
        <div>
            {
                drinks.map((drink) => (
                    <DrinkCard key={drink.idDrink} drink={drink}/>
                ))
            }
        </div>
    );
}

export default DrinksList;
