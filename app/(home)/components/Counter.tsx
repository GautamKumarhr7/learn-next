'use client';
import {useState} from "react";

const Counter = () => {
    const [users, setUsers] = useState(0);
    const handleIncrement = () =>{
      setUsers(users=> users+1);
    };
    const handleDecrement = () =>{
      if(users>0)setUsers(users => users-1);
    };
    return (
        <div style={{margin:"10px",padding:10,alignItems:"center", width:"100vw", display:"flex",justifyContent:"center"}} className="container">
            <button style={{margin:"20px"}} onClick={handleDecrement}>Decrement</button>
            <h1>Users: {users}</h1>
            <button style={{margin:"20px"}} onClick={handleIncrement}>Increase</button>
        </div>
    )
}

export default Counter;