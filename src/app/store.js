import { configureStore } from '@reduxjs/toolkit';
import productReducer from '../Post/PostSlice'; // adjust the path if needed

const store = configureStore({
    reducer: {
        product: productReducer,
    },
});

export default store;