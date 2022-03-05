import { createContext, useState } from 'react';

const feedBackContext = createContext();

export const feedBackProvider = (children) => {
	const [feedback, setFeedBack] = useState([
		{
			id: 1,
			text: 'This item is from context',
			rating: 10,
		},
	]);
	return (
		<feedBackContext.Provider value={{ feedback }}>
			{children}
		</feedBackContext.Provider>
	);
};

export default feedBackContext;