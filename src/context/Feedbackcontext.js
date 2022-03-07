import { createContext, useState } from 'react';

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
	const [feedback, setFeedBack] = useState([
		{
			id: 1,
			text: 'This item is from context',
			rating: 10,
		},
  ]);

  setFeedBack();
	return (
		<FeedbackContext.Provider value={{ feedback }}>
			{children}
		</FeedbackContext.Provider>
	);
};

export default FeedbackContext;