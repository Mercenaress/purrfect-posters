import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    catPosters: [],
    counter: 0
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
            state.catPosters.unshift({ id: id, ...action.payload});
        },
        removeCatPoster: (state, action) => {
            state.catPosters = state.catPosters.filter(item => item.id !== action.payload.id);
        },
        editCatPoster: (state, action) => {
            state.catPosters = state.catPosters.map((catPoster) => {
                return catPoster.id === action.payload.id ? action.payload : catPoster;
            });
        }
    }
});

export const { addCatPoster, fillStock, removeCatPoster, fillIdCounter, editCatPoster } = catPostersSlice.actions;

export default catPostersSlice.reducer;