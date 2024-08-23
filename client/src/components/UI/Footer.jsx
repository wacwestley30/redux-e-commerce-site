import Navbar from "./Navbar";

export default function Footer() {
    return (
        <nav className='bg-secondary'>
            <div className='max-w-7xl px-2'>
                <div className='relative flex h-16 items-center justify-between'>
                    <div className='flex flex-1 items-center justify-center sm:items-stretch sm:justify-start'>
                        <div className='sm:ml-6 sm:block'>
                            <Navbar/>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}