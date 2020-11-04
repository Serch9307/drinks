import React, {useContext} from 'react';
import {RecipeContext} from '../context/RecipeContext';
import Recipe from './Recipe';

const RecipesList = () => {

    //extract recipies
    const { recipe } = useContext(RecipeContext);

    //console.log('from RecipesList');
    //console.log(recipe);

    return (
        <div className='row mt-5'>
            {recipe.map(myRecipe => (                
                <Recipe 
                    key={myRecipe.idDrink}
                    myRecipe={myRecipe} 
                />
            ))}
        </div>
    );
}
 
export default RecipesList;