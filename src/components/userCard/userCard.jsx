"use client"

import { signIn, signOut } from "next-auth/react"
import { useSession } from 'next-auth/react'
import UserAvatar from "../userAvatar/userAvatar"

const LoggedInCard = ({user}) => {
  return (
    <div className="flex gap-[18px] text-white p-2 font-['Hachi_Maru_Pop',cursive]">
      <UserAvatar width={50} />
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <span className="lowercase max-w-[50vw] md:max-w-[500px]">{user.name}</span>
          <span className="text-[12px] text-[#D8D9D9 max-w-[50vw] md:max-w-[500px]]">{user.email}</span>
        </div>
        <button onClick={() => signOut("google")} className="flex bg-[#484B51] w-max items-center p-2 gap-2 rounded-[10px]">
          <span>sign out</span>
        </button>
      </div>
    </div>
  )
}

const LoggedOutCard = () => {
  return (
    <div className="flex gap-[18px] text-white p-2 font-['Hachi_Maru_Pop',cursive]">
      <UserAvatar width={50} />
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <span>not Logged in</span>
          <span className="text-[12px] text-[#D8D9D9]">sign in with google</span>
        </div>
        <button onClick={() => signIn("google")} className="flex bg-[#484B51] w-max items-center p-2 gap-2 rounded-[10px]">
          <div className="w-[20px]"><img className="" src="./google.png" alt="" /></div>
          <span>sign in</span>
        </button>
      </div>
    </div>
  )
}

export default function UserCard() {
  const session = useSession();
  console.log(session)

  if (session.status==="unauthenticated") return <LoggedOutCard />
  if (session.status==="authenticated") return <LoggedInCard user={session.data.user}/>
}