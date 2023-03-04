import { useState,useEffect, useContext } from 'react'
import './index.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home.jsx'
import Login from './pages/Login.jsx'
import Register from './pages/Register.jsx'
import Profile from './pages/Profile.jsx'
import UserContextProvider from './contexts/UserContext'
import Nav from './components/Nav'
import User from './components/User'

function App() {
  

  return (
<>
<UserContextProvider>
<BrowserRouter>
<Nav/>
<Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/login' element={<Login/>}/>
  <Route path='/register' element={<Register/>}/>
  <Route path='/profile' element={<Profile/>}>
    <Route path='/profile/:id' element={<Profile/>}/>
  </Route>
</Routes>
</BrowserRouter>
</UserContextProvider>
</>
  )
}

export default App
