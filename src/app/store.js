import { configureStore } from "@reduxjs/toolkit";
import catPosterReducer from './catPosterSlice';

const store = configureStore({
    reducer: {
        catPosters: catPosterReducer,
    }
});

export default store;