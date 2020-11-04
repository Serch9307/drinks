import React, {Fragment} from 'react';
import Header from './components/Header';
import Form from './components/Form';
import CategoryProvider from './context/CategoryContext';
import RecipeProvider from './context/RecipeContext';
import RecipesList from './components/RecipesList';
import ModalProvider from './context/ModalContext';

function App() {
  return (
    <CategoryProvider>
      <RecipeProvider>
        <ModalProvider>
            <Header />
            <div className='container mt-5'>
              <div className='row'>
                <Form />
              </div>
              <RecipesList/>
            </div>
          </ModalProvider>
      </RecipeProvider>
    </CategoryProvider>
  );
}

export default App;
