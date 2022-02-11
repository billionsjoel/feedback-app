function FeedbackStats({ feedback }) {
	//calculate avg rating

	let Average =
		feedback.reduce((acc, cur) => {
			return acc + cur.rating;
		}, 0) / feedback.length;

	return (
		<div className="feedback-stats">
			<h4>{feedback.length} Reviews</h4>
			<h4>Average Rating: 10</h4>
		</div>
	);
}

export default FeedbackStats;
