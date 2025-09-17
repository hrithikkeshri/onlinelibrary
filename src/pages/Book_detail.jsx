import { Link, useParams } from "react-router-dom"
import AllBook from "../utils/BookList"
import { useEffect, useState } from "react";
import { FaArrowAltCircleLeft } from "react-icons/fa";


export default function Book_detail() {
    const [bookDetail, setBookDetail] = useState({});
    const { id } = useParams();

    useEffect(() => {
        getBookDetail()
    }, [])
    function getBookDetail() {

        const book = localStorage.getItem('bookList') ? JSON.parse(localStorage.getItem("bookList")).filter((book) => book.id == id) : AllBook.filter((book) => book.id == id);
        console.log(book)
        setBookDetail(book[0]);
    }

    return (
        <center>
            <Link to='/browse_book' className="flex items-center gap-3 text-2xl p-3 hover:underline"><span><FaArrowAltCircleLeft /></span>Back to Browse</Link>
            <article className="flex flex-col lg:flex-row justify-around w-[60%] shadow-2xl p-4 gap-3 m-3">
                <section>
                    <img className="h-[250px]" src={bookDetail.imageUrl} alt="bookImage" />
                </section>
                <section className="flex items-start justify-between flex-col">
                    <div className="flex flex-col items-start">

                        <h1 className="text-xl font-black text-blue-950 ">{bookDetail.category}</h1>
                        <h2 className="text-2xl font-bold">{bookDetail.title}</h2>
                        <p>Rating:{bookDetail.rating}</p>
                        <p className="text-start">{bookDetail.description}</p>
                    </div>
                    <h3 className="text-end  w-full ">Written by {bookDetail.author}</h3>

                </section>
            </article>
        </center>
    )

}