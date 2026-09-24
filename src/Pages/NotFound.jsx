import { Link } from 'react-router-dom';

function NotFound() {
	return (
		<div style={{ textAlign: 'center', padding: '100px' }}>
			<h1>404 Page Not Found</h1>
			<Link to="/">Back to Home</Link>
		</div>
	);
}
export default NotFound;