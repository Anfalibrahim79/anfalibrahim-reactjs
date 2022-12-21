import React from 'react'
import { Routes, Route, Outlet } from 'react-router-dom'
import Login from './components/Login'
import Register from './components/Register'
import Index from './index'

const Router = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Index/>}>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
          
        </Route> 
            
      </Routes>  
    </>
  )
}

export default Router