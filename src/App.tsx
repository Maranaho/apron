import { FC } from 'react'
import Users from './components/Users/Users'
import Header from './components/Header/Header'
import styles from "./styles/App.module.scss"
import "./styles/main.scss"

const App:FC = ()=> (
      <main className={styles.App}>
        <Header/>
        <Users />
      </main>
)

export default App