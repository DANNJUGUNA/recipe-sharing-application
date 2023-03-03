import React, {useState}from 'react'
import TopBar from"../../components/topbar/TopBar"
import"./up.css"
const UpdateRecipe = () => {

    const[formData,setFormData]=useState({
        name:"", instructions:"", description:""
    })
    const handleOnChange = (event)=> {
        const fieldName=event.target.name;
        const fieldValue= event.target.value
        const newFormData={...formData};
        newFormData[fieldName]=fieldValue;
        setFormData(newFormData);
      }
  return (
    <> 
    <TopBar/>
     <div className='formdiv'>
    <form className='form'>
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

      <button className='createrecipe' type="submit">Update Recipe</button>
    </form>
    </div> 
    </>
  )
}

export default UpdateRecipe