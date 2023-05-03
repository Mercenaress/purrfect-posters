import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    catPosters: []
}

export const catPostersSlice = createSlice({
    name: 'catPosters',
    initialState,
    reducers: {
        addCatPoster: (state, action) => {
            let id = state.catPosters.length + 1;
            state.catPosters.push({ id: id, ...action.payload});
        },

        fillStock: (state, action) => {
            state.catPosters.push(...action.payload)
        },

        removeCatPoster: (state, action) => {
            console.log(action.payload.id);
            state.catPosters = state.catPosters.filter(item => item.id !== action.payload.id);
        }
    }
});

export const { addCatPoster, fillStock, removeCatPoster } = catPostersSlice.actions;

export default catPostersSlice.reducer;