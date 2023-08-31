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
      <div className="overflow-hidden fixed flex w-full overflow- max-w-[100%] m-auto gap-[64px] my-[40px] px-[20px] md:px-[40px]">
        <div className="flex-1 hidden md:flex flex-col gap-[30px]">
          <div className="h-[320px] rounded-[81px] border border-[#D9D9D9]" ></div>
          <div className="h-[214px] rounded-[107px] border border-[#D9D9D9]" ></div>
          <div className="h-[320px] rounded-[320px] border border-[#D9D9D9]" ></div>

        </div>
        <div className="flex-[2] flex flex-col gap-[40px]">
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

          <div className="flex justify-between md:justify-normal gap-[20px] md:gap-[64px]">
            <div className="flex-1 h-[449px] rounded-[50px] border border-[#D9D9D9]" ></div>
            <div className="flex-1 flex flex-col gap-[30px]">
              <div className="h-[120px] rounded-[29px] border border-[#D9D9D9]" ></div>
              <div className="h-[336px] rounded-[80px] border border-[#D9D9D9]" ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}