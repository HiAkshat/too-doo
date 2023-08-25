"use client"
import { useSession } from 'next-auth/react'

export default function UserAvatar({width}) {
  const session = useSession();
  return (
    <div className={`w-[${width}px] h-[${width}px] overflow-hidden rounded-full bg-[#494B51]`}>
      {session.status==="authenticated" &&
        <img className="object-cover" src={session.data.user.image} alt="" />
      }
    </div>
  )
}
