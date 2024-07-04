import React from 'react'
import { BiBellPlus, BiImageAlt, BiUndo } from 'react-icons/bi';
import { MdOutlineArchive } from 'react-icons/md';
import { FiUserPlus } from 'react-icons/fi';
import { GrRedo } from 'react-icons/gr';
import { HiOutlineDotsVertical } from 'react-icons/hi';


import { IoColorPaletteOutline } from 'react-icons/io5';

import IconBox from '../IconBox';
export default function LeftPart({ text, setText }) {


    const handleUndo = () => {
     let sliceText = text.split(" ");
     let finalText;
     if(sliceText.length ===1){
         setText("")
     }else{
        finalText = sliceText.slice(0, sliceText.length - 1);
        setText(finalText.join(" "))
     }



    //  let undoText = Array.from(text);
    //     let finalText = undoText.slice(0, undoText.length - 1).join("")
    //     setText(finalText)

    }

    return (
        <div className="bottom_left_part flex">
            <IconBox
                icon={<BiBellPlus className='text-[19px]' />}
                tooltipText={"Remind me"}
            />
            <IconBox
                icon={<FiUserPlus className='text-[19px]' />}
                tooltipText={"Collabarator"}

            />
            <IconBox
                icon={<IoColorPaletteOutline className='text-[19px]' />}
                tooltipText={"Backgroud Option"}

            />
            <IconBox
                icon={<BiImageAlt className='text-[19px]' />}
                tooltipText={"Add Image"}

            />
            <IconBox
                icon={<MdOutlineArchive className='text-[19px]' />}
                tooltipText={"Archive"}

            />
            <IconBox
                icon={<HiOutlineDotsVertical className='text-[19px]' />}
                tooltipText={"More"}

            />
            <div className="undoHandler" onClick={text && handleUndo}>
                <div className="undoTxt">
                    <IconBox
                        disable={!text}
                        icon={<BiUndo className='text-[19px]' />}
                        tooltipText={"Undo"}

                    />
                </div>
            </div>
            <IconBox
                disable
                icon={<GrRedo className='text-[19px]' />}
                tooltipText={"Redo"}
            />
        </div>
    )
}
