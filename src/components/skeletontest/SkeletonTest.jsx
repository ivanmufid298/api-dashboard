/* eslint-disable */
import React, { useEffect, useState } from 'react'
import './skeletontest.css'
import axios from 'axios'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import "react-loading-skeleton/dist/skeleton.css";
import { Tag } from 'primereact/tag';
import { Column } from 'primereact/column';
import DataTable from 'react-data-table-component';

const SkeletonTest = () => {

    const [ userList, setuserList ] = useState ([])
    const [ isLoading, setisLoading] = useState (true)
    

    const bgcolor = (status) => {
        switch (status) {
            case 'completed':
                return 'btn mt-4 completed btn-block btn-success';

            case 'delivering':
                return 'btn mt-4 delivering btn-block btn-info';

            case 'cancel':
                return 'btn mt-4 cancel btn-block btn-danger';
           default:
            return null 
        }
    };
    useEffect(() => {
        setTimeout (() => {
            axios.get("http://localhost:3030/user")
            .then(res => setuserList(res.data))
        }, 1000)
    },[] )


  return (
        <div className='skeleton-test'>
            <table className='table table-borderless'>
                <thead className='text-left'>
                    <tr>
                        <th><h5 className='order-title'>Costumer</h5></th>
                        <th><h5 className='order-title'>Address</h5></th>
                        <th><h5 className='order-title'>Menu</h5></th>
                        <th><h5 className='order-title'>Status</h5></th>
                    </tr>
                </thead>
                <tbody className='text-left'>
                {userList.map((user) => {
                            return (
                                <tr style={{borderBottom: '2px solid whitesmoke', height:90}} key={user.id}>
                                    <td className='row-data'><span><img className='photo mr-3' src={user.photo} alt="" /></span>{user.name}</td>
                                    <td className='row-data'>{user.street}<br/><span className='distance'>{user.distance}</span></td>
                                    <td className='row-data'>{user.food} ({user.amount})<br/><span className='prize'>IDR {user.prize*user.amount}.000</span></td>
                                    <td style={{padding: 3}} className={`${bgcolor(user.status)}`}>{user.status}</td>
                                </tr>
                                
                            )
                        })}            
                </tbody>
            </table>
        {/* { 
            userList.map(user => (
                <div className="card card-skeleton">
                    <div className="card-img mt-5">
                    <img className='photo' src={user.photo} alt="" />
                    </div>
                    <h4><strong>{user.name}</strong></h4>
                    <h5>{user.street}</h5>
                    <p>{user.distance}</p>
                    <p>{user.food} ({user.amount})</p>
                    <p>IDR {user.prize*user.amount}.000</p>
                    <p>{user.status}</p>
                </div>
            ))
        } */}
    </div>
  )
}

export default SkeletonTest