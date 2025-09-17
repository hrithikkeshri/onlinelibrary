import { createSlice } from "@reduxjs/toolkit";



const SelectedCategorySlice = createSlice({
    name:"SelectedCategory",
    initialState:[],
    reducers:{
        changeCategory:(state,action)=>{
            state = action.payload
            return state
        }
    }
})

export const {changeCategory} = SelectedCategorySlice.actions;
export default SelectedCategorySlice.reducer