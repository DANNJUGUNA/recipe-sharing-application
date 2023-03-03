import React from 'react'
import Card from '../../components/card1/Card1'
import TopBar from '../../components/topbar/TopBar'
import { useEffect, useState } from 'react'

const Ingridients = () => {
    const[ingridients,setingridients]=useState([])
    useEffect(()=>{
      fetch("http://localhost:9292/ingridients")
      .then((response)=>response.json())
    .then((data)=>setingridients(data))
  },[])
  return (
   <>
   
   <div className='row col-12 border border-danger  m-1 '>
    {
      ingridients.map((ingridient)=>{
       return(
        <Card key={ingridient.id} id={ingridient.id} ingridient={ingridient}/>
       )
      })
    }
   </div>
   </>
  )
}

export default Ingridients