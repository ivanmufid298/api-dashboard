import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import DetailOrder from '../../components/detailorder/DetailOrder'
import Header from '../../components/header/Header'
import Navbar1 from '../../components/navbar1/Navbar1'
import Products from '../../components/products/Products'
import { addToCart, getProducts } from '../../components/service/products'
import Sidebar from '../../components/sidebar/Sidebar'
import './menu.css'
/* eslint-disable */

const Menu = () => {
  const dispatch = useDispatch()
  const {products,cart} = useSelector(state=> state.products)
  const [isOpen,setIsOpen]= useState(false)
  const handleOpen = () => setIsOpen(!isOpen)
  const addtoCart = (id) => dispatch(addToCart(id)) 
  useEffect(() => {
    dispatch(getProducts())
  },[])

  return (
    <div>
        <Navbar1 cartCount={cart} handleOpen={handleOpen} />
        <div style={{marginTop: 124}}>
        <Header />
        </div>
        <div className='container menu'>
        <div className="row text-center">
            <div className="col-2 mt-5"><Sidebar /></div>
            <div className="col-7 mt-5"><Products products={products} addtoCart={addtoCart}/>
            </div>
            <div className="col-3" style={{backgroundColor: 'whitesmoke'}}>
            <DetailOrder />
            </div>
        </div>
    </div>

    </div>
  )
}

export default Menu