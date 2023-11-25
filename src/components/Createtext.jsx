import React, { useState } from 'react'


const Createtext = ({submititem,onAdd}) => {
  const[note,setNote] = useState({
    title:"",
    content:"",
});

function handlechange(e){
  const {name,value} = e.target;
  setNote((preValue) => {
    return{
      ...preValue,
      [name]:value
    };
  });
};

function submititem(event){
  setNote({
    title:"",
    content:"",
  })
  onAdd(note);
  event.preventDefault();
  

}

  return (
    <div>
      <form>
          <input value={note.title} type='text' placeholder='Title' 
          name='title' onChange={handlechange} />
          <p>
            <textarea value = {note.content} name='content'
             placeholder='Take a note.. ' onChange={handlechange}></textarea>  
          </p> 
          <button onClick={submititem}>+</button>
      </form>

    </div>
  )
}

export default Createtext