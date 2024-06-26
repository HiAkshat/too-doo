"use client"

import Navbar from "@/components/navbar/navbar"
import { signIn, signOut } from "next-auth/react"


const Box = ({w, h, r}) => {
  const classes = `w-[${w}px] h-[${h}px] rounded-[${r}px] border border-[#D9D9D9]`

  return (
    <div className="border border-[#D9D9D9]"
      style={{
        "width": `${w}px`,
        "height": `${h}px`,
        "borderRadius": `${r}px`
      }}
    >
    </div>
  )
}

export default function UnauthPage() {
  return (
    <div className="">
      <Navbar />
      <div className="fixed h-[100vh] flex overflow-hidden max-w-[100%] m-auto gap-[64px] my-[40px] px-[20px] md:px-[40px]">
        <div className="hidden md:flex flex-col gap-[49px]">
          <Box w={298} h={320} r={81} />
          <Box w={298} h={214} r={107} />
          <Box w={298} h={320} r={58} />
        </div>
        <div className="flex flex-col gap-[49px]">
          <div>
            <ul className="text-[28px] lowercase">
              <li>• Create, edit, and delete notes</li>
              <li>• Save them on the cloud</li>
              <li>• Access from any device, anywhere</li>
              <li>• Fast, easy and simple</li>
            </ul>
          </div>

          <div>
            <span className="text-[48px]"><span onClick={() => signIn("google")} className="underline cursor-pointer">login with google</span> and start now</span>
          </div>

          <div className="flex gap-[64px]">
            <Box w={522} h={449} r={29} />
            <div className="flex flex-col gap-[49px]">
              <Box w={522} h={120} r={29} />
              <Box w={522} h={336} r={80} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}