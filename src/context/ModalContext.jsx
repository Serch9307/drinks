import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';

// Create the Context
export const ModalContext = createContext();

// Provide is where find the functions and state
const ModalProvider = (props) => {

    //state del provider
    const [idRecipe, setIdRecipe] = useState(null);
    const [recipe, setRecipe] = useState({});

    // when we have a idRecipe, we call the API
    useEffect(() => {
        const getRecipe = async () => {
            if (!idRecipe) return;

            const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idRecipe}`;
            const result = await axios.get(url);
            setRecipe(result.data.drinks[0]);
        }
        getRecipe();
    },[idRecipe])

    return (
        <ModalContext.Provider
            value={{
                recipe,
                setIdRecipe,
                setRecipe
            }}
        >
            {props.children}
      </ModalContext.Provider>
    );
}

export default ModalProvider;