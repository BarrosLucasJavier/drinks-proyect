import { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { getCategoriesService } from '../services/categories.service';

export const CategoriesContext = createContext();

export const CategoriesProvider = ({ children }) => {

    const [categories, setCategories] = useState([]);

    const getCategories = async () => {
        try {
            const categoriesData = await getCategoriesService();
            setCategories(categoriesData);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        getCategories();
    }, []);

    return (
        <CategoriesContext.Provider value={{ categories }}>
            {children}
        </CategoriesContext.Provider>
    )
}

CategoriesProvider.propTypes = {
    children: PropTypes.node.isRequired,
}