import React from 'react'
import { UserCircleIcon } from '@heroicons/react/24/solid'


function ProfileIcon() {
    return (
        <div className='cursor-pointer rounded-md mt-5 ml-2 space-y-12 flex flex-col justify-center items-center w-12 h-12 text-white'>
            <UserCircleIcon className='w-12'/>
        </div>
    )
}

export default ProfileIcon
