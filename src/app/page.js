"use client"

import Navbar from '@/components/navbar/navbar'
import Notes from '@/components/notes/notes'
import { GetUserNotes } from '@/app/api/auth/[...nextauth]/notesData'
import AddNote from '@/components/addNote/addNote'
import { useSession } from 'next-auth/react'
import useSWR from "swr"
import Loading from './loading'
import { searchInputAtom } from './atoms'
import { useAtom } from 'jotai'
import UnauthPage from '@/components/unauthPage'


export default function Home() {
  const [searchInput, setSearchInput] = useAtom(searchInputAtom)

  const session= useSession()
  const {data, error, isLoading} = GetUserNotes()
  let userNotes;

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
    <UnauthPage />
  )
}
