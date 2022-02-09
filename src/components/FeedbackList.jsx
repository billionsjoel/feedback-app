import FeedbackItem from './FeedbackItem';

function FeedbackList({ feedback }) {
	if (!feedback || feedback.length === 0) {
		return <p>No feedback at the moment.</p>;
	}
	return (
		<div className="feedback-list">
			{feedback.map((item) => (
				<FeedbackItem
					key={item.id}
					item={item}
					handleDelete={(id) => console.log(id)}
				/>
			))}
		</div>
	);
}

export default FeedbackList;
