import { Link } from "react-router-dom";
import SmallScreenNav from "./NavDropDown";
import { useDispatch } from "react-redux";
import BookList from "../utils/BookList";
import { changeList } from "../State/Slice/BookListSlice";

export default function Navbar() {
    const dispatch = useDispatch();

    function handleChangeList(){
          const data = localStorage.getItem("bookList")?JSON.parse(localStorage.getItem("bookList")):BookList
          dispatch(changeList(data))
    }
    return (
        <>
            <nav className="flex justify-between items-center p-5 text-2xl  ">
               <Link to="/"> <div className="font-bold  text-xl cursor-pointer">Online <br /><span className="relative text-4xl text-blue-400">LibrarySystem</span> </div></Link>
                <section className="md:hidden ">
                    <SmallScreenNav />
                </section>
                <ul className="md:flex gap-7 hidden">
                    <li className=" hover:border-b-2 p-1 cursor-pointer "><Link to="/">Home</Link></li>
                    <li className=" hover:border-b-2 p-1 cursor-pointer "><Link to="/browse_book" onClick={handleChangeList}>Browse_Books</Link> </li>
                    <li className=" hover:border-b-2 p-1 cursor-pointer "><Link to='/add_book'>Add_Book</Link></li>
                </ul>
            </nav>
        </>
    )
}