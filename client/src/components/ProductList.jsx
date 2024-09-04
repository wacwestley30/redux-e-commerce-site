import React from 'react';
import { useQuery } from '@apollo/client';
import { useDispatch, useSelector } from 'react-redux';
import { GET_PRODUCTS } from '../utils/queries';
import { setProducts } from '../features/products/productsSlice';
import ProductItem from './ProductItem';

const ProductList = () => {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.products.items);

    const { loading, error, data } = useQuery(GET_PRODUCTS, {
        onCompleted: (data) => {
            dispatch(setProducts(data.products));
        },
    });

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error loading products</div>;

    return (
        <>
            <h1 className='text-4xl font-bold text-text my-2 ml-4'>Product List</h1>
            <ul className="mx-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                {products.map((product) => (
                    <li key={product._id} className="bg-white shadow-md rounded-lg overflow-hidden">
                        <div className="p-4 text-center">
                            <div className='flex justify-center items-center'>
                                <img 
                                src={product.image} 
                                alt={product.name} 
                                className="w-48 h-48 object-cover" 
                                />
                            </div>
                            <h2 className="text-xl font-semibold text-gray-800 mt-4">
                            {product.name}
                            </h2>
                            <p className="text-gray-600 mt-2 mb-4 h-20">{product.description}</p>
                            <div className="mt-4">
                                <span className="text-primary-600 text-lg font-bold">
                                    ${product.price.toFixed(2)}
                                </span>
                            </div>
                            <div className='mt-3'>
                                <button className="bg-primary-600 text-primary py-2 px-4 rounded-md border-2 border-primary-600 hover:bg-primary-700">
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </>
    );
};

export default ProductList;