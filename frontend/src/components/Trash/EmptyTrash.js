import React from 'react'
import { BiTrash } from 'react-icons/bi';
export default function EmptyTrash() {
    return (
        <div className='w-full relative h-[70vh] flex flex-col justify-between'>
            <div className="header font-main italic h-[100px] flex items-center justify-center">
                Notes in Trash are deleted after 7 days.
            </div>
            <div className="trashBx flex justify-center flex-col items-center">
                <div className="icon">
                    <BiTrash className='text-[150px] text-gray-300' />
                </div>
                <div className="text font-secondary text-slate-500">
                    No notes in Trash
                </div>
            </div>
        </div>
    )
}
