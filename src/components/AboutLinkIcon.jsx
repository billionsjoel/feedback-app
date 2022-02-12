import { FaQuestionCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
function AboutLinkIcon() {
	return (
		<div className="about-link">
			<a href="/about">
				<FaQuestionCircle size={30} />
			</a>
		</div>
	);
}

export default AboutLinkIcon;
