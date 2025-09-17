import React, { useState } from "react";
import AllBook from "../utils/BookList"
import { useDispatch, useSelector } from "react-redux";
import { changeList } from "../State/Slice/BookListSlice";
import { changeCategory } from "../State/Slice/SelectedCategorySlice";

export default function CategoryCheckBox({category}) {
    const filterCategory = useSelector((state)=>state.FilteredCategory)
    const [checkBox,setCheckBox] = useState(false);
    const dispatch = useDispatch();
   



    function handleFilter(checkStatus){
        let filterList = filterCategory;
       if(checkStatus){
           filterList = [...filterList,category]
       }else{
          filterList = filterList.filter((item)=>item != category);
       }
       console.log(filterList)
       let filterBook = AllBook;
       if(filterList.length != 0){
            filterBook = AllBook.filter((book)=>filterList.includes(book.category))
       }
       dispatch(changeCategory(filterList))
       dispatch(changeList(filterBook))
       setCheckBox(checkStatus)
      
    }
    return (
        <div className="flex items-center gap-3 text-2xl"  >
            <input id={category} className="w-[20px] h-[20px]" checked={checkBox} onChange={()=>handleFilter(checkBox?false:true)} type="checkbox" />
            <p>{category}</p>
        </div>
    )
}