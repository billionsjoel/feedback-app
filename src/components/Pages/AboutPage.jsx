import Card from '../shared/Card';
import { Link } from 'react-router-dom';

function AboutPage() {
	return (
		<Card>
			<div className="about">
				<h1>About this page </h1>
				<p>
					This is a react app router test. Lorem ipsum dolor sit amet
					consectetur, adipisicing elit. Et rem voluptates eum maiores
					recusandae doloribus corrupti blanditiis dolorum esse dignissimos,
					iure ipsam exercitationem velit, consectetur minus a error adipisci
					cum?
				</p>
				<p>Version : 1.0.0</p>
				<p>
					<Link to="/">Back to Home</Link>
				</p>
			</div>
		</Card>
	);
}

export default AboutPage;
