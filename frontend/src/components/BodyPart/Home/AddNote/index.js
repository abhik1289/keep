import React,{useRef,useState} from 'react'
import { TbPinned } from 'react-icons/tb';
import LeftPart from './Leftpart';
import useClickOutside from './../../../../helpers/ClickOutside';
import Tippy from '@tippyjs/react';

export default function AddNote({SetshowAddNote}) {
    const targetAddNote = useRef(null);
     const [text, setText] = useState("");
    
    useClickOutside(targetAddNote,()=>SetshowAddNote(false));
    return (
        <div ref={targetAddNote} className='md:w-[600px] w-[390px] h-auto p-2 rounded-lg' style={{ boxShadow: "0px 0px 10px #00000047" }}>
            <div className="add_note_header relative font-secondary ">
                <div className="titleBX w-full relative">
                    <input type="text" name="" className=' w-full outline-none px-2 py-2' placeholder='Title' id="" />
                </div>
                <Tippy content="Pin" placement='bottom' arrow="false" animation='fade' className='font-secondary'>
                <div className="pinIcon absolute right-2 top-0 cursor-pointer w-[40px] h-[40px] hover:bg-slate-200 flex items-center justify-center rounded-full">
                    <TbPinned className='text-[#636e72] text-2xl' />
                </div>
                </Tippy>
            </div>
            <div className="middle_part">
                <textarea value={text} onChange={(e)=>setText(e.target.value)} autoFocus name="" id="" className='w-full outline-none resize-none h-[50px] px-2 py-2' placeholder='Take a note...' cols="30" rows="10"></textarea>
            </div>
            <div className="bottom_part flex justify-between items-center flex-wrap">
                <LeftPart  text={text} setText={setText} />
                <div className="bottom_right_part">
                    <button onClick={()=>SetshowAddNote((pre)=>!pre)} className='px-3 py-2 font-secondary'>Close</button>
                </div>
            </div>
        </div>
    )
}
