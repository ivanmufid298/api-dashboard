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
                <li className='sidebar-list'>
                    <a className='sidebar-items' href="">
                        <div className="row">
                            <div className="col text-right"><Icon className='sidebar-icon' icon="material-symbols:home-work-rounded" color="gray" /></div>
                            <div className="col text-left">Home</div>
                        </div>
                    </a>
                </li>
                <li className='sidebar-list'>
                    <a className='sidebar-items' href="">
                        <div className="row">
                            <div className="col text-right"><Icon className='sidebar-icon' icon="mdi:trolley" color="gray" /></div>
                            <div className="col text-left">Order</div>
                        </div>
                    </a>
                </li>
                <li className='sidebar-list'>
                    <a className='sidebar-items' href="">
                        <div className="row">
                            <div className="col text-right"><Icon className='sidebar-icon' icon="ph:note-fill" color="gray" /></div>
                            <div className="col text-left">Menu</div>
                        </div>
                    </a>
                </li>
                <li className='sidebar-list'>
                    <a className='sidebar-items' href="">
                        <div className="row">
                            <div className="col text-right"><Icon className='sidebar-icon' icon="mdi:message-processing" color="gray" /></div>
                            <div className="col text-left">Review</div>
                        </div>
                    </a>
                </li>
            </ul>
        </div>
        <div>
        <p style={{color: "gray"}}>Others</p>
        <ul>
                <li className='sidebar-list'>
                    <a className='sidebar-items' href="">
                        <div className="row">
                            <div className="col text-right"><Icon className='sidebar-icon' icon="mdi:gear" color="gray" /></div>
                            <div className="col text-left">Settings</div>
                        </div>
                    </a>
                </li>
                <li className='sidebar-list'>
                    <a className='sidebar-items' href="">
                        <div className="row">
                            <div className="col text-right"><Icon className='sidebar-icon' icon="material-symbols:account-balance-wallet" color="gray" /></div>
                            <div className="col text-left">Payment</div>
                        </div>
                    </a>
                </li>
                <li className='sidebar-list'>
                    <a className='sidebar-items' href="">
                        <div className="row">
                            <div className="col text-right"><Icon className='sidebar-icon' icon="ic:baseline-account-box" color="gray" /></div>
                            <div className="col text-left">Account</div>
                        </div>
                    </a>
                </li>
                <li className='sidebar-list'>
                    <a className='sidebar-items' href="">
                        <div className="row">
                            <div className="col text-right"><Icon className='sidebar-icon' icon="material-symbols:help-center" color="gray" /></div>
                            <div className="col text-left">Help</div>
                        </div>
                    </a>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Sidebar