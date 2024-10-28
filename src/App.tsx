import { FC, useReducer } from 'react'
import { useLocation, useParams } from "react-router-dom"
import { UsersContext, reducer, initialState } from "./context/"
import Users from './components/Users/Users'
import Header from './components/Header/Header'
import AddUserForm from './components/AddUserForm/AddUserForm'
import Chat from './components/Chat/Chat'
import DeleteUserModal from './components/DeleteUserModal/DeleteUserModal'
import Modal from './components/Modal/Modal'
import Notifications from './components/Notifications/Notifications'
import styles from "./styles/App.module.scss"
import "./styles/main.scss"

const App:FC = ()=> {
  const [state,dispatch] = useReducer(reducer,initialState)
   
  const location = useLocation()
  const { userid } = useParams<{ userid: string | undefined }>()
  const openAddNewUser = location.pathname === "/add-user"
  const openEditUser = location.pathname === `/edit-user/${userid}`
  const openDeleteUser = location.pathname === `/delete-user/${userid}`

  return (
    <UsersContext.Provider value={{state,dispatch}}>
      <main className={styles.App}>
          <Header/>
          <Users />
          {(openAddNewUser || openEditUser) && <Modal><AddUserForm/></Modal>}
          {openDeleteUser && <Modal><DeleteUserModal/></Modal>}
          <Notifications />
          <Chat/>
      </main>
    </UsersContext.Provider>
  )
}

export default App