import PropTypes from 'prop-types'

// Button component
const Button = ({ color, text }) => {
    const foo = () => {
        // alert('I was clicked');
    }
    return <button onClick={foo} style={{ backgroundColor: color }} className="btn">{text}</button>
}
// Component end

Button.defaultProps = {
    color: 'steelblue'
}

Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
}

export default Button