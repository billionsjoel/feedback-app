import { FaQuestionCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
function AboutLinkIcon() {
	return (
		<div className="about-link">
			<Link to="/about">
				<FaQuestionCircle size={30} />
			</Link>
		</div>
	);
}

export default AboutLinkIcon;
