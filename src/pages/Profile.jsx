import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { changeFirst, changeNameWithSome } from '../redux/appSlice'

const Profile = () => {
  const [name, setname] = useState("")
  const params = useParams()
  const {username}= params
  const firstName= useSelector((state)=>state.firstName)
  const friends = useSelector((state)=>state.friends)
  // useEffect(()=>{
  //   axios.get(`https://fakestoreapi.com/${username}`)
  // })

  const dispatch = useDispatch()
  return (
    <div>

        <h1>This is the profile page for the user {firstName} with {username}</h1>

     <h1> {friends.join(' , ')}</h1>

     <input type="text"  onChange={(e)=>setname(e.target.value)}/>


    <button onClick={()=>dispatch(changeNameWithSome(name))}>Change name with some</button>

     <button onClick={()=>dispatch(changeFirst())}>Change Name</button>

    </div>
  )
}

export default Profile