import React from 'react'
import Album from '../Trending/Album';


function LibraryGrid({ title, items, isRounded }) {


    return (
        <>
            <h1 className='text-white mb-10 text-3xl'>{title ? title : 'Songs'} </h1>
            <div className={`grid grid-cols-2 gap-5 overflow-scroll md:grid-cols-6  md:gap-5`}>
                {items.map(item => (
                    <Album album={item} isRounded={isRounded}/>
                ))}
            </div>
        </>
    )
}

export default LibraryGrid