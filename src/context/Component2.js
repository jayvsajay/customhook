import React ,{useContext}from 'react'
import { UserContext } from './Context';
export default function Component2() {
        const user = useContext(UserContext);

      
        return (
          <>
            <h1>Component 5</h1>
            <h2>{`Hello ${user.user} again!`}</h2>
            <button onClick={()=>user.setUser("jayvs")}>Change name</button>
          </>
        );
      }