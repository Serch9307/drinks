import React, { useContext, useState } from 'react';
import { CategoryContext } from '../context/CategoryContext';
import { RecipeContext } from '../context/RecipeContext';

const Form = () => {

    const { categories } = useContext(CategoryContext);
    const { setSearchRecipe, setConsult } = useContext(RecipeContext);
    const [search, setSearch] = useState({
        name: '',
        category: ''
    });

    //Function to read the values
    const handleOnChange = e => {
        setSearch({
            ...search,
            [e.target.name] : e.target.value
        })
    };

    const [error, setError] = useState(false);
    

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (search.name === '' ||
            search.category === ''  ) {
            setError(true);
            return null;
        }
        setError(false);
        setSearchRecipe(search);
        setConsult(true);        
    }

    return ( 
        <form
            className='col-12'
            onSubmit={handleSubmit}
        >
            {error ? <span>Select one options</span>: null}
            <fieldset className='text-center'>
                <legend>Search drinks by category or ingredient</legend>
            </fieldset>
            <div className="row mt-4">
                <div className="col-md-4">
                    <input
                        name='name'
                        className='form-control'
                        type='txt'
                        placeholder='Search by ingredient'
                         onChange={handleOnChange}
                        />
                </div>
                <div className='col-md-4'>
                    <select
                        className='form-control'
                        name='category'
                        onChange={handleOnChange}
                    >
                        <option value=''>-- Select Category --</option>
                        {categories.map(category => (
                            <option key={category.strCategory}
                                value={category.strCategory}>
                                {category.strCategory}
                            </option>
                        ))}
                    </select>
                </div>
                <div className='col-md-4'>
                    <input
                        type='submit'
                        className='btn btn-block btn-primary'
                        value='Search Recipe'                        
                        />
                </div>

            </div>
        </form>
     );
}
 
export default Form;