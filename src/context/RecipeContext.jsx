import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios'

// Create the Context
export const RecipeContext = createContext();

// Provide is where find the functions and state
const RecipeProvider = (props) => {
    
    const [recipe, setRecipe] = useState([]);
    const [searchRecipe, setSearchRecipe] = useState({
        name: '',
        category: ''
    });
    const [consult, setConsult] = useState(false);

    const { name, category } = searchRecipe;
    useEffect(() => {
        const getRecipes = async () => {
            const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${category}&i=${name}`;
            const result = await axios(url);
            //console.log(url)
            //console.log(result.data.drinks);
            setRecipe(result.data.drinks);
        }
        if (consult) {
            getRecipes();    
        }
        

    },[searchRecipe,consult])

    return (
        <RecipeContext.Provider
            value={{
                recipe,
                setSearchRecipe,
                setConsult
            }}
        >
            {props.children}
        </RecipeContext.Provider>
    )
}

export default RecipeProvider;
