import React from 'react'
import Sidebar from '../sidebar/Sidebar'
// import Table from '../table/Table'
import './content.css'
import { Icon } from '@iconify/react'
import DetailOrder from '../detailorder/DetailOrder'
// import BasicFilterDemo from '../basicfilterdemo/BasicFilterDemo'
import SkeletonTest from '../skeletontest/SkeletonTest'

const Content = () => {
  return (
    <div className='container content'>
        <div className="row text-center">
            <div className="col-2 mt-5"><Sidebar /></div>
            <div className="col-7 mt-5">
              <div className="row mb-5 ml-2">
              <div className="col-10 text-left"><h4 className='food-order'>Food Order</h4></div>
              <div className="col-2 text-center"><button className="btn btn-outline-dark filter-text">
              <Icon icon="streamline:interface-setting-slider-horizontal-adjustment-adjust-controls-fader-horizontal-settings-slider" className='mr-2' color="gray" />Filter Order</button></div>
              </div>
              {/* <Table /> */}
              {/* <BasicFilterDemo /> */}
              <SkeletonTest />
            </div>
            <div className="col-3" style={{backgroundColor: 'whitesmoke'}}>
            <DetailOrder />
            </div>
        </div>
    </div>
  )
}

export default Content