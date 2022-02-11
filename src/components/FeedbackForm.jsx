import Card from './shared/Card';

function FeedbackForm() {
	return (
		<Card>
			<form>
				<h2>How would you rate your service with us ?</h2>
				{/*@todo - rating select component */}
				<div className="input-group">
					<input type="text" name="" id="" />
				</div>
			</form>
		</Card>
	);
}

export default FeedbackForm;
