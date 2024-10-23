import { FC } from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import App from "../../App"

const paths = [
    "/",
    "/add-user",
    "/edit-user/:userid",
    "/delete-user/:userid",
]

const AppRoutes: FC = () => {

    return (
        <Router>
            <Routes>
                {paths.map(path => <Route key={path} path={path} element={<App />} />)}
            </Routes>
        </Router>
    )
}

export default AppRoutes