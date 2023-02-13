import Button from "./Button"

const Header = ({ title, onAdd, xyz }) => {
    return (
        <header className="header ">
            <h1>{title}</h1>
            <Button text={xyz ? 'Close' : 'Add'} toggle={onAdd} color={xyz ? 'red' : 'green'} />
        </header>
    )
}

export default Header