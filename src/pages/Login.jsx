import React from 'react'
import { useContext,useState } from 'react'
import { UserContext } from '../contexts/UserContext'
import User from '../components/User'
import { useNavigate } from 'react-router-dom'
import "../index.css"


export default function Login() {

  const {Login} = useContext(UserContext);
  const {users} = useContext(UserContext); 

  const navigation = useNavigate();


  const [username, SetUsername] = useState('');
  const [password, SetPassword] = useState('');

  const UserLogin = (event) => {
  event.preventDefault(); 
  let user = Login(username,password);
  if (user != undefined){
    alert(`Welcome Back ${user.name}`);
    navigation(`/profile/${user.id}`) 
  }
  else{
    alert('User Not Found');
  }
}




  return (
    <>

  <div class="login-form">
  <form onSubmit={UserLogin}> 
    <h1>Login</h1>
    <div class="content">
      <div class="input-field">
        <input type="text" placeholder="UserName" onChange={(event) => SetUsername(event.target.value)} />
      </div>
      <div class="input-field">
        <input type="password" placeholder="Password" onChange={(event) => SetPassword(event.target.value)} />
      </div>
    </div>
    <div class="action">
      <button>Login</button>
    </div>
  </form>
</div>
<script  src="./script.js"></script>

</>
  )

}