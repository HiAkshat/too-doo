export default function Note({title, desc}){
  // console.log(desc)
  return (
    <div className="flex flex-col gap-[10px] py-[15px] border border-[#676970] rounded-[10px] whitespace-pre-wrap">
      <span className='text-2xl px-[15px] text-white'>{title}</span>
      <hr className='border-[#676970]'/>
      <p className='px-[15px] text-lg'>{desc}</p>
    </div>
  )
}