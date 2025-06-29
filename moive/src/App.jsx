import { BrowserRouter, Route,  Routes } from 'react-router-dom';
import './App.css';
import Login from './page/Login/Login';
import Register from './page/Register/Register';
import HomePage from './page/HomePage/HomePage';
import UserProfile from './page/UserProfile/UserProfile';

function App() {
  return (
    <>

    <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/profile/:id' element={<UserProfile/>}/>
        </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
