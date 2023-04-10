import React from 'react'
import { Icon } from '@iconify/react';
import "./navbar.css"
/* eslint-disable */

const Navbar = () => {
  return (
    <div>
        <nav className="navbar navbar-expand-lg">
            <div className="container nav-items">
            <a className="navbar-brand mr-5" href="#">
            <Icon icon="mdi:alpha-g-circle"/> Goodfood</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">


                <form className="form-inline">
                <input style={{width: 700}} className="form-control search input mr-sm-2" type="search" placeholder="Search everything" aria-label="Search"/>
                </form>
                </ul>
                <ul className='navbar-nav ml-auto' style={{columnGap: 30}}>
                <li className="nav-item dropdown my-2 my-lg-0">
                    <a className="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-expanded="false">
                    Samantha
                    </a>
                    <div className="dropdown-menu">
                    <a className="dropdown-item" href="#">Sign Out</a>
                    <a className="dropdown-item" href="#">Profile</a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" href="#">Settings</a>
                    </div>
                </li>
                <li>
                <Icon icon="mdi:bell" color="white" className='mt-2 bell' />
                <span className="badge badge-danger" style={{borderRadius: '50%', width: 5 , height: 10 , color: 'transparent'}}>0</span>
                </li>
                </ul>
            </div>
            </div>
        </nav>
    </div>
  )
}

export default Navbar