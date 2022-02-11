import { useState } from 'react';
import RatingSelect from './RatingSelect';
import Card from './shared/Card';
import Button from './shared/Button';

function FeedbackForm() {
	const [text, setText] = useState('');
	const [rating, setRating] = useState(10);
	const [btnDisabled, setBtnDisabled] = useState(true);
	const [msg, setMsg] = useState('');

	const handleTextChange = (e) => {
		if (text === '') {
			setBtnDisabled(true);
			setMsg(null);
		} else if (text !== '' && text.trim().length <= 10) {
			setMsg('Text must be atleast 10 characters long');
			setBtnDisabled(true);
		} else {
			setMsg(null);
			setBtnDisabled(false);
		}
		setText(e.target.value);
	};

	return (
		<Card>
			<form>
				<h2>How would you rate your service with us ?</h2>
				<RatingSelect selected={() => {}} />
				<div className="input-group">
					<input
						onChange={handleTextChange}
						type="text"
						placeholder="Write a review"
						value={text}
					/>
					<Button type="submit" isDasabled={btnDisabled}>
						Send
					</Button>
				</div>
				{msg && <div className="message">{msg}</div>}
			</form>
		</Card>
	);
}

export default FeedbackForm;
