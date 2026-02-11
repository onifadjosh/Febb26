import React from 'react'
import { useNavigate } from 'react-router-dom'

const NotFound = () => {
    const navigate = useNavigate()
  return (
    <div>
        <h1>Where User dey carry me go, I no sabi</h1>

        <button className='btn btn-dark' onClick={()=>navigate('/', {replace:true})}>Go Back Home</button>
    </div>
  )
}

export default NotFound