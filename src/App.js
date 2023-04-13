import React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './container/home/Home'
import Order from './container/order/Order'
import Menu from './container/menu/Menu'

const App = () => {
  return (
    <div className='App'>
    <Router>
        <Routes>
          <Route exact path='/' element={<Home/>} /> 
          <Route path='/order' element={<Order />} /> 
          <Route path='/menu' element={<Menu />} /> 
        </Routes>
     </Router>
    </div>
  )
}

export default App