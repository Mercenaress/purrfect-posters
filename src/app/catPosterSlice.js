import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    catPosters: [],
    counter: 16
}

export const catPostersSlice = createSlice({
    name: 'catPosters',
    initialState,
    reducers: {
        fillStock: (state, action) => {
            state.catPosters.push(...action.payload)
        },
        fillIdCounter: (state, action) => {
           state.counter = action.payload;
        },
        addCatPoster: (state, action) => {
            let id = state.counter += 1;
            state.catPosters.push({ id: id, ...action.payload});
        },
        removeCatPoster: (state, action) => {
            console.log(action.payload.id);
            state.catPosters = state.catPosters.filter(item => item.id !== action.payload.id);
        },
    }
});

export const { addCatPoster, fillStock, removeCatPoster, fillIdCounter } = catPostersSlice.actions;

export default catPostersSlice.reducer;