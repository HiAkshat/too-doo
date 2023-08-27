import { Toaster } from "@/components/ui/toaster"
import { useToast } from "@/components/ui/use-toast"
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { ScrollAreaThumb } from "@radix-ui/react-scroll-area";

export default function Note({noteId, title, desc}){
  const { toast } = useToast()

  const handleDelete = async () => {
    try {
      const res = await fetch(`http://localhost:5000/api/v1/notes/${noteId}`, {
        method: "DELETE"
      })

      toast({
        title: "Note successfully deleted!",
      })

    } catch (err) {
      toast({
        variant: "destructive",
        title: "Something went wrong!",
      })
    }
  }

  return (
    <div className="flex flex-col gap-[10px] max-h-[400px] py-[15px] border border-[#676970] rounded-[10px] whitespace-pre-wrap">
      {title!="" &&
        <div className="flex flex-col gap-[10px]">
          <span className='text-2xl px-[15px] text-white'>{title}</span>
          <hr className='border-[#676970]'/>
        </div>
      }
      <ScrollArea className='flex px-[15px] text-lg'>
        {desc}
        <ScrollBar className="">
        <ScrollAreaThumb className=""/>
        </ScrollBar>
      </ScrollArea>
      <div className="flex justify-end px-[15px]">
        <button onClick={handleDelete} className="bg-[#2A2B2F] w-max rounded-[10px] py-1 px-2">
          <div><DeleteRoundedIcon fontSize="inherit"/></div>
        </button>
      </div>
    </div>
  )
}