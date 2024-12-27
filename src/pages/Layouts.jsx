import React from 'react'
import Header from '../components/Header'
import Navbar from '../components/NavBar'
import Footer from '../components/Footer'

function Layouts({children}) {
  return (
    <div>
        <Header/>
        <Navbar/>
        <main>{children}</main>
        <Footer/>
    </div>
  )
}

export default Layouts