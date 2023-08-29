import { Toaster } from "@/components/ui/toaster"
import { useToast } from "@/components/ui/use-toast"
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import CreateRoundedIcon from '@mui/icons-material/CreateRounded';
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { ScrollAreaThumb } from "@radix-ui/react-scroll-area";
import NoteBox from "../noteBox/noteBox";

import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog"


export default function Note({noteId, title, desc}){
  const { toast } = useToast()

  const handleDelete = async () => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/notes/${noteId}`, {
        method: "DELETE",
        headers: {
          "x-api-key": process.env.NEXT_PUBLIC_AUTH_KEY
        }
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
      <div className="flex justify-end px-[15px] gap-[10px]">
        <div>
          <Dialog>
            <DialogTrigger>
              <button className="bg-[#2A2B2F] w-max rounded-[10px] py-1 px-2 hover:bg-[#36373c]">
                <CreateRoundedIcon fontSize="inherit"/>
              </button>
            </DialogTrigger>
            <DialogContent className="bg-transparent">
              <NoteBox initTitle={title} initDesc={desc} noteId={noteId}/>  
            </DialogContent>
          </Dialog>          
          </div>
        <button onClick={handleDelete} className="bg-[#2A2B2F] w-max rounded-[10px] py-1 px-2 hover:bg-[#36373c]">
          <div><DeleteRoundedIcon fontSize="inherit"/></div>
        </button>
      </div>
    </div>
  )
}