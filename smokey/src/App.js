import './App.css';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';

import Recipes from './Pages/Recipes';
import Register from './Components/Register';
import Login from './Components/Login';
import RecipeDetails from './Components/RecipeDetails';
import RecipeForm from './Components/inputs/RecipeForm';

function App() {
  return (
    <div className='App'>
      <Router>
        {' '}
        <Routes>
          {' '}
          <Route
            to
            path='/recipes/:id/edit'
            element={<RecipeForm method={'PUT'} />}
          />
          <Route to path='/register' element={<Register />} />
          <Route to path='/login' element={<Login />} />
          <Route to path='/recipes/:id' element={<RecipeDetails />} />
          <Route
            to
            path='/create-recipe'
            element={<RecipeForm method={'POST'} />}
          />
          <Route to path='/' element={<Recipes />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
