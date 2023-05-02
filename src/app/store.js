import { configureStore } from "@reduxjs/toolkit";
import catPosterReducer from './catPosterSlice';

export const store = configureStore({
    reducer: {
        catPosters: catPosterReducer,
    }
});
