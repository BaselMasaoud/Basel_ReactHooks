import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useContext } from 'react'
import { UserContext } from '../contexts/UserContext'
import User from '../components/User'
import "../style2.css"


export default function Profile() {

    const {users} = useContext(UserContext);
    //const [user,SetUser] =useState();
    useEffect(() => {
        console.log("Profile")
        //FindUser();
    },[])

    const {id} = useParams();
    // const FindUser = () =>{
    //     SetUser(users.find((u) => u.id == id)); // לוקח לזה פעמיים להתעדכן
    //     if(user!=undefined){
    //         console.log("User Found:");
    //         console.log(user);
    //     }
    //     else{
    //         console.log("NOT FOUND")
    //         console.log(id)
    //         console.log(user)
    //     }
    // }
    return (
    <>
    {
        <>
        
            <h1>Welcome To Profile {(users.find((u) => u.id == id)).name}</h1>
            <User user ={users.find((u) => u.id == id)}/>
           
        </>
    }
    </>
)
}
