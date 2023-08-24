export default function Navbar() {
  return (
    <div className="w-full h-[70px] bg-[#2A2B2F]">
      <div className="flex  h-full items-center m-auto justify-between max-w-[1480px] px-[40px]">
        <span className="text-[28px]">(too-doo)</span>
        <input className="w-[500px] bg-[#494B51] h-[40px] rounded-lg outline-none px-[15px]" placeholder="type to search" type="text" />
        <div className="w-[40px] h-[40px] rounded-full bg-[#494B51]"></div>
      </div>
    </div>
  )
}