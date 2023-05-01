import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Login from '../forms/Login'
import SignUp from '../forms/SignUp'
const FormRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
      </Routes>
    </div>
  )
}

export default FormRoutes
