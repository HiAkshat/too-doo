"use client"

import Image from 'next/image'
import Navbar from '@/components/navbar/navbar'
import Notes from '@/components/notes/notes'
import { GetUserNotes, getUserNotes2 } from '@/app/api/auth/[...nextauth]/notesData'
import AddNote from '@/components/addNote/addNote'
import { useSession } from 'next-auth/react'
import useSWR from "swr"
import { useEffect, useState } from 'react'
import Loading from './loading'
import { searchInputAtom } from './atoms'
import { useAtom } from 'jotai'


export default function Home() {
  const [searchInput, setSearchInput] = useAtom(searchInputAtom)
  // const [userNotes, setUserNotes] = useState([])
  let userNotes;

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
      <AddNote />
      {/* <Notes userNotes={userNotes}/> */}
    </main>
  )
}
