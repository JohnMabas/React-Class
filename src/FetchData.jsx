
import { useState, useEffect } from "react"

const FetchData = () => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        async function getUsers() {
            try {
                const res = await fetch('https://dummyjson.com/users')
                const data = await res.json()
                setUsers(data.users)
                console.log(data)
            }catch (error) {
                console.log(error.message)
            }
            
        }
        getUsers()
    },[])
  return (
    <>
   
    {
        users.map(user => {
            return (<div key={user.id}>
                <p className="text-black">{user.firstName}</p>

            </div>)
            console.log(user.age)

        })
    }
    </>
  )
}

export default FetchData