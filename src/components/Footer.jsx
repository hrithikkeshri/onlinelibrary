import { Link, useNavigate } from "react-router-dom";
import BookList from "../utils/BookList";
import { useDispatch } from "react-redux";
import { changeList } from "../State/Slice/BookListSlice";


export default function Footer(){
    const navigate = useNavigate()
    const dispatch = useDispatch()
     function selectCategory(category){
        const allData = localStorage.getItem('bookList')?JSON.parse(localStorage.getItem("bookList")):BookList
        const filterData = allData.filter((book)=>book.category == category);
        dispatch(changeList(filterData));
        navigate('/browse_book')
   }
    return (
        <footer className="bg-black text-white grid grid-cols-1 gap-2 sm:grid-cols-3 justify-around p-24">
            <section className="flex flex-col items-center">
                <h3 className="text-2xl font-bold">Library Pages</h3>
                <ul className="mt-6 text-blue-300">
                    <li className="hover:underline hover:text-white cursor-pointer"><Link to="/">Home</Link></li>
                    <li className="hover:underline hover:text-white cursor-pointer"><Link to="/browse_book">Browse_Books</Link></li>
                    <li className="hover:underline hover:text-white cursor-pointer"><Link to='/add_book'>Add_Book</Link></li>
                </ul>
            </section>
            <section className="flex flex-col items-center">
                <h3 className="text-2xl font-bold">Book Category</h3>
                <ul className="mt-6 text-blue-300">
                    <li className="hover:underline hover:text-white cursor-pointer" onClick={()=>selectCategory("Novels")}>Novels</li>
                    <li className="hover:underline hover:text-white cursor-pointer" onClick={()=>selectCategory("Travel")}>Travel</li>
                    <li className="hover:underline hover:text-white cursor-pointer" onClick={()=>selectCategory("Life Style")}>Life Style</li>
                    <li className="hover:underline hover:text-white cursor-pointer" onClick={()=>selectCategory("Design et Art")}>Design et Art</li>
                </ul>
            </section>
           
            <section className="flex flex-col items-center">
                <Link to='/'>
                <h1 className="text-2xl font-bold cursor-pointer m-4">
                    Online <br />
                    <span className="text-blue-600 text-3xl">LibrarySytem </span>
                </h1>
                </Link>
            </section>
        </footer>
    )
    
}