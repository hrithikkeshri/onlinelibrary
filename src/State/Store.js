import { configureStore } from "@reduxjs/toolkit";
import BookListSlice from "./Slice/BookListSlice"
import SelectedCategorySlice from "./Slice/SelectedCategorySlice"


const Store = configureStore({
    reducer:{
      BookList:BookListSlice, 
      FilteredCategory:SelectedCategorySlice
    }
})
export default Store;