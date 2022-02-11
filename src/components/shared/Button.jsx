import PropTypes from 'prop-types'

function Button({ children, version, type, isDasabled })
{
	return (
		<button type={type} disabled={isDasabled} className={`btn btn-${version}`}>
			{children}
		</button>
	);
}

Button.defaultProps = {
  version: 'primary',
  type: 'button',
   isDasabled: false,
};

export default Button;
