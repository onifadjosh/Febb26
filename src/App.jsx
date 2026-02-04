// import React, { useState } from 'react'
// import Button from './components/Button'
// import Navbar from './components/Navbar'

// const App = () => {

//   let designObj={color:"red", backgroundColor:"blue"}
//   let nameOfUser = "Pampam"

//   const pressMe=()=>{
//     // alert(`this button has been pressed by `)
//    setnum(num+1)
//   }

//   // const [first, setfirst] = useState(second)

//   const [num, setnum] = useState(0)
//   const [name, setname] = useState('Pampam')
//   return (
//     <>
//     <Navbar/>
//       <h1 style={designObj}>My first React app</h1>



//       <h1 className='bg-primary text-warning'>{nameOfUser}</h1>

//       <Button/>
//       <Button/>
//       <Button/>
//       <Button/>
//       <Button/>
//       <Button/>
//       <Button/>
//       <Button/>
//       <Button/>



//       <button  className='btn btn-dark' onClick={()=>setnum(num+1)}>
//        {num}
//       </button>


//       <h1>{name}</h1>


//       <button className='btn btn-dark' onClick={()=>setname("Josh")}>
//         click me to change name
//       </button>
//     </>
//   )
// }

// export default App

import React, { useState } from 'react'
import Button from './components/Button'
import AddUser from './components/AddUser'
import DisplayUser from './components/DisplayUser'

const App = () => {
 
  const [allUsers, setallUsers] = useState([])



  // const seeValue=(event)=>{
  //   console.log(event.target.value);
  //   setfirstName(event.target.value)
  // }

  const submitUser=(user)=>{
    // console.log('heelo');
    // let user = {
    //   firstName,
    //   lastName,
    //   email,
    //   profilePicture
    // }
    console.log(user);

    let fruits = ['mango', 'agbalumo', 'orange']
    let newFruits = [...fruits, 'Grape']
    let newAllUsers= [...allUsers,user ]
    setallUsers(newAllUsers)
  }


  const deleteUser=(index)=>{
    let newAllUsers= [...allUsers]
    newAllUsers.splice(index, 1)
    setallUsers(newAllUsers)
  }

  const editUser=(index, user)=>{
    // let user = {
    //   firstName,
    //   lastName,
    //   email,
    //   profilePicture
    // }
    let newAllUsers= [...allUsers]
    newAllUsers.splice(index, 1, user)
    setallUsers(newAllUsers)
  }

  const shout=(name)=>{
    alert(`shoutinggggggggggggggg ${name}`)
  }
  return (
    <>


    <Button title="Stop" color="btn-danger" func={shout}/>
    <Button title="Go" color="btn-success"/>
    <Button title="Get ready" color="btn-warning"/>

    <br />
   

  <AddUser submitUser={submitUser}/>  

   <hr />

 

      <DisplayUser allUsers={allUsers} deleteUser={deleteUser} editUser={editUser}/>








    </>
  )
}

export default App