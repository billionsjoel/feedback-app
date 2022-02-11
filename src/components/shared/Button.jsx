function Button({ children, version, type, isDasabled }) {
	return (
		<button type={type}  >
			{children}
		</button>
	);
}

export default Button;
