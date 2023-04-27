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
        }
    }
})