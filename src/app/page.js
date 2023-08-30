"use client"

import Navbar from '@/components/navbar/navbar'
import Notes from '@/components/notes/notes'
import { GetUserNotes } from '@/app/api/auth/[...nextauth]/notesData'
import AddNote from '@/components/addNote/addNote'
import { useSession } from 'next-auth/react'
import useSWR from "swr"
import { useEffect, useState } from 'react'
import Loading from './loading'
import { searchInputAtom, localNotesAtom } from './atoms'
import { useAtom } from 'jotai'
import InfoIcon from '@mui/icons-material/Info';


export default function Home() {
  const [searchInput, setSearchInput] = useAtom(searchInputAtom)
  const [localNotes, setLocalNotes] = useAtom(localNotesAtom)

  const session= useSession()
  const {data, error, isLoading} = GetUserNotes()

  const updateUserNotes = () => {
    const filtered = data.data.notes.filter(
      note => 
        note.title.toLowerCase().includes(searchInput.toLowerCase()) ||
        note.desc.toLowerCase().includes(searchInput.toLowerCase())
    )

    userNotes=filtered
  }

  if (session.status === 'loading') {
    return <Loading />
  }

  if (session.status === 'authenticated') {
    if (error) {
      return <div><Navbar />{error}</div>;
    }

    if (!data) {
      return <Loading />
    }

    // Data is available

    // const userNotes = data.data.notes
    updateUserNotes()
    return (
      <main className="">
      <Navbar />
      <AddNote />
      <Notes userNotes={userNotes}/>
    </main>
    );
  }

  // User not authenticated

  return (
    <main className="">
      <Navbar />
      <div className='max-w-[1480px] m-auto gap-[20px] my-[40px] px-[20px] md:px-[40px]'>
        <div className='flex items-center gap-3 max-w-full bg-[#2A2B2F] py-2 px-5 rounded-[10px]'>
          <div><InfoIcon /></div>
          <span>login with google to store your notes in the cloud</span>
        </div>
      </div>
      <AddNote />
      <Notes userNotes={localNotes}/>
    </main>
  )
}
