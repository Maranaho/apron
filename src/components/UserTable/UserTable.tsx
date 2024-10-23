import { FC } from 'react'
import { useQuery } from '@tanstack/react-query'
import { fetchUsers } from '../../api/userApi'
import { User } from '../../types/userTypes'
import UserRow from "../UserRow/UserRow"
import Thead from "../Thead/Thead"
import styles from "./UserTable.module.scss"



const UserTable: FC = () => {
    
    // Fetching users using React Query
    const { data: users, error, isLoading } = useQuery<User[], Error>({
        queryKey: ['users'],
        queryFn: fetchUsers,
    })

    if (error) return <div>Error fetching users: {error.message}</div>
    if (isLoading || !users) return <div>Loading...</div>

    return (
        <section className={styles.UserTableCtn}>
            <table
                className={styles.UserTable}
                cellSpacing={0}
                cellPadding={0}
                >
                <Thead/>
                <tbody>
                    {users.length > 0 ? (
                        users.map(user => <UserRow key={user.id} user={user}/>)
                    ):(
                        <tr><td colSpan={5}>No users add users</td></tr>
                    )}
                </tbody>
            </table>
        </section>
    )
}

export default UserTable
