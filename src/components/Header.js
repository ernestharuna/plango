import Button from "./Button"

const Header = (props) => {
    const foo = () => {
        alert('Hello')
    }

    return (
        <header className="header">
            <h1>{props.title}</h1>
            <Button color='green' text='Add' foo='foo' />
        </header>
    )
}

export default Header