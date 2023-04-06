import React from 'react'
import Sidebar from '../sidebar/Sidebar'
import Table from '../table/Table'
import './content.css'

const Content = () => {
  return (
    <div className='container content'>
        <div className="row text-center">
            <div className="col-2"><Sidebar /></div>
            <div className="col-7"><Table /></div>
            <div className="col-3" style={{backgroundColor: 'whitesmoke'}}></div>
        </div>
    </div>
  )
}

export default Content