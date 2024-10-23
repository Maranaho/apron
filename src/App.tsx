import { FC } from 'react'
import { useLocation } from "react-router-dom"
import Users from './components/Users/Users'
import Header from './components/Header/Header'
import AddUserForm from './components/AddUserForm/AddUserForm'
import Modal from './components/Modal/Modal'
import styles from "./styles/App.module.scss"
import "./styles/main.scss"

const App:FC = ()=> {

  const location = useLocation()
  const isModalOpen = location.pathname === "/add-user"

  return (
    <main className={styles.App}>
        <Header/>
        <Users />
        {isModalOpen && (
          <Modal>
            <AddUserForm/>
          </Modal>
        )}
    </main>
  )
}

export default App