import { useDispatch, useSelector } from "react-redux";
import BookCard from "../components/BookCard";
import AllBook from "../utils/BookList"
import { useEffect, useState } from "react";
import CategoryCheckBox from "../components/CategoryCheckBox";
import { Link } from "react-router-dom";
import { changeList } from "../State/Slice/BookListSlice";

export default function Browse_Book() {
    const bookList = useSelector((state) => state.BookList);
    const [categoryList, setCategoryList] = useState([]);
    const [search, setSearch] = useState('');
    const [bookExist, setBookExist] = useState('')
    const dispatch = useDispatch();

    useEffect(() => {
        getCategory();
    }, [])

    function getCategory() {

        const categories = AllBook.map((book) => book.category)
        const uniqueCategories = categories.filter((category, index) => categories.indexOf(category) == index);
        console.log(uniqueCategories)
        const categoryWithId = uniqueCategories.map((category, index) => {
            return {
                id: index,
                category,
            }
        })
        console.log(categoryWithId)
        setCategoryList(categoryWithId)
    }


    function handleSearch() {
        if (!search) {
            alert('search input is required')
            return 0
        }
        const data = localStorage.getItem("bookList") ? JSON.parse(localStorage.getItem("bookList")) : AllBook
        const searchResult = data.filter((book) => {
            return book.author.toLowerCase() == search.trim().toLowerCase() || book.title.toLowerCase() == search.trim().toLowerCase()
        })
        setBookExist('Loading')
        dispatch(changeList(searchResult));
        if (searchResult.length == 0) {
            setBookExist('Book not exist')
            setTimeout(() => {
                setBookExist('');
                dispatch(changeList(data))
            }, 4000);
        }else{
            setBookExist('')
        }


        setSearch('')

    }


    return (
        <>

            <section className="flex flex-col lg:flex-row">
                <section className="p-3  lg:w-[40%] ">
                    <h1 className="text-3xl  font-bold">Book Category</h1>
                    <section className="flex flex-wrap gap-1  w-full  lg:flex-col">
                        {categoryList.map((book) => <CategoryCheckBox category={book.category} status={book.status} key={book.id} />)}
                    </section>
                </section>
                <section className="flex flex-col items-center w-[90%] ">
                    <div className="flex gap-3 w-[70%]">
                        <input className="border w-[70%] outline-none p-1.5 rounded-xs" value={search} onChange={(e) => setSearch(e.target.value)} type="text" placeholder="Search book by author or book title" />
                        <button className="bg-black text-white p-2 rounded-xs cursor-pointer border hover:text-black hover:bg-white transition-all duration-500 ease-linear" onClick={handleSearch}>Search</button>
                    </div>
                    <h1 className="text-5xl m-6 font-bold">{bookExist}</h1>
                    <section className="flex flex-wrap gap-4 p-4  justify-center  w-fit">
                        {bookList.map((book) => {
                            return <Link to={`/book_detail/${book.id}`}><BookCard title={book.title} category={book.category} url={book.imageUrl} btnMessage="View Details" key={book.id} /></Link>
                        })}


                    </section>
                </section>
            </section>
        </>
    )
}