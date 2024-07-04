import React from 'react'
import { menuList } from './MenuList'
import { Link } from 'react-router-dom';
export default function SidePanel({ width }) {
    let pathname = window.location.pathname;
    console.log(pathname)
    return (
        <div>  {
            menuList.map((data, index) => {
                return <Link to={`${data.pathname}`} key={index}  >
                     {width==="60px"?<div  className={data.pathname && data.pathname === pathname ? "w-[48px] h-[48px]  rounded-full flex justify-center items-center mx-2 bg-[#ffe28e] duration-200 ease-linear" : "w-[48px] h-[48px]  rounded-full flex justify-center items-center mx-2 duration-200 ease-linea"} key={index}>
                     <div className={data.pathname && data.pathname === pathname ? "icon text-2xl text-[#34495e]" : "icon  text-2xl text-[#576574]"}>{data.icon}</div> 
                       </div>:   <div  className={data.pathname && data.pathname === pathname ? "flex items-center pl-[12px] h-[48px] rounded-r-full font-main font-semibold cursor-pointer bg-[#ffe28e]" : "flex items-center pl-[12px] h-[48px] rounded-r-full font-main font-semibold cursor-pointer"} key={index}>
                     <div className={data.pathname && data.pathname === pathname ? "icon pr-[12px] text-2xl text-[#34495e]" : "icon pr-[12px] text-2xl text-[#576574]"}>{data.icon}</div> 
                        <span className={width==="60px"?"hidden transition-all duration-300":"ml-[20px] text-[14px] transition-all duration-300"}>{data.name}</span>
                       </div> }
                   
                </Link>
            })
        }</div>
    )
}




                    