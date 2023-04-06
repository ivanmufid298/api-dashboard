import React from 'react'
import Content from '../components/content/Content'
import Header from '../components/header/Header'
import Navbar from '../components/navbar/Navbar'

const Home = () => {
  return (
    <div>
        <Navbar />
        <Header />
        <Content />
    </div>
  )
}

export default Home