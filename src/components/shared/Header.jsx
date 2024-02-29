import React from 'react'
import Search from './Search'
import Logo from './Logo'

function Header() {
    return (
        <>
            <div className="flex w-full justify-between items-center flex-wrap">
                <div className='pl-20 mt-2 mb-2'><Logo className=" -mt-20" /></div>
                <div className='w-full p-2 sm:w-1/2 sm:p-0'><Search /></div>

            </div>
            <hr className='text-white' />
        </>
    )
}

export default Header
