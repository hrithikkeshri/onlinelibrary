import React, { useEffect, useState } from "react";
import { FaArrowCircleRight } from "react-icons/fa";
import BookList from "../utils/BookList";
import AllBook from "../utils/BookList"

import BookCard from "../components/BookCard";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { changeList } from "../State/Slice/BookListSlice";
export default function Home() {

    const [categoryList, setCategoryList] = useState([]);
    const [popular, setPopular] = useState([]);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        getData();
    }, [])

    function getData() {
        const categories = BookList.map((book) => book.category)
        const uniqueCategories = categories.filter((category, index) => categories.indexOf(category) == index);
        console.log(uniqueCategories)
        const categoryWithId = uniqueCategories.map((category, index) => {
            return {
                id: index,
                category,
            }
        })
        const popularList = BookList.filter((book, index) => book.rating > 4).filter((book, index) => index < 4);

        setCategoryList(categoryWithId);
        setPopular(popularList);
    }
   function selectCategory(category){
        const filterData = AllBook.filter((book)=>book.category == category);
        dispatch(changeList(filterData));
        navigate('/browse_book')
   }


   function handleChangeList(){
          const data = localStorage.getItem("bookList")?JSON.parse(localStorage.getItem("bookList")):AllBook
          dispatch(changeList(data))
    }

    return (
        <main>

            <section className="flex flex-col md:flex-row  ">
                <section className="flex justify-center items-center w-full  md:h-[80vh] p-4  ">
                    <h1 className=" text-center text-4xl md:text-4xl lg:text-6xl font-bold">Welcome to the <br />  <span className="text-blue-600">Digital Library System!</span></h1>
                </section>
                <section className="flex justify-center items-center h-[60vh] md:h-[100vh] w-full  ">
                    <img
                        className="w-[50%] sm:w-[70%] md:w-[90%] lg:w-[50%]"
                        src="https://images.pexels.com/photos/6334577/pexels-photo-6334577.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=252&fit=crop&h=408"
                        alt="IntroImage"
                        
                    />
                </section>

            </section>
            <section className="flex justify-center items-center rounded-t-4xl flex-col bg-blue-600 text-white p-9">
                <section>

                    <h2 className="text-center text-3xl font-bold m-4">our <br /> <span className="text-5xl">Popular Book</span></h2>
                    <section className="flex flex-wrap justify-center gap-4">
                        {popular.map((book) => <Link to={`/book_detail/${book.id}`} onClick={handleChangeList}> <BookCard url={book.imageUrl} title={book.title} category={book.category} btnMessage="View Details" /></Link>)}



                    </section>
                    <br />
                    <Link to="/browse_book"><button className="cursor-pointer hover:text-blue-200 text-2xl flex items-center gap-3"><span>View More </span><FaArrowCircleRight /></button></Link>
                </section>
                <section>

                    <h2 className="text-center text-3xl font-bold m-4">our <br /> <span className="text-5xl">Book Category</span></h2>
                    <section className="flex flex-wrap justify-center gap-6">
                        {categoryList.map((book) => {
                          return  <div onClick={()=>selectCategory(book.category)}>
                                <BookCard url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiVQ-OWyJzjU8w_2-jFsO8ez9uhyWAFxjbJg&s" category={book.category} key={book.id} btnMessage={`View All ${book.category}`} />
                            </div>
                        })}


                    </section>
                </section>
            </section>

        </main>
    )
}