import React from 'react'
import "./header.css"
import { Icon } from '@iconify/react'

const Header = () => {
    const image = require ('../../img/food.png')

  return (
    <div className="container header  mt-5">
            <div className='row'>
        <div className="col-2">
            <img className='logo' src={image} alt="" />
        </div>
        <div className="col-4">
            <h4 style={{fontWeight: 'bold'}}>Healthy Salad</h4>
            <div className="row">
            <div className="col-md-4">
            <Icon icon="material-symbols:home" color="gray" />
                <small className="ml-2 header-items">Main Street no.12</small>
            </div>
            <div className="col-md-8">
            <Icon icon="solar:verified-check-bold" color="#14a38b" />
                <small className="ml-2 header-items">Verified Account</small>
            </div>
            </div>
        </div>
        <div className="col-2 row">
        <Icon className='trolley mt-2' icon="mdi:trolley" color="white" />
            <h5 className='ml-3'>
                <span>
                <small className='header-items'>Food Delivered</small>
                </span>
            <span>
                <p className='text-left mt-2'>
                    <strong>26.450</strong>
                </p>
            </span>
            </h5> 
        
        </div>
        <div className="col-2 row">
        <Icon className='star mt-2' icon="material-symbols:star" color="white" />
            <h5 className='ml-3'>
                <span>
                <small className='header-items'>Satisfication Rating</small>
                </span>
            <span>
                <p className='text-left mt-2'>
                    <strong>95%</strong>
                </p>
            </span>
            </h5> 
        
        </div>
        <div className="col-2 row">
        <Icon className='wallet mt-2' icon="mdi:wallet-bifold" color="white" />
            <h5 className='ml-3'>
                <span>
                <small className='header-items'>Your Balance</small>
                </span>
            <span>
                <p className='text-left mt-2'>
                    <strong>IDR 2.560.800</strong>
                </p>
            </span>
            </h5> 
        
        </div>

    </div>
    </div>
  )
}

export default Header