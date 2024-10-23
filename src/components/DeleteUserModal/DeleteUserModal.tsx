import { FC, useEffect, useState } from "react"
import UserForm from "../UserForm/UserForm"
import useDeleteUser from "../../hooks/useDeleteUser"
import { User, UserFormValues } from "../../types/userTypes"
import { useParams } from "react-router-dom"

const DeleteUserModal: FC = () => {
    const { userid } = useParams<{ userid: string }>()
    const { mutate: deleteUser } = useDeleteUser()

    return <p>useDeleteUser</p>
}

export default DeleteUserModal