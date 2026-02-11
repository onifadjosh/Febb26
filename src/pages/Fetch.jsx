import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Fetch = () => {
    const [name, setname] = useState("Pampam")
    const [number, setnumber] = useState(0)
    const [allUsers, setallUsers] = useState([])


    useEffect(() => {
        console.log("use effect ran")

        const makeRequest=async()=>{
            try {
                let data = await axios.get('https://jsonplaceholder.typicode.com/users')
                console.log(data.data);
                setallUsers(data.data)
                
            } catch (error) {
                console.log(error);
                
            }
        }

        makeRequest()
    },[name])

    //without  dependency array, use effect runs onload, amnd when any state changes in the component it runs again
    //empty dep array->onload runs, when any state changes it doesnt run
    //dep array with a state->onload it runs , it then runs when that particular state changes
  return (
    <div>

        <button className='btn btn-dark' onClick={()=>setname("Josh")}>{name}</button>

        <button className='btn btn-dark' onClick={()=>setnumber(number+1)}>{number}</button>
    </div>
  )
}

export default Fetch