import { useState } from 'react';
import Card from './shared/Card';
import Button from './shared/Button';

function FeedbackForm() {
	const [text, setText] = useState('');
	const [btnDisabled, setBtnDisabled] = useState(true);
	const [msg, setMsg] = useState('');

	const handleTextChange = (e) => {
		setText(e.target.value);
	};

	return (
		<Card>
			<form>
				<h2>How would you rate your service with us ?</h2>
				{/*@todo - rating select component */}
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
			</form>
		</Card>
	);
}

export default FeedbackForm;
