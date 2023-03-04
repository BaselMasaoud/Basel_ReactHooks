import React from 'react'
import { useContext,useState } from 'react'
import { UserContext } from '../contexts/UserContext'

export default function User({user}) {


  return (
       <div class="main">
        <h2>User Profile : </h2>
        <div class="card">
            <div class="card-body">
                <i class="fa fa-pen fa-xs edit"></i>
                <table>
           
           <tbody>
    
               <tr>
                   <td> ID  </td>
                   <td>:</td>
                   <td> {user.id}</td>
               </tr>
               <tr>
                   <td>Name </td>
                   <td>:</td>
                   <td> {user.name}</td>
               </tr>
               <tr>
                   <td>Email  </td>
                   <td>:</td>
                   <td> {user.email}</td>
               </tr>
               <tr>
                   <td>Username </td>
                   <td>:</td>
                   <td> {user.username}</td>
               </tr>
               <tr>
                   <td>photo</td>
                   <td>:</td>
              </tr>
           </tbody>
           <img src={user.photo} alt="" border="3" height="100" width="100" />

       </table>            
       </div>
        </div>
    </div>


     
  )
}


   