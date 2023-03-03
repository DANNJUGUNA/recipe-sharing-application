import React from 'react'
import { useState } from 'react';
import"./form.css"
import {  useNavigate } from "react-router-dom";
const RecipeForm = () => {
  const navigate=useNavigate();
  const[formData,setFormData]=useState({
    name:"", instructions:"", description:""
})
const handleSubmit=(event)=>{
  event.preventDefault();
  postData(formData)
 }  
const postData=(data)=>{
  fetch("http://localhost:9292/recipe",{
    method:"POST",
    headers: {
        "Content-Type": "application/json", 
        "Accept": "application/json",
     },
     body:JSON.stringify(data)
  }) .then((response)=>response.json())
  .then(data=>console.log(data))
  setTimeout(() => navigate('/recipe'), 100); 
}
const handleOnChange = (event)=> {
  const fieldName=event.target.name;
  const fieldValue= event.target.value
  const newFormData={...formData};
  newFormData[fieldName]=fieldValue;
  setFormData(newFormData);
}
  return (
    <div className='formdiv'>
    <form className='form' onSubmit={handleSubmit}>
      <label className='lable'>Name:</label>
      <input className='nameinput'
        type="text"
        id="name"
        name='name'
        placeholder='Recipe name'
        onChange={handleOnChange}
      />

      <label className='lable'>Description:</label>
      <input className='nameinput'
      type="text"
        id="description"
        name='description'
        placeholder='Description'
        onChange={handleOnChange}
      />
      <label className='lable'>Instructions:</label>
      <textarea className='instructionsinput'
        id="instructions"
        name='instructions'
        placeholder='Instructions'
        onChange={handleOnChange}
      />

      <button className='createrecipe' type="submit">Create Recipe</button>
    </form>
    </div>
  )
}

export default RecipeForm