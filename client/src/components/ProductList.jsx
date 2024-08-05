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
        <div>
            <h1>Product List</h1>
            <ul>
                {products.map((product) => (
                    <ProductItem key={product._id} product={product} />
                ))}
            </ul>
        </div>
    );
};

export default ProductList;