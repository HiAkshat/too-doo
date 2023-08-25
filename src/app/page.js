import Image from 'next/image'
import Navbar from '@/components/navbar/navbar'
import Note from '@/components/note/note'

export default function Home() {


  return (
    <main className="">
      <Navbar />
      <Note />
    </main>
  )
}
