import React from 'react'
import { Routes, Route} from 'react-router-dom'
import Login from './components/Login'
import NavbarHome from './components/Navbar'
import Register from './components/Register'
import Index from './index'

const Router = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Index/>}>
          
        </Route> 
        <Route element={<NavbarHome/>}>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>

        </Route>
      </Routes>  
    </>
  )
}

export default Router