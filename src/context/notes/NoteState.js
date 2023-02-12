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
        },
        {
          "_id": "63dae35fcaad083ff9c62b9b",
          "user": "63d8603f3fc49f70bec66d38",
          "title": "My work routine",
          "description": "Wake up at 7 am",
          "tag": "personal",
          "date": "2023-02-01T22:10:39.483Z",
          "__v": 0
        }
      ]


    const[notes,setNotes] = useState(notesInitial)
    return(
        <NoteContext.Provider value={{notes , setNotes}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;