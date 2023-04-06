import React from 'react'
import './sidebar.css'
import { Icon } from '@iconify/react'
/* eslint-disable */

const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div>
            <p style={{color: "gray"}}>Menu</p>
            <ul>
                <li className='sidebar-list'><a className='sidebar-items' href="">
                <Icon className='mr-3 sidebar-icon' icon="material-symbols:home-work-rounded" color="gray" />Home</a></li>
                <li className='sidebar-list'><a className='sidebar-items' href="">
                <Icon className='mr-3 sidebar-icon' icon="mdi:trolley" color="gray" />Order</a></li>
                <li className='sidebar-list'><a className='sidebar-items' href="">
                <Icon className='mr-3 sidebar-icon' icon="ph:note-fill" color="gray" />Menu</a></li>
                <li className='sidebar-list'><a className='sidebar-items' href="">
                <Icon className='mr-3 sidebar-icon' icon="mdi:message-processing" color="gray" />Review</a></li>
            </ul>
        </div>
        <div>
            <p style={{color: "gray"}}>Others</p>
            <ul>
                <li className='sidebar-list'><a className='sidebar-items' href="">
                <Icon className='mr-3 sidebar-icon' icon="mdi:gear" color="gray" />Settings</a></li>
                <li className='sidebar-list'><a className='sidebar-items' href="">
                <Icon className='mr-3 sidebar-icon' icon="material-symbols:account-balance-wallet" color="gray" />Payment</a></li>
                <li className='sidebar-list'><a className='sidebar-items' href="">
                <Icon className='mr-3 sidebar-icon' icon="ic:baseline-account-box" color="gray" />Account</a></li>
                <li className='sidebar-list'><a className='sidebar-items' href="">
                <Icon className='mr-3 sidebar-icon' icon="material-symbols:help-center" color="gray" />Help</a></li>
            </ul>
        </div>
    </div>
  )
}

export default Sidebar