
import {BrowserRouter,Routes,Route} from 'react-router-dom'

import LoginPage from './components/loginPage';
import HomePage from './components/homePage';
import ProtectedRoute from './components/ProtectedRoute';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path ='/login' element={<LoginPage/>}/>
      <Route path ='/' element={<HomePage/>}/>
      </Routes>
      {/* <ProtectedRoute path ='/' element= {<HomePage/>}/>  */}
    </BrowserRouter>
  );
}

export default App;
