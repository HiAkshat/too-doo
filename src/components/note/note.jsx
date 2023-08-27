import { Toaster } from "@/components/ui/toaster"
import { useToast } from "@/components/ui/use-toast"

export default function Note({noteId, title, desc}){
  const { toast } = useToast()

  const handleDelete = async () => {
    try {
      const res = await fetch(`http://localhost:5000/api/v1/notes/${noteId}`, {
        method: "DELETE"
      })

      console.log("Deleted")
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
    <div className="flex flex-col gap-[10px] py-[15px] border border-[#676970] rounded-[10px] whitespace-pre-wrap">
      <span className='text-2xl px-[15px] text-white'>{title}</span>
      <hr className='border-[#676970]'/>
      <p className='px-[15px] text-lg'>{desc}</p>
      <button onClick={handleDelete}>Delete</button>
      <Toaster className="dark"/>
    </div>
  )
}