import React from 'react'
import { BiArchive } from 'react-icons/bi';

export default function EmptyArchive() {
  return (
    <div className='w-full relative h-[70vh] flex  justify-center items-center'>
<div className="trashBx flex justify-center flex-col items-center">
                <div className="icon">
                    <BiArchive className='text-[150px] text-gray-300' />
                </div>
                <div className="text font-secondary text-slate-500">
                Your archived notes appear here
                </div>
            </div>
    </div>

  )
}
