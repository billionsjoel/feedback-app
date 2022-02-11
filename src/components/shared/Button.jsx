function Button({ children, version, type, isDasabled }) {
	return (
		<button type={type} disabled={isDasabled} >
			{children}
		</button>
	);
}

export default Button;
