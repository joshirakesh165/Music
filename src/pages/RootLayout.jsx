import React from 'react'
import Footer from '../pages/Footer'
import Navbar from '../components/SideBar/Navbar'
import { Outlet } from 'react-router-dom'
import Header from '../components/shared/Header'

function RootLayout() {
  return (
    <>
      <div className="flex w-full absolute rounded-3xl  bg-primary-color h-full">
        <Navbar />
        <div className='w-full'>
          <div className='w-full h-full rounded-3xl sm:p-10 sm:pb-28 sm:pt-1 bg-image'>
            <Header />
            <Outlet />
          </div>
        </div>
      </div>
      <Footer className="h-10-p" />
    </>
  )
}

export default RootLayout
