import React, { useContext, useState } from 'react'
import noteContext  from "../context/notes/NoteContext.js";

const AddNote = () => {
    const context = useContext(noteContext );
    // eslint-disable-next-line
    const {addNote} = context;

    const [note, setNote] = useState ({title: "",description: "", tag :"default"})

    const onSubmit = (e) =>{
        e.preventDefault();
        addNote(note.title, note.description,note.tag)
    }

    const onChange = (e) => {
        setNote({...note, [e.target.name] : e.target.value})
    }

  return (
    <div>
      <div>
        <h1>Add a note</h1>
        <form>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input type="text" className="form-control" id="title" name="title" aria-describedby="emailHelp" placeholder="Enter Title" onChange={onChange}/>
          </div>
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <input type="text" className="form-control" id="description" name="description" placeholder="Description" onChange={onChange}/>
          </div>
          <div className="form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
            <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
            
            
          </div>
          <button type="submit" className="btn btn-primary" onClick={onSubmit}>Add Note</button>
        </form>
      </div>
    </div>
  )
}

export default AddNote
