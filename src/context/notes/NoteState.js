import NoteContext from "./NoteContext";
import React,{useState} from "react";

const NoteState = (props) => {
  const host = "http://localhost:5000"
    const notesInitial = []
      const[notes,setNotes] = useState(notesInitial)


    //==========================================get all Note========================================
    const getAllNote = async () =>{
      //Api call
      const response = await fetch(`${host}/api/notes/fetchallnotes`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'auth-token': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNkODYwM2YzZmM0OWY3MGJlYzY2ZDM4In0sImlhdCI6MTY3NTEyOTE5N30.nboP94CZ72rHcDmTu6QFN8oDVQNJckUItsdDQiM-VGw"
        },
        });

        const json = await response.json();
        console.log(json);
        setNotes(json)
    }


    //==========================================Add a Note========================================
    const addNote = async (title, description , tag) =>{
      //Api call
      const response = await fetch(`${host}/api/notes/addnote`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'auth-token': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNkODYwM2YzZmM0OWY3MGJlYzY2ZDM4In0sImlhdCI6MTY3NTEyOTE5N30.nboP94CZ72rHcDmTu6QFN8oDVQNJckUItsdDQiM-VGw"
        },
        body: JSON.stringify({title, description , tag})
        });
        // eslint-disable-next-line
        const json = response.json();

        console.log("adding a new note");
        // Logic for adding notes
        const  note = {
          "_id": "63f013abcfd73c43935ec086",
          "user": "63d8603f3fc49f70bec66d38",
          "title": title,
          "description": description,
          "tag": tag,
          "date": "2023-02-17T23:54:19.006Z",
          "__v": 0
          };
        setNotes(notes.concat(note))
    }
    // ============================================Edit a Note====================================
    const editNote = async (id,title,description,tag) =>{
      //Api call
      const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'auth-token': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNkODYwM2YzZmM0OWY3MGJlYzY2ZDM4In0sImlhdCI6MTY3NTEyOTE5N30.nboP94CZ72rHcDmTu6QFN8oDVQNJckUItsdDQiM-VGw"
        },
        body: JSON.stringify(title,description,tag)
        });
        // eslint-disable-next-line
        const json =  response.json();
      

      //Logic to edit
      for (let index = 0; index<notes.length; index++){
        const element = notes[index];
        if (element._id === id){
          element.title = title;
          element.description = description;
          element.tag = tag;
          setNotes(element)
        }
        }

    }
    //=========================================Delete a note======================================
    const deleteNote = async (id) =>{
      //Api call
      const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'auth-token': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNkODYwM2YzZmM0OWY3MGJlYzY2ZDM4In0sImlhdCI6MTY3NTEyOTE5N30.nboP94CZ72rHcDmTu6QFN8oDVQNJckUItsdDQiM-VGw"
        },
        });
        // eslint-disable-next-line
        const json =  response.json();


      console.log("Note deleted");
      const newNotes = notes.filter((note) => {return note._id !== id})
      setNotes(newNotes)
    }
  
    
    return(
        <NoteContext.Provider value={{notes , addNote, editNote, deleteNote,getAllNote}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;