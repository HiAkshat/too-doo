"use client"

import Navbar from "@/components/navbar/navbar"
import { signIn, signOut } from "next-auth/react"
import { useSession } from 'next-auth/react'

export default function Page() {
  const session = useSession();

  return (
    <div>
      <Navbar />
      <button onClick={() => signIn("google")}>Login with Google</button>
      <button onClick={() => signOut("google")}>signOut with Google</button>
    </div>
  )
}