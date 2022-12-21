import React from 'react'
import { Routes, Route, Outlet } from 'react-router-dom'
import Login from './components/Login'
import Register from './components/Register'
import Home from './Home'

const Router = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Outlet/>}>
          <Route path='/home' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
          
        </Route> 
            
      </Routes>  
    </>
  )
}

export default Router