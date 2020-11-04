import React, {useContext, useState} from 'react';
import { ModalContext } from '../context/ModalContext';

import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';

function getModalStyle() {
    const top = 50 ;
    const left = 50;
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles(theme => ({
    paper: {
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
}));

const Recipe = (myRecipe) => {
    // Customize material-ui 
    const [modalStyle] = useState(getModalStyle);
    const [open, setOpen] = useState(false);

    const classes = useStyles();

    const handleOpen = () => {
        setOpen(true);
    }
    const handleClose = () => {
        setOpen(false);
    }

    // extract model context values
    const { recipe, setIdRecipe, setRecipe } = useContext(ModalContext);
    //console.log(recipe);

    const {idDrink, strDrink, strDrinkThumb } = myRecipe.myRecipe;

    //function to show and format the ingredients and quantyties
    const showIngredients = (recipe) => {
        let ingredients = [];
        for (let i = 1; i < 16; i++){
            if (recipe[`strIngredient${i}`]) {
                ingredients.push(
                    <li>{ recipe[`strIngredient${i}`] } { recipe[`strMeasure${i}`] }</li>
                )
            }
        }
        return ingredients;
    }

    return ( 
        <div className='col-md-4 mb-3'>
            <div className='card'>
                <h2 className='card-header'>{strDrink}</h2>
                <img className='card-img-top' src={strDrinkThumb} alt={`Imagen de ${strDrink}`} />
                <div className='card-body'>
                    <button
                        type='button'
                        className='btn btn-block btn-primary'
                        onClick={() => {
                            setIdRecipe(idDrink)
                            handleOpen();
                        }}
                    >
                        Recipe Details
                    </button>

                    <Modal
                        open={open}
                        onClose={() => {
                            setIdRecipe(null);
                            setRecipe({});
                            handleClose();                            
                        }}
                    >
                        <div style={modalStyle} className={classes.paper}>
                            <h2>{recipe.strDrink}</h2>
                            <h3 className='mt-4'>Instructions</h3>
                            <p>
                                {recipe.strInstructions}
                            </p>
                            <img className='img-fluid my-4' src={recipe.strDrinkThumb} alt='drinks for our recipe' />

                            <h3>Ingredients and Quantities</h3>
                            <ul>
                                {showIngredients(recipe)}
                            </ul>

                        </div>
                    </Modal>
                </div>
            </div>
        </div>
     );
}

export default Recipe;