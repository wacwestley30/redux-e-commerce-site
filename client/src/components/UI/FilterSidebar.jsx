import React from 'react';
import PriceFilter from './PriceFilter';

const FilterSidebar = () => {
    return (
        <aside className="w-full max-w-[250px] hidden md:block sticky top-0 h-screen overflow-y-auto bg-surface p-4 rounded-tr-lg rounded-br-lg">
            <h2 className="text-xl font-bold mb-4">Filters</h2>
            <PriceFilter />
        </aside>
    );
};

export default FilterSidebar;