import React from 'react'
import { useState } from 'react';
import"./form.css"
const RecipeForm = () => {
    // const [formData, setFormData] = useState('');
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
  
    const handleSubmit = async (event) => {
      event.preventDefault();
      //const response = await axios.post('/api/recipes', { name, description });
      console.log();
    };
  return (
    <div className='formdiv'>
    <form className='form'
    onSubmit={handleSubmit}>
      <label className='lable'>Name:</label>
      <input className='nameinput'
        type="text"
        id="name"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />

      <label className='lable'>Description:</label>
      <input className='nameinput'
      type="text"
        id="description"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />
      <label className='lable'>Instructions:</label>
      <textarea className='instructionsinput'
        id="description"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />

      <button className='createrecipe' type="submit">Create Recipe</button>
    </form>
    </div>
  )
}

export default RecipeForm