import Navbar from "@/components/navbar/navbar"

export default function Page() {
  return (
    <div className="">
      <Navbar />
      <div className="flex items-center max-w-[1480px] m-auto gap-[20px] my-[40px] px-[20px] md:px-[40px]">
        <span className="text-2xl">loading your notes</span>
        <img className="w-[30px] animate-spin spin-duration" src="./loading.png" alt="" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 max-w-[1480px] m-auto gap-[20px] my-[40px] px-[20px] md:px-[40px]">
        <div className="h-[270px] border border-[#676970] rounded-[10px] animate-pulse duration-1500"></div>
        <div className="h-[200px] border border-[#676970] rounded-[10px] animate-pulse duration-1500"></div>
        <div className="h-[300px] border border-[#676970] rounded-[10px] animate-pulse duration-1500"></div>
        <div className="h-[250px] border border-[#676970] rounded-[10px] animate-pulse duration-1500"></div>
      </div>
    </div>
  )
}