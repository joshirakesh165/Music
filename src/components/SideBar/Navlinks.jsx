import React from 'react'
import { FireIcon, PlayIcon, HeartIcon, ClipboardDocumentListIcon } from '@heroicons/react/24/solid'
import Navlink from './Navlink';

function Navlinks() {
    let navlinks = [
        { icon: FireIcon, text: 'Trending', linkTo: '/tranding', id: 1 },
        { icon: PlayIcon, text: 'Music', linkTo: '/play', id: 2 },
        // { icon: HeartIcon, text: 'Favourite', linkTo: '/favoutite', id: 3 },
        { icon: ClipboardDocumentListIcon, text: 'Library', linkTo: '/', id: 4 }
    ]

    return (
        <div className='cursor-pointer flex flex-col items-center h-1/2 justify-evenly w-16'>
            {navlinks.map(nav => (
                <Navlink key={nav.id} {...nav} />
            ))}
        </div>
    )
}

export default Navlinks
