import { useState, createContext } from "react";
import React from 'react'
import Component2 from "./Component2";
export const UserContext = createContext();
export default function Context() {
    const [user, setUser] = useState("Jesse Hall");
  return (
    <div>
        <UserContext.Provider value={{user,setUser}}>
      <h1>{`Hello ${user}!`}</h1>
      <Component2/>
    </UserContext.Provider>
    </div>
  )
}
