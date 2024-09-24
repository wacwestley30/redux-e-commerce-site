import { useDispatch, useSelector } from "react-redux";
import { setPriceFilter } from "../../features/products/productsSlice";
import { useState } from "react";

const PriceFilter = ({ onClose }) => {
    const dispatch = useDispatch();
    const { minPrice, maxPrice } = useSelector((state) => state.products.priceFilter);
    const [min, setMin] = useState(minPrice || 0);
    const [max, setMax] = useState(maxPrice || 1300);

    const handleMinChange = (e) => {
        const minVal = Number(e.target.value);
        setMin(minVal);
        if (minVal > max) {
            setMax(minVal);
        }
    };

    const handleMaxChange = (e) => {
        const maxVal = Number(e.target.value);
        setMax(maxVal);
        if (maxVal < min) {
            setMin(maxVal);
        }
    };

    const handleFilterChange = () => {
        dispatch(setPriceFilter({ minPrice: min, maxPrice: max }));
        if (onClose) onClose();
    };

    return (
        <div className="w-full p-4 rounded-lg">
            <h3 className="text-text text-center mb-4">Filter by Price</h3>
            <div className="flex flex-col items-center mb-4">
                <div className="w-full flex flex-col items-center justify-between">
                    <span className="text-text">{`$${min}`}</span>
                    <input
                        type="range"
                        value={min}
                        min={0}
                        max={1300}
                        step={1}
                        className="w-full mx-4"
                        onChange={handleMinChange}
                    />
                </div>
                <div className="w-full flex flex-col items-center justify-between">
                    <span className="text-text">{`$${max}`}</span>
                    <input
                        type="range"
                        value={max}
                        min={0}
                        max={1300}
                        step={1}
                        className="w-full mx-4"
                        onChange={handleMaxChange}
                    />
                </div>
            </div>
            <button onClick={handleFilterChange} className="mt-4 w-full bg-primary text-white py-2 rounded">
                Apply Filter
            </button>
        </div>
    );
};

export default PriceFilter;