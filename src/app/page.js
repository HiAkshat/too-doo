"use client"

import Image from 'next/image'
import Navbar from '@/components/navbar/navbar'
import Notes from '@/components/notes/notes'
import { getUserNotes, getUserNotes2 } from '@/app/api/auth/[...nextauth]/notesData'
import AddNote from '@/components/addNote/addNote'
import { useSession } from 'next-auth/react'
import useSWR from "swr"
import { useEffect } from 'react'


export default function Home() {
  const session= useSession()
  const {data, error, isLoading} = getUserNotes()

  if (session.status === 'loading') {
    return <div>Loading...</div>;
  }

  if (session.status === 'authenticated') {
    if (error) {
      return <div><Navbar />ERROROR</div>;
    }

    if (!data) {
      return <div>Loading...</div>;
    }

    // Data is available
    const userNotes = data.data.notes
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
