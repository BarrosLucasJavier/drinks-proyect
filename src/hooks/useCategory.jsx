import { useContext } from 'react';
import { DrinksContext } from '../context/drinks.context';

export const useDrinks = () =>{
    return useContext(DrinksContext)
}