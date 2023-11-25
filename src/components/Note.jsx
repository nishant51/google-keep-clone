import React, { useState } from 'react'
import { MdDeleteSweep } from "react-icons/md";


const Note = ({title,content,onDelete,id}) => {

  return (
    <div className='note'>
        <h1>{title}</h1>
        <p>{content}</p>
        <button onClick={()=>onDelete(id) }><MdDeleteSweep size={30} />
        </button>
    </div>
  )
}

export default Note