import React, { useContext, useState } from 'react'
import noteContext  from "../context/notes/NoteContext.js";

const AddNote = () => {
    const context = useContext(noteContext );
    const {addNote} = context;

    const [note, setNote] = useState ({title: "",description: "", tag :""})

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
            <input type="text" className="form-control" id="title" name="title" onChange={onChange} minLength={5} required/>
          </div>
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <input type="text" className="form-control" id="description" name="description" onChange={onChange} minLength={5} required/>
          </div>
          <div className="form-group">
            <label htmlFor="tag">Tag</label>
            <input type="text" className="form-control" id="tag" name="tag" onChange={onChange} minLength={5} required/>
          </div>
          
          <button type="submit" className="btn btn-primary" onClick={onSubmit}>Add Note</button>
        </form>
      </div>
    </div>
  )
}

export default AddNote
