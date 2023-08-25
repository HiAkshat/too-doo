"use client"

import Image from 'next/image'
import Navbar from '@/components/navbar/navbar'
import Note from '@/components/note/note'
import { useSession } from 'next-auth/react'

export default function Home() {
  const session = useSession();
  console.log(session)

  return (
    <main className="">
      <Navbar />
      <Note />
    </main>
  )
}
