import React from 'react'
import { useState } from 'react';
import"./form.css"
import {  useNavigate } from "react-router-dom";
const IngridientForm = () => {
  const navigate=useNavigate();
    // const [formData, setFormData] = useState('');
    const[formData,setFormData]=useState({
      name:"",
       quantity:0,
       recipe_id:0
  })
  const handleSubmit=(event)=>{
    event.preventDefault();
    postData(formData)
   } 
  const postData=(data)=>{
    fetch("http://localhost:9292/ingridients",{
      method:"POST",
      headers: {
          "Content-Type": "application/json", 
          "Accept": "application/json",
       },
       body:JSON.stringify(data)
    }) .then((response)=>response.json())
    .then(data=>console.log(data))
   setTimeout(() => navigate('/ingridients'), 100); 
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
    <form className='form'
    onSubmit={handleSubmit}>
      <label className='lable'>Name:</label>
      <input className='nameinput'
        type="text"
        id="name"
        name='name'
        placeholder='Ingridient name'
        onChange={handleOnChange}
      />

      <label className='lable'>Quantity:</label>
      <input className='nameinput'
      type="number"
        id="quantity"
        min={0}
        placeholder="0"
        name="quantity"
        onChange={handleOnChange}
      />
      <label className='lable'>Recipe Id:</label>
      <input className='nameinput'
        id="recipeid"
        name='recipe_id'
        placeholder='Recipe id'
        onChange={handleOnChange}
      />

      <button className='createrecipe' type="submit">Add Ingridients</button>
    </form>
    </div>
  )
}

export default IngridientForm