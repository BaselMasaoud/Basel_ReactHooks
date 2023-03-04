import { createContext,useContext,useState,useEffect } from "react";

export  const UserContext = createContext();


export default function UserContextProvider({children}) {

  const [users,SetUsers] = useState([]);
  const LoadUsers = async () =>{
    try {
      let res = await fetch("../public/data/users.json")
      let data = await res.json();
      console.log(data);
      SetUsers(data);

    } catch (error) {
      console.error(error);
    }
  }
  const [numOfUsers, SetNumOfUsers] = useState(3);

  useEffect(() => {
    LoadUsers();
  },[]);

  const Login = (username, password) => {
    let user = users.find((u) => u.username == username && u.password == password)
    console.log(user)
    return user;
  }

  const AddUser = (nu) => {
    nu.id = numOfUsers+1;
    SetNumOfUsers(nu.id);
    newUser = JSON.stringify(nu);
    console.log(newUser);
    SetUsers(...newUser);
  }

  // const newID = () => {
  //   SetNumOfUsers(numOfUsers+1);
  //   return numOfUsers;
  // }

  const value = {
    users,
    SetUsers,
    Login,
    AddUser

  }

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  )
}
