import { FC, ReactNode } from "react"
import {
    Link,
    useNavigate,
    NavigateFunction
} from "react-router-dom"
import closeIcon from "../../assets/svg/close.svg"
import styles from "./Modal.module.scss"

interface ModalProps {
    children: ReactNode
}
const Modal: FC<ModalProps> = ({ children }) => {
    
    const navigate:NavigateFunction = useNavigate()

    return (
        <div
            className={styles.ModalCtn}
            onClick={()=>navigate("/")}
        >
            <section className={styles.Modal}>
                <Link
                    className={styles.closeBtn}
                    to="/"
                >
                    <img src={closeIcon} alt="close modal"/>
                </Link>
                {children}
            </section>
        </div>
    )
}

export default Modal