import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Ownerhistory from './ownercomponents/Ownerhistory';
import Ownerpayment from './ownercomponents/Ownerpayment';
import Ownerstatus from './ownercomponents/Ownerstatus';
import Ownnersinglecar from './ownercomponents/Ownersinglecar';
import Ownerhome from './ownercomponents/Ownerhome';
import Head from './ownercomponents/Navbar';

const Ownerapp = () => {
  return (
    <BrowserRouter>
    <Head />

    <Routes>
        <Route path='/Ownerhome' element={<Ownerhome/>}/>
        
        <Route path='/Ownerhistory' element={<Ownerhistory/>}/>
        <Route path='/Ownerpayment' element={<Ownerpayment/>}/>
        <Route path='/Ownersinglecar' element={<Ownnersinglecar/>}/>
        <Route path='/Ownerstatus' element={<Ownerstatus/>}/>
        </Routes></BrowserRouter>
  )
}

export default Ownerapp;
