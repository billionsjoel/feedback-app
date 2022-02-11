import { motion, animatePresence } from 'framer-motion';
import FeedbackItem from './FeedbackItem';

function FeedbackList({ feedback, handleDelete }) {
	if (!feedback || feedback.length === 0) {
		return <p>No feedback at the moment.</p>;
	}
	return (
		<div className="feedback-list">
			<animatePresence>
				{feedback.map((item) => (
					<motion.div key={item.id}>
						<FeedbackItem
							key={item.id}
							item={item}
							handleDelete={handleDelete}
						/>
					</motion.div>
				))}
			</animatePresence>
		</div>
	);
	//return (
	//	<div className="feedback-list">
	//		{feedback.map((item) => (
	//			<FeedbackItem key={item.id} item={item} handleDelete={handleDelete} />
	//		))}
	//	</div>
	//);
}

export default FeedbackList;
