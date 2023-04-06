import React from 'react'
import { Icon } from '@iconify/react';
import "./navbar.css"
/* eslint-disable */

const Navbar = () => {
  return (
    <div>
        <nav class="navbar navbar-expand-lg">
            <div className="container nav-items">
            <a class="navbar-brand mr-5" href="#">
            <Icon icon="mdi:alpha-g-circle"/> Goodfood</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">


                <form class="form-inline">
                <input style={{width: 700}} class="form-control search mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                <Icon icon="material-symbols:search-rounded" />
                </form>
                </ul>
                <ul className='navbar-nav ml-auto' style={{columnGap: 30}}>
                <li class="nav-item dropdown my-2 my-lg-0">
                    <a class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-expanded="false">
                    Samantha
                    </a>
                    <div class="dropdown-menu">
                    <a class="dropdown-item" href="#">Sign Out</a>
                    <a class="dropdown-item" href="#">Profile</a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item" href="#">Settings</a>
                    </div>
                </li>
                <li>
                <Icon icon="mdi:bell" color="white" className='mt-2' />
                </li>
                </ul>
            </div>
            </div>
        </nav>
    </div>
  )
}

export default Navbar