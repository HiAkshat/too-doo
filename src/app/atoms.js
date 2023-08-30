import {atom} from "jotai"

const searchInput = ""

let localNotes
if (localStorage.getItem("0")===null) localNotes=[]
else localNotes = JSON.parse(localStorage.getItem("0"))

export const searchInputAtom = atom(searchInput)
export const localNotesAtom = atom(localNotes)