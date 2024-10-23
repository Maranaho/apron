import { FC } from "react"
import AddUser from "../AddUser/AddUser"
import logo from "../../assets/svg/logo.svg"
import styles from "./Header.module.scss"

const Header:FC = () => {
    return (
        <header className={styles.Header}>
            <img
                src={logo}
                alt="users"
            />
            <AddUser/>
        </header>
    )
}
 
export default Header