import React from 'react';
import { useQuery } from '@apollo/client';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { GET_PRODUCTS } from '../utils/queries';
import { setProducts } from '../features/products/productsSlice';
import FilterSidebar from './UI/FilterSidebar';

const ProductList = () => {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.products.items);
    const { minPrice, maxPrice } = useSelector((state) => state.products.priceFilter);

    const { loading, error, data } = useQuery(GET_PRODUCTS, {
        onCompleted: (data) => {
            dispatch(setProducts(data.products));
        },
    });

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error loading products</div>;

    const filteredProducts = products.filter(product =>
        product.price >= minPrice && product.price <= maxPrice
    );

    return (
        <div className='bg-background pt-2 pb-4 text-text'>
            <h1 className='text-center md:text-start text-4xl font-bold pb-2 ml-4'>Product List</h1>
            <div className='flex flex-row'>
                <FilterSidebar />
                <ul className="mx-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {filteredProducts.map((product) => (
                        <li key={product._id} className="bg-surface shadow rounded-lg overflow-hidden">
                            <div className="p-4 text-center">
                                <Link to={`product/${product._id}`}>
                                    <div className='flex justify-center items-center'>
                                        <img 
                                        src={product.image} 
                                        alt={product.name} 
                                        className="w-48 h-48 object-cover rounded-lg" 
                                        />
                                    </div>
                                    <h2 className="text-xl font-semibold text-primary mt-4">
                                    {product.name}
                                    </h2>
                                </Link>
                                <p className="mt-2 mb-4 h-20">{product.description}</p>
                                <div className="mt-4">
                                    <span className="text-lg font-bold">
                                        ${product.price.toFixed(2)}
                                    </span>
                                </div>
                                <div className='mt-3'>
                                    <button className="addToCartButton">
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default ProductList;