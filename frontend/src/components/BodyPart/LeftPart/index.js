import React from 'react'
import SidePanel from './SidePanel';



export default function LeftPanel({ width ,SetWidth}) {
   
      
 
    const handleMouseHover=()=>{
        if(width==="60px"){
            SetWidth("290px");
        }
    }
  


    return (
        <div onMouseOver={handleMouseHover} className={`sidePnael relative duration-200 ease-linear z-20 bg-white`} style={{ width: `${width}` }}>
            <div className={`sideMenu fixed h-screen py-4 duration-200 ease-linear`} style={{ width: `${width}` }}>
                <SidePanel width={width} />
            </div>
        </div>
    )
}
