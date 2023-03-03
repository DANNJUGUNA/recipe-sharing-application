import React from 'react'
import { Link } from 'react-router-dom';
import UpdateRecipe from '../../pages/updaterecipe/UpdateRecipe';
import TopBar from '../topbar/TopBar';

import"./card.css"
const Card = ({recipe,id}) => {
    const handleDelete=()=>{
        fetch(`http://localhost:9292/recipe/${id}`, {
      method: "DELETE",
    });
    }
  return (
  
    
    <div className="col-6 p-6 m-0 rounded-5 border border-danger mb-2"  id='card' >
        <dl>
            <dt>Name</dt>
            <dd>{recipe.name}</dd>
            <dt>Description:</dt>
            <dd>{recipe.description}</dd>
            <dt>Instructions-:</dt>
            <dd>{recipe.instructions}</dd>
        </dl>
        <div className="buttons">
    {/* <span
      className="button" href="../../pages/updaterecipe/UpdateRecipe">Update</span> */}
      <span 
      className="button" onClick={handleDelete}>Delete</span>
    </div> 
        
    </div>
    
    
    
  )
}

export default Card