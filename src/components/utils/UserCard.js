import React from 'react'

function UserCard({pic,name,email}) {
    return (

        <div className="text-md font-bold flex items-center space-x-4 text-blue-900 px-2 py-2 shadow-xl">
        <img src={pic} className="h-12 w-12 rounded-full" alt={name}/>
        <span>Name: {name}</span>
        <span className="font-normal text-green-900">Email: {email}</span>
        </div>
    )
}

export default UserCard
