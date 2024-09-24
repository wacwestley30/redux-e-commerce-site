import { useState } from 'react';
import Navbar from './Navbar';
import FilterModal from './FilterModal';

export default function Header() {
	const [isModalOpen, setModalOpen] = useState(false);
  
	return (
		<nav className='bg-secondary'>
			<div className='max-w-7xl px-2'>
				<div className='relative flex md:h-16 items-center justify-between'>
					<div className='flex flex-1 items-center text-center justify-center md:items-stretch md:justify-start'>
						<div className='mt-5 md:mt-0 md:ml-6 md:block'>
							<Navbar />
							<button className="mt-5 mb-4 md:hidden bg-secondary text-white" onClick={() => setModalOpen(true)}>
								Filter
							</button>
							<FilterModal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
						</div>
					</div>
				</div>
			</div>
		</nav>
	);
}