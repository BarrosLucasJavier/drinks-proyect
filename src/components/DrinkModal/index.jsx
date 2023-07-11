import { useDrinks } from '../../hooks/useDrinks'

const DrinkModal = () => {

    const { handleModalClick, recipe, loading } = useDrinks();

    const showIngredients = () =>{
        let ingredients = [];

        for (let index = 1; index < 16; index++) {
            if (recipe[`strIngredient${index}`]) {
                ingredients.push(
                    <li key={index}>
                        {recipe[`strIngredient${index}`]} {recipe[`strMeasure${index}`]}
                    </li>
                )
            }
            
        }
        return ingredients;
    }

    return (
        !loading && (
            <div onClick={handleModalClick}>
                <div>
                    <div>
                        <img src={recipe.strDrinkThumb} alt={`Imagen receta ${recipe.strDrink}`}/>
                        <div>{recipe.strDrink}</div>
                    </div>
                    <div>
                        <h3>Instrucciones</h3>
                        <p>{recipe.strInstructions}</p>
                        <h3>Ingredientes y Cantidades</h3>
                        <ul>
                            {showIngredients()}
                        </ul>
                    </div>
                </div>
            </div>
        )
    );
}

export default DrinkModal;
