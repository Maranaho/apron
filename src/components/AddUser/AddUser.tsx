import { FC } from 'react'
import { Gender } from "../../types/userTypes"
import { useAddUser } from "../../hooks"
import plusIcon from "../../assets/svg/add.svg"

const AddUser: FC = () => {
    // Use the custom hook for adding users
    const { mutate: addUser } = useAddUser()

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
        <button
            onClick={handleAddUser}
            className='btn primary'
        >
            <img src={plusIcon} alt="add user"/>
            <span>Add New User</span>
        </button>
    )
}

export default AddUser