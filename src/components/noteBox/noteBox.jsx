"use client"

import { useState } from 'react';

import DoneRoundedIcon from '@mui/icons-material/DoneRounded';

export default function NoteBox({initTitle, initDesc}) {
  const [title, setTitle] = useState(initTitle)
  const [desc, setDesc] = useState(initDesc)

  

  return (
    <div className="flex flex-col gap-[10px] max-h-[80vh] py-[15px] border border-[#676970] bg-[#1E1E1E] rounded-[10px] whitespace-pre-wrap">
      <div className="flex flex-col gap-[10px]">
        {/* <span className='text-2xl px-[15px] text-white'>{title}</span> */}
        <input value={title} onChange={e => setTitle(e.target.value)} className='text-2xl px-[15px] bg-transparent text-white outline-none' type="text"/>
        <hr className='border-[#676970]'/>
      </div>
      <textarea type="text" value={desc} onChange={e => setDesc(e.target.value)} className="px-[15px] text-lg outline-none bg-transparent h-[40vh] add-note-scroll resize-none"/>
      <div className="flex justify-end px-[15px] gap-[10px]">
        <button className="bg-[#2A2B2F] w-max rounded-[10px] py-1 px-2 hover:bg-[#36373c]">
          <div><DoneRoundedIcon /></div>
        </button>
      </div>
    </div>
  )
}