import React from 'react'
import { CgMenuGridO } from 'react-icons/cg';
import HeaderIcon from './HeaderIcon';

export default function HeaderRight() {
  return (
    <div className="rightPart flex md:w-1/12 w-3/12 items-center justify-end pr-4">
      <HeaderIcon
        icon={<CgMenuGridO className='scale-150 text-[#576574]' />}
        hover
      />
      <div className="searchBtn w-[40px] cursor-pointer h-[40px] rounded-full flex justify-center items-center">
        <img src="https://randomuser.me/api/portraits/men/14.jpg" className='rounded-full' alt="profile_pic" />
      </div>
    </div>
  )
}
