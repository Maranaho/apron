import { Gender, User, UID } from "../types/userTypes"
import initialUsers from "../data"
import { v4 as uid } from "uuid"

// Pretend db
let users: User[] = [...initialUsers]



//  -------------        Fetch users, filter out soft deleted   -------

const fetchUsers = (): User[] => users.filter(user => !user.isDeleted)

//  -------------        Add a user - Mandatory       -------

const addUser = (
    firstName: string,
    lastName: string,
    age: number,
    gender: Gender
): User => {
    const newUser: User = {
        id: uid(),
        firstName,
        lastName,
        age,
        gender,
        isDeleted: false,
        createdAt: Date.now(),
    }
    users.push(newUser)
    return newUser
}

// -------------        Edit a user - Mandatory     --------
const editUser = (
    id: UID,
    updatedData: Partial<Omit<User, "id" | "createdAt" | "isDeleted">>
): User | null => {
    const user = users.find(user => user.id === id)
    if (!user) return null
    Object.assign(user, updatedData)
    return user
}


/*
------    Delete a user - Mandatory    -------

Here I chose to not actually delete from the "db"
instead I chose a "soft delete" approach
    - Compliant with data retention
    - Easier data recovery

*/
const softDeleteUser = (id: UID): boolean => {
    const user = users.find(user => user.id === id)
    if (user) {
        user.isDeleted = true
        return true
    }
    return false
}

export {
    fetchUsers,
    addUser,
    editUser,
    softDeleteUser,
}