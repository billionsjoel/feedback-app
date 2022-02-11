import { useState } from 'react';
import Header from './components/Header';
import FeedbackList from './components/FeedbackList';
import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm';
import feedbackData from './Data/FeedbackData';

function App() {
	const [feedback, setFeedback] = useState(feedbackData);

	const deleteFeedback = (id) => {
		if (window.confirm('Are you sure you want to delete ?')) {
			setFeedback(feedback.filter((item) => item.id !== id));
		}
	};
	return (
		<>
			<Header />
			<div className="container">
				<FeedbackForm />
				<FeedbackStats feedback={feedback} />
				<FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
			</div>
		</>
	);
}

export default App;
