function Button({ children, version, type, isDasabled }) {
	return (
		<button type={type} disabled={isDasabled} className={`btn btn-${version}`}>
			{children}
		</button>
	);
}

Button.defaultProps = {
  version: 'primary',
   
};

export default Button;
