"use client"
import Masonry from 'react-masonry-css'
import Note from "@/components/note/note"

export default function Notes({userNotes}){
  const breakpointColumnsObj = {
    default: 4, // Number of columns by default
    1100: 2,   // Number of columns at 1100px screen width and above
    640: 1,    // Number of columns at 700px screen width and above
  };

  return (
    <Masonry
    breakpointCols={breakpointColumnsObj}
    className="flex max-w-[1480px] m-auto gap-[40px] my-[40px] px-[40px]"
    columnClassName="flex flex-col gap-[40px]"
  >
    {userNotes.map(note => (
      <Note key={note._id} noteId={note._id} title={note.title} desc={note.desc} />
    ))}

  </Masonry>
  )
}