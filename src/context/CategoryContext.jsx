import React, {createContext, useState, useEffect} from 'react';  
import Axios from 'axios';
// Create the Context
export const CategoryContext = createContext();

// Provide is where find the functions and state
const CategoryProvider = (props) => {

    //create the state of Context
    const [categories, setCategories] = useState([]);

    // ejecutar el llamado de api
    useEffect(() => {
        const callCategoryApi = async () => {
            const url = `https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list`;
            const result = await Axios(url);
            setCategories(result.data.drinks);
        };
        callCategoryApi();
    },[]);

    return (
        <CategoryContext.Provider
            value={{
                categories
            }}
        >
            {props.children}
        </CategoryContext.Provider>
    )
}
export default CategoryProvider;