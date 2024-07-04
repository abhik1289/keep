import React from 'react'
import HeaderMiddle from './HeaderMiddle';
import HeaderRight from './HeaderRight';
import HeaderLeft from './HeaderLeft';

export default function Header({SetWidth,width}) {
    return (
        <header className='border-b py-2 border-b-slate-200 px-2 flex flex-wrap fixed top-0 left-0 w-screen z-50 bg-white'>
            <HeaderLeft SetWidth={SetWidth} width={width} />
            <HeaderMiddle />
            <HeaderRight />
        </header>
    )
}


// gb_Se aSVJYc-G0jgYd-ZMv3u