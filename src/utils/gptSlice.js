import { createSlice } from "@reduxjs/toolkit"
const gptSlice= createSlice({
    name: 'gpt',
    initialState:{
        showGptSearch:false
    },
    reducers:{
        toggleStateView: (state)=>{
            state.showGptSearch= !state.showGptSearch;
        }
    }

})

export const {toggleStateView}= gptSlice.actions;
export default gptSlice.reducer