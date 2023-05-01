import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Userhome from './usercomponents/Userhome';
import Userstatus from './usercomponents/Userstatus'; 
import Userhistory from './usercomponents/Userhistory';


import Car1 from './usercomponents/car1';
import Car2 from './usercomponents/car2';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Userhome/>}/>
      
      <Route path='/Userhistory' element={<Userhistory/>}/>
      
      <Route path='/Userstatus' element={<Userstatus/>}/>
      <Route path='/car1' element={<Car1/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
