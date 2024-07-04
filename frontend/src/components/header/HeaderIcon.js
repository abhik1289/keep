import React from 'react'


export default function HeaderIcon({ icon, hover,bottom,hidden,text,showTooltip }) {
   
    return (
        <div  className={`searchBtn w-[50px] cursor-pointer h-[50px] rounded-full flex justify-center items-center mr-1 relative ${hover ? "hover:bg-slate-200" : ""} ${hidden?"md:hidden":""}`}>
            {
                icon
            }
            {
                bottom
            }
           {
            showTooltip ?  <div className="tooltip absolute bg-[#576574] text-white rounded-[5px] bottom-[-17px] px-2 ">
            {text?text:""}
         </div>:""
           }
        </div>
    )
}
HeaderIcon.defaultProps ={
    hover:true
}