import React from 'react'

// define a user interface and then annotate it with users as User[]
interface User {
    id:number,
    name:string
    // and so on
}


const UsersPage = async () => {
 const res = await fetch('https://jsonplaceholder.typicode.com/users')
 const users: User[] = await res.json();

  return (

    <div>
        {/* {users.map(user.)}  (after dot it'll generate unless the users interface is not defined) */}
        {users.map(user=> <li key={user.id}>{user.name}</li>)}
      
    </div>
  )
}

export default UsersPage
