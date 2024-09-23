import Navbar from './Navbar';

export default function Header() {
	return (
		<nav className='bg-secondary'>
			<div className='max-w-7xl px-2'>
				<div className='relative flex h-16 items-center justify-between'>
					<div className='flex flex-1 items-center justify-center md:items-stretch md:justify-start'>
						<div className='md:ml-6 md:block'>
							<Navbar/>
						</div>
					</div>
				</div>
			</div>
		</nav>
	);
}