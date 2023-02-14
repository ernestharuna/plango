import Button from "./Button"
import { useLocation } from "react-router-dom"

const Header = ({ title, onAdd, xyz }) => {
    const location = useLocation()
    return (
        <header className="header ">
            <h1>{title}</h1>
            {location.pathname === '/' && <Button text={xyz ? 'Close' : 'Add'} toggle={onAdd} color={xyz ? 'red' : 'green'} />}
        </header>
    )
}

export default Header