import { useContext } from 'react';
import { CategoriesContext } from '../context/category.contex';

export const useCategories = () =>{
    return useContext(CategoriesContext)
}