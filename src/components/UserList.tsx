import { FC } from 'react'
import { useQuery } from '@tanstack/react-query'
import { fetchUsers } from '../api/userApi'
import { User } from '../types/userTypes'

const UserList:FC = () => {

    const { data: users, error, isLoading } = useQuery<User[], Error>({
        queryKey: ['users'],
        queryFn: fetchUsers,
    })

    if (error) return <div>Error fetching users: {error.message}</div>
    if (isLoading || !users) return <div>Loading...</div>

    return (
        <ul>
            {users.length > 0 ? (
                users.map(user => (
                    <li key={user.id}>
                        {user.firstName} {user.lastName} - Age: {user.age} - Gender: {user.gender}
                    </li>
                ))
            ):<li>No users found.</li>}
        </ul>
    )
}

export default UserList