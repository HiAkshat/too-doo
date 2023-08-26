"use client"

import Image from 'next/image'
import Navbar from '@/components/navbar/navbar'
import Notes from '@/components/notes/notes'
import { getUserNotes } from '@/app/api/auth/[...nextauth]/notesData'
import AddNote from '@/components/addNote/addNote'
import { useSession } from 'next-auth/react'
import useSWR from "swr"
import { useEffect } from 'react'

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Home() {
  const session = useSession()

  const apiEndpoint = session.status === 'authenticated' ? `http://localhost:5000/api/v1/notes/${session.data.user.email}` : null;
  const { data, error, isLoading } = useSWR(apiEndpoint, fetcher);

  if (session.status === 'loading') {
    return <div>Loading...</div>;
  }

  if (session.status === 'authenticated') {
    if (error) {
      return <div><Navbar /></div>;
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


  return (
    <main className="">
      <Navbar />
      <AddNote />
      {/* <Notes userNotes={userNotes}/> */}
    </main>
  )
}
