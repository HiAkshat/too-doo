"use client"

import { useState } from "react"

export default function AddNote() {
  const [title, setTitle] = useState("")
  const [desc, setDesc] = useState("")

  const handleAddNote = async () => {
    await fetch(`http://localhost:5000/api/v1/notes`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: title,
        desc: desc,
        user: "1"
      })
    })
  }

  return (
    <div className="max-w-[1480px] md:max-w- mx-auto my-[40px] px-[40px]">
      <div className="flex flex-col lg:w-[500px] mx-auto gap-[10px] py-[15px] border border-[#676970] rounded-[10px] whitespace-pre-wrap">
        <input value={title} onChange={e => setTitle(e.target.value)} className='text-2xl px-[15px] bg-transparent text-white outline-none' type="text" placeholder="Add title"/>
        <hr className='border-[#676970]'/>
        <textarea value={desc} onChange={e => setDesc(e.target.value)} rows={3} className="text-lg px-[15px] outline-none text-[#EDEDED] bg-transparent resize-none" type="text" placeholder="What's on your mind?" />
        <div className="px-[15px] flex justify-end">
          <button onClick={handleAddNote} className="bg-[#2A2B2F] w-max rounded-[10px] py-1 px-2">+ add note</button>
        </div>
      </div>
    </div>
  )
}