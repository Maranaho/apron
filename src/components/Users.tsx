import { FC, useState, useEffect } from 'react'
import UserList from './UserList'
import { WaitType, Gender } from "../types/userTypes"
import { useAddUser } from '../hooks'

const User: FC = () => {

    // Mimic the caching behavior of React Query when fetching data from a database
    const loadTime = 1000
    let wait: WaitType
    const [loading, setLoading] = useState<boolean>(true)
    
    // Use the custom hook for adding users
    const { mutate: addUser } = useAddUser()

    useEffect(() => {
        const hasLoaded = localStorage.getItem('loadingInStorage')
        if (hasLoaded) setLoading(false)
        else {
            wait = setTimeout(() => {
                localStorage.setItem('loadingInStorage', "true")
                setLoading(false)
            }, loadTime)
        }
        return () => clearTimeout(wait)
    }, [])

    //Just testing CRUDS better UX later
    // Temporary function to prompt user input for a new user
    const handleAddUser = () => {
        const firstName = prompt("Enter first name:")
        const lastName = prompt("Enter last name:")
        const ageString = prompt("Enter age:")

        if (firstName && lastName && ageString) {
            const age = parseInt(ageString, 10)
            if (!isNaN(age)) addUser({ firstName, lastName, age, gender: Gender.Male })
            else  alert("Please enter a valid age.")
        }
    }

    return (
        <main>
            <button onClick={handleAddUser}>Add New User</button>
            {loading ? <p>Loading...</p> : <UserList />}
        </main>
    )
}

export default User