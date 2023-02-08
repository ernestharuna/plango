import PropTypes from 'prop-types'

// Button component
const Button = ({ color, text, foo }) => {
    return (
        <button onClick={foo} className="btn btn-danger">{text}</button>
    )
}
// Component end

Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    foo: PropTypes.func,
}

export default Button