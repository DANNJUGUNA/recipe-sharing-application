import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import"./card.css"
const Card = ({ingridient,id}) => {
  const[name,setname]=useState("")
  fetch(`http://localhost:9292/recipe/${ingridient.recipe_id}`)
  .then((response)=>response.json())
  .then((data)=>setname(data.name))
    const handleDelete=()=>{
        fetch(`http://localhost:9292/ingridients/${id}`, {
      method: "DELETE",
    });
    }
  return (
  
    <div  >
    <div className='col-6  ' id='card' >
        <dl>
            <dt>Name</dt>
            <dd>{ingridient.name}</dd>
            <dt>Quantity:</dt>
            <dd>{ingridient.quantity}</dd>
            <dt>Recipe used in-:</dt>
            <dd>{name}</dd>
        </dl>
        <div className="buttons">
    <span 
      className="button">Update</span>
      <span 
      className="button" onClick={handleDelete}>Delete</span>
    </div> 
        
    </div>
    
    </div>
    
  )
}

export default Card