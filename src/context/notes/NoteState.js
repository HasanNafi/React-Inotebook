import NoteContext from "./NoteContext";
import React,{useState} from "react";

const NoteState = (props) => {
    const notesInitial = [
        {
          "_id": "63dae3045d3cf6ffe4867d94",
          "user": "63d8603f3fc49f70bec66d38",
          "title": "My work routine",
          "description": "Wake up at 7 am and have breakfast",
          "tag": "personal Routin updated",
          "date": "2023-02-01T22:09:08.620Z",
          "__v": 0
        }
        
      ]
      const[notes,setNotes] = useState(notesInitial)
    //Add a Note
    const addNote = (title, description , tag) =>{
    const  note = {
        "_id": "63dae35fcaad083ff9c62b9b",
        "user": "63d8603f3fc49f70bec66d38",
        "title": title,
        "description": description,
        "tag": tag,
        "date": "2023-02-01T22:10:39.483Z",
        "__v": 0
      };
      setNotes(notes.concat(note))
    }
    // Edit a Note
    const editNote = (id,title,description,tag) =>{

    }
    //Delete a note
    const deleteNote = (id) =>{
      //Api call
      console.log("Note deleted");
      const newNotes = notes.filter((note) => {return note._id !== id})
      setNotes(newNotes)
    }
    
    return(
        <NoteContext.Provider value={{notes , addNote, editNote, deleteNote}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;