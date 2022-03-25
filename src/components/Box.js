import React, {useEffect, useState} from 'react'

const Box = () => {
    const[med, setmed]= useState([]);
    const fetchData=()=>fetch("https://dev.dashmed.in/sample-data").then((response)=>{return response.json();}).then((data)=>{
        let maindata= data.data;
    setmed(maindata)})
 useEffect(()=>{
     fetchData();
 },[])
    return (
        <>
        {med.map(data=>(
    <div className='box'>
        <h2>{data.medName}</h2>
        <div className='secondary'>
        <p className='secpara'><span>Salt name: </span> {data.saltName}</p>
        <p className='secpara'><span>Manufacturer: </span> {data.manufacturer}</p>
        </div>
    </div>
    ))}
    </>
  )
}

export default Box