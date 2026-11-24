import React from 'react'
import Navbar from '../../Components/educator/Navbar'
import { Outlet } from 'react-router-dom'
import SideBar from '../../Components/educator/SideBar'
import Footer from '../../Components/educator/Footer'

const Educator = () => {
  return (
    <div className='text-[16px] min-h-screen bg-white'>
      <Navbar/>
      <div className='flex'>
        <SideBar/>
        <div className='flex-1'>
           <Outlet/>
        </div>
        
      </div>
      <Footer/>
    </div>
  )
}

export default Educator