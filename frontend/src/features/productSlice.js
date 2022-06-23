import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";


const initialState = {
    items:[],
    status:null,
    error: null,
};

export const productsFetch = createAsyncThunk(
    "products/productsFetch",
    async(id=null, {rejectWithValue}) => {
        try{
            const response = await axios.get("http://localhost:5500/products");
            return response;
        } catch(error){
            return rejectWithValue(error.response.data);
        }
        
    }
)


const productSlice = createSlice({
    name:"products",
    initialState,
    reducers:{},
    extraReducers:{
        [productsFetch.pending] : (state, action) => {
            state.status = "pending";
        },
        [productsFetch.fulfilled] : (state, action) => {
            state.status = "success";
            state.items = action.payload;
        },
        [productsFetch.rejected] : (state, action) => {
            state.status = "rejected";
            state.error = action.payload;
        },
    },
});

export default productSlice.reducer;