import { Link, useLocation } from 'react-router-dom';

const links = [
	{
		key: 1,
		to: "/",
		name: "Home",
	},
]

export default function Navbar() {
	const location = useLocation();

	return (
		<ul className="flex space-x-4">
			{links.map((link) => {
				const isActive = link.to === location.pathname;
				const className = isActive
					// active styles
					? 'text-primary border-2 border-primary bd-secondary px-4 py-2 rounded-md'
					// inactive styles
					: 'text-text hover:text-primary px-4 py-2 rounded-md';
				
				return (
					<li key={link.key} className="nav-item">
						<Link className={`${className} px-2`} to={link.to}>{link.name}</Link>
					</li>
				);
			})}
		</ul>
	);
}