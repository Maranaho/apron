import { FC, ReactNode } from "react";
import styles from "./Modal.module.scss"

interface ModalProps {
    children: ReactNode
}

const Modal: FC<ModalProps> = ({ children }) => (
    <div className={styles.Modal}>
        {children}
    </div>
)

export default Modal