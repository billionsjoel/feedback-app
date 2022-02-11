import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
import Header from './components/Header';
import FeedbackList from './components/FeedbackList';
import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm';
import feedbackData from './Data/FeedbackData';

function App() {
	const [feedback, setFeedback] = useState(feedbackData);

	const addFeedback = (newFeedback) => {
		newFeedback.id = uuidv4();
		console.log(newFeedback);
	};

	const deleteFeedback = (id) => {
		if (window.confirm('Are you sure you want to delete ?')) {
			setFeedback(feedback.filter((item) => item.id !== id));
		}
	};
	return (
		<>
			<Header />
			<div className="container">
				<FeedbackForm handleAdd={addFeedback} />
				<FeedbackStats feedback={feedback} />
				<FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
			</div>
		</>
	);
}

export default App;
