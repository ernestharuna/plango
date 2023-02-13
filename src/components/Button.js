import PropTypes from 'prop-types'

// Button component
const Button = ({ text, toggle, color }) => {
    return (
        <button className="btn" onClick={toggle} style={{ backgroundColor: color }}>
            {text}
        </button>
    )
}
// Component end

Button.propTypes = {
    text: PropTypes.string,
    toggle: PropTypes.func,
    color: PropTypes.string,
}

export default Button