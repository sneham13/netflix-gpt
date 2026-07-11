import { createSlice } from "@reduxjs/toolkit"
const gptSlice= createSlice({
    name: 'gpt',
    initialState:{
        showGptSearch:false,
        searchResults: null
    },
    reducers:{
        toggleStateView: (state)=>{
            state.showGptSearch= !state.showGptSearch;
        },
        resetGptView: (state)=>{
            state.showGptSearch = false;
        },
        addSearchResults: (state, action) => {
            state.searchResults = action.payload;
        }
    }

})

export const {toggleStateView, resetGptView, addSearchResults}= gptSlice.actions;
export default gptSlice.reducer