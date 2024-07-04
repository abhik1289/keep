import React,{useState} from 'react'
import { AiOutlineCheckSquare } from 'react-icons/ai';
import { IoBrushOutline } from 'react-icons/io5';
import { BiImageAlt } from 'react-icons/bi';
import {Link} from 'react-router-dom';
import IconBox from './IconBox';
import AddNote from './AddNote';
export default function NoteBox() {
    const [showAddNote,SetshowAddNote] = useState(false);
    
    return (
        <div className="upperBx w-full relative min-h-[100px] flex justify-center mt-7">
           {
            !showAddNote? <div onClick={()=>SetshowAddNote((pre)=>!pre)} className="noteTakingBX  md:w-[600px] w-[390px] bg-white flex justify-between items-center px-3 rounded-lg h-[50px] relative" style={{ boxShadow: "0px 0px 10px #00000047" }}>
            <div className="leftTxt text-[#576574] font-secondary w-full cursor-text" >
                Take a note...
            </div>
            <div className="rightbx iconBx flex absolute right-2">
                <IconBox
                    icon={<AiOutlineCheckSquare />}
                    tooltipText="New List"
                />
               <Link to="/drawing">
               <IconBox
                    icon={<IoBrushOutline />}
                    tooltipText="New note with drawing"
                />
               </Link>
                <IconBox
                    icon={<BiImageAlt />}
                    tooltipText="New note with image"
                />
            </div>
        </div>:<AddNote SetshowAddNote={SetshowAddNote}/>
           }
        </div>
    )
}
