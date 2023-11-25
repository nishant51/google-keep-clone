import React, { useState } from 'react'
import Header from './Header'
import Createtext from './Createtext'
import Note from './Note'

const Keep = (props) => {
  const [notes,setNotes] =useState([])

  function addNote(newNote){
    setNotes((preValue) => {
      return[...preValue,newNote];
    });

  }

  function deleteNote(id){
    setNotes((preValue) =>{
      return[...preValue.filter((note,index)=>index !==id)];
    })
  }
  return (
    <>
    <Header />
    <Createtext onAdd={addNote} />
    {notes.map((note,index) =>(<Note
       key={index} 
       id={index}
       title={note.title}
       content={note.content}
       onDelete={deleteNote}
       />
    ))}
    </>
  )
}

export default Keep