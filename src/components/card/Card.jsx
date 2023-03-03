import React from 'react'
import { Link } from 'react-router-dom'
import"./card.css"
const Card = ({recipe,id}) => {
    const handleDelete=()=>{
        fetch(`http://localhost:9292/recipe/${id}`, {
      method: "DELETE",
    });
    }
  return (
  
    <div  >
    <div className='col-6  ' id='card' >
        <dl>
            <dt>Name</dt>
            <dd>{recipe.name}</dd>
            <dt>Description:</dt>
            <dd>{recipe.description}</dd>
            <dt>Instructions-:</dt>
            <dd>{recipe.instructions}</dd>
        </dl>
        <div className="buttons">
    <span 
      class="button">Update</span>
      <span 
      class="button" onClick={handleDelete}>Delete</span>
    </div> 
        
    </div>
    
    </div>
    
  )
}

export default Card