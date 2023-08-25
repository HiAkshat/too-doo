import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

import UserCard from "../userCard/userCard"
import UserAvatar from "../userAvatar/userAvatar"

export default function Navbar() {
  return (
    <div className="w-full h-[70px] bg-[#2A2B2F]">
      <div className="flex h-full items-center m-auto justify-between max-w-[1480px] px-[40px]">
        <span className="text-[28px] text-white font-['Hachi_Maru_Pop',cursive]">(too-doo)</span>
        <input className="w-[500px] text-lg bg-[#494B51] h-[40px] rounded-lg outline-none px-[15px]" placeholder="type to search" type="text" />
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