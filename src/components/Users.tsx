import { FC,useState, useEffect } from 'react'
import UserList from './UserList'
import { WaitType } from "../types/userTypes"

const User:FC = () => {
    

    // Mimick the caching behavior of React Query when fetching data from a database
    const loadTime = 1000
    let wait:WaitType
    const [loading, setLoading] = useState<boolean>(true)

    useEffect(()=>{
        const hasLoaded = localStorage.getItem('loadingInStorage')
        if(hasLoaded) setLoading(false)
        else {
            wait = setTimeout(()=>{
                localStorage.setItem('loadingInStorage', "true")
                setLoading(false)
            },loadTime)
        }
        return ()=> clearTimeout(wait)
    },[])

    return (
        <main>
            {loading?<p>Loading...</p> : <UserList />  } 
        </main>
    )
}

export default User