import './App.css';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';

import Recipes from './Pages/Recipes';
import Register from './Components/Register';
import Login from './Components/Login';
import RecipeDetails from './Components/RecipeDetails';

function App() {
  return (
    <div className='App'>
      <Router>
        {' '}
        <Routes>
          {' '}
          <Route to path='/register' element={<Register />} />
          <Route to path='/login' element={<Login />} />
          <Route to path='/recipe-details' element={<RecipeDetails />} />
          <Route to path='/' element={<Recipes />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
