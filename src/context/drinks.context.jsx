import { useState, useEffect, createContext} from 'react';
import { getRecipeService, filterDrinksService } from '../services/drink.service';
import PropTypes from 'prop-types';


export const DrinksContext = createContext();

export const DrinksProvider = ({ children }) =>{
    const [drinks, setDrinks] = useState([]);
    const [modal, setModal] = useState(false);
    const [drinkId, setDrinkId] = useState(null);
    const [recipe, setRecipe] = useState({});
    const [loading, setLoading] = useState(false);

    const handleModalClick = () =>{
        setModal(!modal);
    }

    const handleDrinkIdClick = (id) =>{
        setDrinkId(id);
    }

    const getRecipe = async () =>{
        if (!drinkId) return;

        try {
            setLoading(true);
            const recipeData = await getRecipeService(drinkId);
            setRecipe(recipeData)
        } catch (error) {
            console.error(error);
        }finally{
            setLoading(false)
        }
    }

    const getDrink = async (data) =>{
        try {
            setLoading(true);
            const drinksData = await filterDrinksService(data.name, data.category);
            const drinksWithPrice = drinksData.map((drink)=>{
                return {
                    ...drink,
                    price: Math.floor(Math.random() * 101),
                }
            })
            setDrinks(drinksWithPrice)
        } catch (error) {
            console.error(error);
        }finally{
            setLoading(false)
        }
    }

    useEffect(() => {
        getRecipe();    
    }, [drinkId]);

    const drinksValues = {
        drinks,
        modal,
        recipe,
        loading,
        handleModalClick,
        handleDrinkIdClick,
        getDrink
    }
    return (
        <DrinksContext.Provider value={drinksValues}>
            {children}
        </DrinksContext.Provider>
    )
}

DrinksProvider.propTypes = {
    children: PropTypes.node.isRequired
}

