import React from 'react';
import PriceFilter from './PriceFilter';

const FilterModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-surface p-6 rounded-lg shadow-lg">
                <h2 className="text-xl font-bold mb-4">Filters</h2>
                <PriceFilter onClose={onClose} />
                <button onClick={onClose} className="mt-4 bg-primary text-white py-2 px-4 rounded">
                    Close
                </button>
            </div>
        </div>
    );
};

export default FilterModal;