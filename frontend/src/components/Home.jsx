import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addToCart } from '../features/cartSlice';
import { useGetAllProductsQuery } from '../features/productsApi';


const Home = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleAddToCart = (product) => {
            dispatch(addToCart(product))
            navigate("/cart")
    };

    const {data, error, isLoading} = useGetAllProductsQuery();
    return (<div className='home-container'>
        {isLoading ? (
            <p>Loading...</p> 
            ): error ? (
                <p>An error occured...</p> 
            ) : (
                <>
                <h2>New Arrivals</h2>
                <div className='products'>
                        {data.map( (product) => (<div key={product.id} className='product'>
                                                    <h3>{product.name}</h3>
                                                    <img src={product.image} alt={product.name} />
                                                    <div className='details'>
                                                        <span>{product.color}</span>
                                                        <span className='price'>${product.price}</span>
                                                    </div>
                                                    <button onClick={() => {handleAddToCart(product)}} >Add to cart</button>
                                                </div> ))}
                                                </div>
                </>
                
            ) }
            </div>
    )}

export default Home;