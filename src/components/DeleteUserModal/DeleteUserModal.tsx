import { FC, useEffect, useState } from "react"
import useDeleteUser from "../../hooks/useDeleteUser"
import { User } from "../../types/userTypes"
import { useParams, useNavigate, Link } from "react-router-dom"
import initialUsers from "../../data" 

const DeleteUserModal: FC = () => {
    const navigate = useNavigate()
    const { userid } = useParams<{ userid: string | undefined }>()
    const { mutate: deleteUser } = useDeleteUser()

    // State to hold the user data
    const [user, setUser] = useState<User | undefined>(undefined)

    // Fetch the user data based on userid
    useEffect(() => {
        if (userid) {
            const storedUsers = localStorage.getItem('users')
            const users: User[] = storedUsers ? JSON.parse(storedUsers) : initialUsers
            const fetchedUser = users.find(user => user.id === userid)
            setUser(fetchedUser)
        }
    }, [userid])

    const handleDelete = (): void => {
        if (userid) {
            deleteUser(userid)
            navigate("/")
        }
    }

    return (
        <div>
            <h1>Are you sure you want to delete {user ? user.firstName : "this user"}?</h1>
            {userid && <button onClick={handleDelete}>Yes</button>}
            <Link className="btn secondary" to="/">Cancel</Link>
        </div>
    )
}

export default DeleteUserModal