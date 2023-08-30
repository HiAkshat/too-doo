"use client"

import { useState } from "react"
import { useSession } from "next-auth/react"
import { Toaster } from "@/components/ui/toaster"
import { useToast } from "@/components/ui/use-toast"
import { localNotesAtom } from "@/app/atoms"

export default function AddNote() {
  const [showTitleInput, setShowTitleInput] = useState(false);
  const [title, setTitle] = useState("")
  const [desc, setDesc] = useState("")
  const [localNotes, setLocalNotes] = useState(localNotesAtom)

  const { toast } = useToast()

  const session = useSession();

  const handleDescClick = () => {
    setShowTitleInput(true);
  };

  const handleAddNote = async () => {
    setShowTitleInput(false)
    setTitle("")
    setDesc("")

    if (session.status === "unauthenticated"){
      if (localStorage.getItem("0")===null) localStorage.setItem("0", JSON.stringify([]))
      
      const notes = JSON.parse(localStorage.getItem("0"))
      notes.push({
        id: notes.length,
        title: title,
        desc: desc
      })
      
      localStorage.setItem("0", JSON.stringify(notes))
      setLocalNotes(JSON.parse(localStorage.getItem("0")))
      console.log(JSON.parse(localStorage.getItem("0")))

      return 
    }

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/notes`, {
      method: "POST",
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
        title: "Invalid data!",
      })
      
      return
    }
    
    toast({
      title: "New note created!",
    })

  }

  return (
    <div className="max-w-[1480px] md:max-w- mx-auto my-[40px] px-[20px] md:px-[40px]">
      <div className="flex flex-col lg:w-[500px] mx-auto gap-[10px] py-[15px] border border-[#676970] rounded-[10px] whitespace-pre-wrap">
        {showTitleInput &&
          <div className={`${showTitleInput && 'show'} flex flex-col gap-[10px]`}>
            <input value={title} onChange={e => setTitle(e.target.value)} className='text-2xl px-[15px] bg-transparent text-white outline-none' type="text" placeholder="add title"/>
            <hr className='border-[#676970]'/>
          </div>
        }
        <textarea onClick={handleDescClick} value={desc} onChange={e => setDesc(e.target.value)} rows={showTitleInput ? 3 : 1} className="add-note-scroll text-lg px-[15px] outline-none text-[#EDEDED] bg-transparent resize-none" type="text" placeholder="What's on your mind?" />
        <div className="px-[15px] flex justify-end">
          <button onClick={handleAddNote} className="bg-[#2A2B2F] w-max rounded-[10px] py-1 px-2 hover:bg-[#36373c]">+ add note</button>
        </div>
      </div>
      <Toaster className="dark z-[999]"/>
    </div>
  )
}