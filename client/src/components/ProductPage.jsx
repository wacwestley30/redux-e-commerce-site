import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { GET_PRODUCT } from '../utils/queries';

const ProductPage = () => {
    const { productId } = useParams();
    const {loading, error, data} = useQuery(GET_PRODUCT, {
        variables: { productId },
    });

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error loading product!</p>;

    const { product } = data;
    return (
        <div className="p-4 bg-background text-text flex flex-col md:flex-row">
            <div>
                <img 
                    src={product.image} 
                    alt={product.name} 
                    className="size-96 object-cover rounded-lg shadow" 
                />
            </div>
            <div className="md:w-1/2 md:pl-4">
                <h2 className="text-3xl font-semibold text-primary mb-2">{product.name}</h2>
                <p className="mb-4">{product.description}</p>
                <p className="text-lg font-bold">${product.price.toFixed(2)}</p>
                <div className='mt-3'>
                    <button className="addToCartButton">
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductPage;