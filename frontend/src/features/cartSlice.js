import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItems :localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) : [],
    cartTotalQuantity : 0,
    cartTotalAmount : 0,

};

const cartSlice = createSlice({
    name : "cart",
    initialState,
    reducers:{
        /* first reducer to add items to the cart */
        addToCart (state, action){
            const itemIndex = state.cartItems.findIndex(
                (item) => item.id === action.payload.id 
            );
            
            /* to increase the item quantity if it is already in the cart*/
            if (itemIndex >= 0){ 
                state.cartItems[itemIndex].cartQuantity += 1;
            } 
            /* to add new item to cart if it isn't in the cart and add the property cartQuntity to the product*/
            else{ 
                const tempProduct = {...action.payload, cartQuantity : 1};
                state.cartItems.push(tempProduct);
            }

            localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
        },
        /* second reducer to remove items from the cart */
        removeFromCart (state, action){
            const nextCartItems = state.cartItems.filter(
                (cartItem) =>  cartItem.id !== action.payload.id
            );

            state.cartItems = nextCartItems;
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
        },
        /* third reducer to decrease the quantity of an item */
        decreaseCart(state, action){
            const itemIndex = state.cartItems.findIndex(
            (cartItem) => cartItem.id === action.payload.id
            )

            if (state.cartItems[itemIndex].cartQuantity > 1){
                state.cartItems[itemIndex].cartQuantity -= 1;
            } 
            else if (state.cartItems[itemIndex].cartQuantity === 1){
                const nextCartItems = state.cartItems.filter(
                (cartItem) =>  cartItem.id !== action.payload.id
                    );

                    state.cartItems = nextCartItems;
                    }
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
        },
        /* fourth reducer to clear the cart */
        clearCart(state, action){
            state.cartItems=[];
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
        },
        /* fifth reducer to calculate the total and subtotal the cart */
        getTotal(state, action){
            let {total, quantity} = state.cartItems.reduce((cartTotal, cartItem) => {
                const {price ,cartQuantity} = cartItem;
                const itemTotal = price * cartQuantity;

                cartTotal.total += itemTotal;
                cartTotal.quantity += cartQuantity;

                return cartTotal;
            },
            {
                total:0,
                quantity:0,
            }
            );

            state.cartTotalAmount = total;
            state.cartTotalQuantity = quantity;
        },
        


    },

});

export const {addToCart, removeFromCart, decreaseCart, clearCart, getTotal} = cartSlice.actions;
export default cartSlice.reducer;