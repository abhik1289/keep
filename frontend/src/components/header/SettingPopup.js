import React from 'react'


const SettingList = [
    {
        key:1,
        name:"Settings"
    },
    {
        key:2,
        name:"Enable dark theme"
    },
    {
        key:3,
        name:"Send feedback"
    },
    {
        key:4,
        name:"Help"
    },
    {
        key:5,
        name:"App downloads"
    },
    {
        key:6,
        name:"Keyboard shortcuts"
    },
];


export default function SettingPopup({showPopup}) {
    // console.log("value is", showPopup)
    return(
       <div>
         {
            showPopup ? <div className='absolute top-[50px] bg-white min-h-[190px] w-[200px] md:right-[-116px] right-[10px]' style={{boxShadow:"rgb(0 0 0 / 25%) 0px 2px 12px 0px"}}>
            {
                SettingList.map((element,index)=>{
                    return <div key={element.key} className="px-2 font-main cursor-pointer hover:bg-slate-200 py-1 ">
                        {element.name}
                    </div>
                })
            }
            </div>:""
        }
       </div>
    )
}

