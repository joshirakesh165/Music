import React from 'react'
import ProfileIcon from './ProfileIcon'
import Setting from './Setting'
import Navlinks from './Navlinks'

function Navbar() {
  return (
    <div className="w-20 h-full rounded-3xl bg-primary-color flex flex-col justify-between">
      {/* <ProfileIcon /> */}
      <Navlinks />
      {/* <Setting /> */}
    </div>
  )
}

export default Navbar
