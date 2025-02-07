"use client"

import React,{useEffect,useState } from 'react';
    
function Userlist(){ 
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error,setError] = useState(null);

    useEffect(() => {
     const fetchUsers = async () => {
        try{
            const response = await fetch ('https://jsonplaceholder.typicode.com/users');
            if (!response.ok){
                throw new Error('Networ response was not ok')
            }
            const data = await response.json();
            setUsers(data);
        } catch(error){
            setError(error.message);
        }finally{
            setLoading(false)
        }
     };

     fetchUsers();
    },[]);// the empty array ensures this runs on mount.
    if (loading){
        return<p>Loading.....</p>
    }
    if (error){
        return<p>Error:{error}</p>
    }
    return(
        <div>
            <h1 className= "text-2x1  font- bold mb-4">Userlist </h1>
            <ul className = "space-y-2">
                {users.map(user =>(
                    <li key ={user.id} className="p-4 border border-gray-300 rounded">
                        {user.name}-{user.email}
                    </li>
                ))}
            </ul>
        </div>
    ) ;
}
export default Userlist;
