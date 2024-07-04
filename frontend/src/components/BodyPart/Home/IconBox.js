import React from 'react'
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { useMediaQuery } from 'react-responsive'
export default function IconBox({ icon, tooltipText, disable }) {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 768px)'
  });
  return (
    <Tippy content={tooltipText} placement='bottom' arrow="false" animation='fade' className='font-secondary'>
      <div style={disable?{opacity:.4,cursor:"not-allowed"}:{}}  className={`icon ${!isDesktopOrLaptop && "w-[32px] h-[32px]"} w-[46px] h-[46px] flex items-center justify-center cursor-pointer  text-[#576574] hover:text-[#222f3e] ease-linear duration-100 hover:bg-[#c8d6e579] rounded-full md:text-xl`} >
        {
          icon
        }
      </div>
    </Tippy>
  )
}
