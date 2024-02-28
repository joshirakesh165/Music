import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'


function Navlink(props) {

    const activeClass= 'bg-slate-50 text-black';
    
  return (
        <NavLink to={props.linkTo}
            className={ ({isActive}) => `${isActive ? activeClass : "text-white"} rounded-md p-2 w-14 flex flex-col items-center hover: hover:text-black hover:bg-slate-50 active:text-black active:bg-slate-50`}>
            <props.icon className='w-6' />
            <span className='text-xs text-center'>{props.text}</span>
        </NavLink>
    )
}

export default Navlink
