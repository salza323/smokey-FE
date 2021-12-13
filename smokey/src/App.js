import './App.css';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';

import Recipes from './Pages/Recipes';

function App() {
  return (
    <div className='App'>
      <Router>
        {' '}
        <Routes>
          {' '}
          <Route to path='/' element={<Recipes />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
