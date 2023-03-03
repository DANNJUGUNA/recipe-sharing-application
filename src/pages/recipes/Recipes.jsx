import React, { useEffect, useState } from 'react'
import Card from '../../components/card/Card'

import"./recipe.css"
const Recipes = () => {
  const[recipes,setRecipes]=useState([])
    useEffect(()=>{
        fetch("http://localhost:9292/recipe")
        .then((response)=>response.json())
     .then((data)=>setRecipes(data))
    },[])
    console.log(recipes)
  return (
    <>
    
    <div  className='row col-12 border border-danger  m-1 '>{
    recipes.map((recipe)=>{
        return(
        <Card key={recipe.id} recipe={recipe} id={recipe.id}/>
        )
    })
    }
    </div>
    </>
  )
}

export default Recipes