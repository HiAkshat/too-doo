"use client"

import { useState, useRef } from 'react';
import { useSession } from "next-auth/react"
import { Toaster } from "@/components/ui/toaster"
import { useToast } from "@/components/ui/use-toast"

import DoneRoundedIcon from '@mui/icons-material/DoneRounded';

import {
  DialogPrimitive
} from "@/components/ui/dialog"


export default function NoteBox({initTitle, initDesc, noteId}) {
  const session = useSession()
  const [title, setTitle] = useState(initTitle)
  const [desc, setDesc] = useState(initDesc)

  const ref = useRef(null)

  const { toast } = useToast()
  
  const handleEditNote = async () => {
    const event = new KeyboardEvent('keydown', {
      key: 'Escape',
    });

    // Dispatch the event on the window object
    console.log(ref.current.dispatchEvent(event))

    if (desc===""){
      toast({
        variant: "destructive",
        title: "invalid data!",
      })
      
      return
    }

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/notes/${noteId}`, {
      method: "PUT",
      headers: {
        'Content-Type': 'application/json',
        "x-api-key": process.env.NEXT_PUBLIC_AUTH_KEY
      },
      body: JSON.stringify({
        title: title,
        desc: desc,
        user: session.data.user.email
      })
    })

    if (!res.ok){
      console.log(res)
      toast({
        variant: "destructive",
        title: "invalid data!",
      })
      
      return
    }
    
    toast({
      title: "note edited!",
    })

  }

  return (
    <div ref={ref} className="flex flex-col gap-[10px] max-h-[80vh] py-[15px] border border-[#676970] bg-[#1E1E1E] rounded-[10px] whitespace-pre-wrap">
      <div className="flex flex-col gap-[10px]">
        {/* <span className='text-2xl px-[15px] text-white'>{title}</span> */}
        <input value={title} onChange={e => setTitle(e.target.value)} className='text-2xl px-[15px] bg-transparent text-white outline-none' placeholder="Add title" type="text"/>
        <hr className='border-[#676970]'/>
      </div>
      <textarea type="text" value={desc} onChange={e => setDesc(e.target.value)} className="px-[15px] text-lg outline-none bg-transparent h-[40vh] add-note-scroll resize-none" placeholder="What's on your mind?"/>
      <div className="flex justify-end px-[15px] gap-[10px]">
      <DialogPrimitive.Close>
        <button onClick={handleEditNote} className="bg-[#2A2B2F] w-max rounded-[10px] py-1 px-2 hover:bg-[#36373c]">
          <div><DoneRoundedIcon /></div>
        </button>
      </DialogPrimitive.Close>
      </div>
    </div>
  )
}