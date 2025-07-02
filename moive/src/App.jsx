import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './Feature/Login';
import Register from './Feature/Register';
import HomePage from './page/Home/HomePage';
import Profile from './page/Profile/Profile';
import ForgotPassword from './Feature/ForgotPassword';

function App() {
    return (
      
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/profile/:id" element={<Profile/>}/>
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/forgot-password" element={<ForgotPassword />} />

                </Routes>
            </BrowserRouter>
       
    );
}

export default App;
