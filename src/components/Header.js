import Button from "./Button"

const Header = (props) => {
    const goo = () => {
        alert('Hello')
    }

    return (
        <header className="header ">
            <h1>{props.title}</h1>
            <Button  text='Add' foo={goo} className=""/>
        </header>
    )
}

export default Header