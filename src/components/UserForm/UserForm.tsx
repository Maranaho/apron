import { FC, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { Gender, User, UserFormValues } from '../../types/userTypes'
import validationSchema from '../../utils/validationSchema'

// Define the props for the UserForm component
interface UserFormProps {
    existingUser?: User 
    onSubmit: (data: User) => void
}

// UserForm component
const UserForm: FC<UserFormProps> = ({ existingUser, onSubmit }) => {
    const { register, handleSubmit, setValue, formState: { errors } } = useForm<UserFormValues>({
        resolver: yupResolver(validationSchema),
    })

    // Populate the form with existing user data if editing
    useEffect(() => {
        
        if (existingUser) {
            setValue('gender', existingUser.gender)
            setValue('firstName', existingUser.firstName)
            setValue('lastName', existingUser.lastName)
            setValue('age', existingUser.age)
        } 
    }, [existingUser, setValue])


    // Custom submit handler to convert form values to User type
    const handleFormSubmit = (data: UserFormValues) => {
        const user: User = {
            id: existingUser ? existingUser.id : '',
            firstName: data.firstName,
            lastName: data.lastName,
            age: data.age,
            gender: data.gender,
            isDeleted: false,
            createdAt: existingUser ? existingUser.createdAt : Date.now(),
        }
        onSubmit(user)
    }

    if(!existingUser)return <p>Loading user...</p>

    return (
        <form onSubmit={handleSubmit(handleFormSubmit)}>
            <div>
                <label htmlFor="gender">Gender</label>
                <select id="gender" {...register('gender')}>
                    <option value="">Select Gender</option>
                    <option value={Gender.Male}>Male</option>
                    <option value={Gender.Female}>Female</option>
                </select>
                {errors.gender && <span>{errors.gender.message}</span>}
            </div>
            <div>
                <label>First Name</label>
                <input type="text" {...register('firstName')} />
                {errors.firstName && <span>{errors.firstName.message}</span>}
            </div>
            <div>
                <label>Last Name</label>
                <input type="text" {...register('lastName')} />
                {errors.lastName && <span>{errors.lastName.message}</span>}
            </div>
            <div>
                <label>Age</label>
                <input type="number" {...register('age')} />
                {errors.age && <span>{errors.age.message}</span>}
            </div>
            <button type="submit">Submit</button>
        </form>
    )
}

export default UserForm