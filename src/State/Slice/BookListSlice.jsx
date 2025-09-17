import { createSlice } from "@reduxjs/toolkit";
import BookList from "../../utils/BookList";


const BookListSlice = createSlice({
    name:"BookList",
    initialState:BookList,
    reducers:{
        changeList:(state,action)=>{
            state = action.payload
            return state
        }
    }
})

export const {changeList} = BookListSlice.actions;
export default BookListSlice.reducer