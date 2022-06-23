import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, clearCart, decreaseCart, removeFromCart, getTotal } from '../features/cartSlice';

const Cart = () => {

    const cart = useSelector((state) => state.cart);

    const dispatch = useDispatch();

    useEffect( ()=>{
        dispatch(getTotal());
        
    }, [cart, dispatch] );

    const handleRemoveFromCart = (cartItem) => {
        dispatch(removeFromCart(cartItem))
    };

    const handleDecreaseCart = (cartItem) => {
        dispatch(decreaseCart(cartItem))
    }

    const handleIncreaseCart = (cartItem) => {
        dispatch(addToCart(cartItem))
    }

    const handleClearCart = () => {
        dispatch(clearCart())
    }

    return ( <div className='cart-container'>
                <h1>Shopping Cart</h1>
                <div className='row g-0 all-cart'>
                    <div className="row g-0 col-sm-8 all-details">
                        <div className="col-sm-1 detail">
                            <h5>Items</h5>
                            <p>{cart.cartTotalQuantity}</p>
                        </div>

                        <div className="col-sm-2 detail">
                            <button className="card-text remove-all" onClick={()=>{handleClearCart()}}>Remove All</button>
                            <p>{cart.cartTotalAmount} EGP</p>
                        </div>
                    </div>

                    <div className='cart-checkout col-sm-3'>
                        <h4>Order Summary</h4>
                        
                        <div>
                            <span className='sub-total'>Subtotal</span>
                            <span className='sub-total-amount'>{cart.cartTotalAmount}</span>
                        </div>
                        <div >
                            <span className='shipping'>Shipping</span>
                            <span className='shipping-amount'></span>
                        </div>
                        <p>Have a Promo Code ?</p>
                        <form className="d-flex">
                            <input className="form-control me-2" type="text"/>
                            <button className="btn" type="submit">Apply</button>
                        </form>
                        <div >
                            <span className='discount'>Discount</span>
                            <span className='discount-amount'></span>
                        </div>
                        <div >
                            <span className='total-order'>Total</span>
                            <span className='total-order-amount'></span>
                        </div>
                        <button className='check-out'>Checkout</button>
                    </div>
                

                {cart.cartItems.length === 0 ? (
                    <div className='cart-empty'>
                        <p>Your cart is currently empty</p>
                    </div>
                ):(

                        <div className='cart-items col-sm-8 mb-3'>
                            {cart.cartItems.map(
                                (cartItem) => (
                                    <div className='cart-item mb-4' key={cartItem.id}>
                                        <div className="card">
                                            <div className="row g-0">
                                                <div className="col-sm-4 card-details">
                                                    <img src={cartItem.image} className="img-fluid rounded-start" alt="..."/>
                                                    <div className="card-body">
                                                            <h3 className="card-title">Tall Jacket</h3>
                                                            <p className="card-text"><small className="text-muted">EGP {cartItem.price}</small></p>
                                                            <p className="card-text"><small className="text-muted">Color: {cartItem.color}</small></p>
                                                    </div>
                                                </div>

                                                <div className="col-sm-2 card-size">
                                                    <div className="btn-group">
                                                        <button className="btn btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                            Size
                                                        </button>
                                                        <ul className="dropdown-menu">
                                                            <li><a className="dropdown-item" href="#">M</a></li>
                                                            <li><a className="dropdown-item" href="#">L</a></li>
                                                            <li><a className="dropdown-item" href="#">XL</a></li>
                                                        </ul>
                                                    </div>
                                                </div>

                                                <div className="col-sm-2 quantity">
                                                    <button className='minus' onClick={()=>{handleDecreaseCart(cartItem)}}>-</button>
                                                    <span className='number'>{cartItem.cartQuantity}</span>
                                                    <button className='plus' onClick={()=> {handleIncreaseCart(cartItem)}}>+</button>
                                                </div>

                                                <div className="col-sm-4 card-actions">
                                                    <h4 className="card-title">{cartItem.price*cartItem.cartQuantity} EGP</h4>
                                                    <button className="card-text except">Except for now</button>
                                                    <button className="card-text remove" onClick={() => {handleRemoveFromCart(cartItem)}}>Remove</button>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                )
                            )}
                        </div>
                )}
    
            </div> 
            </div>);
}

export default Cart;