import React from 'react'
import { useState,useContext } from 'react'
import User from '../components/User';
import { UserContext } from '../contexts/UserContext';
import "../style.css"

export default function Register() {

const {SetUsers,users,newID} = useContext(UserContext);


  const [username, SetUsername] = useState('');
  const [name, SetName] = useState('');
  const [password, SetPassword] = useState();
  const [email, SetEmail] = useState('');
  const [photo, SetPhoto] = useState('');



  const RegisterUser = (event) => {
    event.preventDefault();
    let newUser = {
      id :users.length + 1,
      name: name,
      username: username,
      password: parseInt(password),
      photo: photo,
      email: email  
    }
    
    SetUsers((prev) => [...prev, newUser])
    console.log(users);
}

const CheckForm = (event) => {
  event.preventDefault();
  if(username.length < 0 || username == undefined|| name.length < 0 ||name ==  undefined || email.length < 0 || email  == undefined|| password == undefined|| photo.length < 0 || photo == undefined){
    alert("Not all fields are filled");
  }
  else{
    RegisterUser(event);
  }
}


  return (
    <>
    <section className='register-form'>
    <h1>Register : </h1>
    <form action='' onSubmit={(event => CheckForm(event))}>
        <input type="text" placeholder='name' onChange={(event) =>  SetName(event.target.value)} />
        <input type="text" placeholder='username' onChange={(event) => SetUsername(event.target.value)}/>
        <input type="email" placeholder='email address' onChange={(event) => SetEmail(event.target.value)}/>
        <input type="text" placeholder='password' onChange={(event) => SetPassword(event.target.value)}/>
        <input type="file" placeholder='picture' onChange={(event) => SetPhoto(event.target.value)}/>
        <button type="submit" class="Register">Register </button>    

    </form>
    </section>
    <h2>List Of Registered Users:</h2>
    <section className='registered-users'>
      {
        users.map((u) => 
          <User key ={u.id} user ={u} />)
        
      }
    </section>
    </>
  )
}
