import React from 'react'
import './App.css'
import Login from './pages/Login'
import { Route, Routes } from 'react-router-dom'

import Home from './pages/Home'
import Admin from './pages/Admin'
import Register from './pages/Register'

import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div>
     <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/admin' element={<Admin/>} />
      <Route path='/register' element={<Register/>} />
     </Routes>
     <Toaster/>
    </div>
  )
}

export default App