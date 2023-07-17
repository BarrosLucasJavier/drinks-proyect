import { useDrinks } from '../../hooks/useDrinks'
import styles from './DrinkModal.module.css'

const DrinkModal = () => {

    const { handleModalClick, recipe, modal } = useDrinks();

    const showIngredients = () =>{
        let ingredients = [];

        for (let index = 1; index < 16; index++) {
            if (recipe[`strIngredient${index}`]) {
                ingredients.push(
                    <li key={index}>
                        - {recipe[`strIngredient${index}`]}: {recipe[`strMeasure${index}`]}
                    </li>
                )
            }
            
        }
        return ingredients;
    }
    if (modal) {
        return (
            <div className={styles.modalContainer} onClick={handleModalClick}>
                <div className={styles.recipeContainer}>
                    <div className={styles.recipeHeader}>
                        <img src={recipe.strDrinkThumb} alt={`Imagen receta ${recipe.strDrink}`}/>
                    </div>
                    <div className={styles.recipeBody}>
                        <h2>{recipe.strDrink}</h2>
                        <h3>Instrucciones:</h3>
                        <p>{recipe.strInstructions}</p>
                        <h3>Ingredientes y Cantidades:</h3>
                        <ul>
                            {showIngredients()}
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
    
}

export default DrinkModal;
