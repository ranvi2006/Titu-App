
import './App.css';

import {BrowserRouter, Routes,Route} from 'react-router-dom';
import Login from './pages/Home/Login/Login';
import Signup from './pages/Home/Signup/Signup';
import Home from './pages/Home/Home';
function App() {
  return (
   <>
   <BrowserRouter>
   <Routes>

    
    <Route path="/home" element={<Home/>}/>
    <Route path="/" element={<Login/>}/>
    <Route path="/signup" element={<Signup/>}/>
   </Routes>
   </BrowserRouter>
   </>
  );
}

export default App;
