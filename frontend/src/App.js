
import './App.css';

import {BrowserRouter, Routes,Route} from 'react-router-dom';
import Login from './pages/Home/Login/Login';
import Signup from './pages/Home/Signup/Signup';

function App() {
  return (
   <>
   <BrowserRouter>
   <Routes>

    this is Home pages
    
    <Route path="/login" element={<Login/>}/>
    <Route path="/signup" element={<Signup/>}/>
   </Routes>
   </BrowserRouter>
   </>
  );
}

export default App;
