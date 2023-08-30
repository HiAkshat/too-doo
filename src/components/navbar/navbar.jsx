"use client"

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

import UserCard from "../userCard/userCard"
import UserAvatar from "../userAvatar/userAvatar"

import { searchInputAtom } from "@/app/atoms"
import { atom, useAtom } from "jotai"
// const searchInputAtom = atom("")

export default function Navbar() {
  const [searchInput, setSearchInput] = useAtom(searchInputAtom)

  return (
    <div className="z-[99] sticky top-0 w-full h-[70px] bg-[#2A2B2F] nav-shadow">
      <div className="flex h-full items-center m-auto gap-[10px] justify-between max-w-[1480px] px-[20px] md:px-[40px]">
        <span className="text-xl md:text-[28px] min-w-max text-white font-['Hachi_Maru_Pop',cursive]">(too-doo)</span>
        <input value={searchInput} onChange={e => setSearchInput(e.target.value)} className="w-[200px] md:w-[480px] text-lg bg-[#494B51] h-[40px] rounded-lg outline-none px-[15px]" placeholder="type to search" type="text" />
        <Popover className="mr-8">
          <PopoverTrigger>
            <UserAvatar width={50}/>
          </PopoverTrigger>
          <PopoverContent className="min-w-[320px] w-max bg-[#2A2B2F] border-none mt-[25px] mr-[30px]">
            <UserCard />
          </PopoverContent>
        </Popover>
      </div>
    </div>
  )
}