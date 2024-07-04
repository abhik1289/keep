import React,{useState} from 'react'

import { MdClose, MdArrowBack } from 'react-icons/md';
import HeaderIcon from './HeaderIcon';

export default function ResponsiveSearch({ showSearch, SetShowSearch }) {


   const [searchTxt,SetSearchTxt] = useState("")

    return (
        <div>
            {
                showSearch ? <div className='search_area absolute bg-white h-[50px] px-2 rounded-[8px] right-0 w-[273px] flex justify-between top-0' style={{
                    boxShadow: "rgb(0 0 0 / 20%) -1px 3px 4px 0px"
                }}>
                    <HeaderIcon
                    id={"back"}
                    text={"back now"}
                        hover={false}
                        icon={<MdArrowBack
                            onClick={() => SetShowSearch(!showSearch)}
                            className='scale-150 text-[#576574]' />}
                    />
                    <input id="searchFiled" value={searchTxt} onChange={(e)=>SetSearchTxt(e.target.value)} autoFocus type="text" name="" className='w-full relative outline-none' placeholder='Serach' />
                    <HeaderIcon
                        hover={false}
                        icon={<MdClose onClick={()=>SetSearchTxt("")} className='scale-150 text-[#576574]' />}
                    />

                </div> : ""
            }
        </div>
    )
}
