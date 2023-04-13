import React from 'react'
import './sidebar.css'
import { Icon } from '@iconify/react'
import { Link } from 'react-router-dom'
/* eslint-disable */

const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div>
            <p style={{color: "gray"}}>Menu</p>
            <ul className='text-left ml-5   '>
                <li className='sidebar-list'>
                    <Link className='sidebar-link' to="/"><Icon className='sidebar-icon mr-3' icon="material-symbols:home-work-rounded" color="gray" />Home</Link>
                </li>
                <li className='sidebar-list'>
                    <Link className='sidebar-link' to="/order"><Icon className='sidebar-icon mr-3' icon="mdi:trolley" color="gray" />Order</Link>
                </li>
                <li className='sidebar-list'>
                    <Link className='sidebar-link' to="/menu"><Icon className='sidebar-icon mr-3' icon="ph:note-fill" color="gray" />Menu</Link>
                </li>
                <li className='sidebar-list'>
                    <Link className='sidebar-link' to="/review"><Icon className='sidebar-icon mr-3' icon="mdi:message-processing" color="gray" />Review</Link>
                </li>
            </ul>
        </div>
        <div>
        <p style={{color: "gray"}}>Others</p>
        <ul className='text-left ml-5   '>
                <li className='sidebar-list'>
                    <Link className='sidebar-link' to="/settings"><Icon className='sidebar-icon mr-3' icon="mdi:gear" color="gray" />Settings</Link>
                </li>
                <li className='sidebar-list'>
                    <Link className='sidebar-link' to="/payment"><Icon className='sidebar-icon mr-3' icon="material-symbols:account-balance-wallet" color="gray" />Payment</Link>
                </li>
                <li className='sidebar-list'>
                    <Link className='sidebar-link' to="/account"><Icon className='sidebar-icon mr-3' icon="ic:baseline-account-box" color="gray" />Account</Link>
                </li>
                <li className='sidebar-list'>
                    <Link className='sidebar-link' to="/help"><Icon className='sidebar-icon mr-3' icon="material-symbols:help-center" color="gray" />Help</Link>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Sidebar