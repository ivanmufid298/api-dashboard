import React from 'react'
import BasicFilterDemo from '../../components/basicfilterdemo/BasicFilterDemo'
import Header from '../../components/header/Header'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
// import SkeletonTest from '../../components/skeletontest/SkeletonTest'
import "./home.css"

const Home = () => {
  return (
    <div>
        <Navbar />
        <Header />
        <div className="container home">
        <div className="row text-center">
        <div className="col-2 mt-5"><Sidebar /></div>
        <div className="col-10 mt-5">
        {/* <SkeletonTest /> */}
        <BasicFilterDemo />
        </div>
        {/* <div className="col-3 mt-5"></div> */}
        </div>
        </div>
    </div>
  )
}

export default Home