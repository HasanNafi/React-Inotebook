
import React, { useContext } from 'react'
import noteContext  from "../context/notes/NoteContext.js";
import AddNote from './AddNote.js';
import NoteItems from './NoteItems.js';

const Notes = () => {
    const context = useContext(noteContext );
    // eslint-disable-next-line
    const {notes } = context;
    

  return (
    <>
    <AddNote/>
    <div className=" my-3">
        <h2>Your Notes</h2>
        <div className='row my-3'>
          {notes.map((note) => {
             return <NoteItems key={note._id} note={note}/>  
          })}
          </div>
      </div>
      </>
  )
}

export default Notes
