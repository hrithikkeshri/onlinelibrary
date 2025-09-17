import { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function NavDropDown(){
  const [display,setdisplay] = useState("hidden")
    return (
      <div>
        <button className="cursor-pointer" onClick={()=>setdisplay((display=="hidden")?"flex":'hidden')}><BsThreeDotsVertical/></button>
         <nav  className={`${display} z-10 right-2 bg-white absolute flex-col text-xl rounded-xl   shadow-md  shadow-blue-400`}>
           <Link to="/" className="hover:bg-blue-200 p-2 rounded-t-xl">Home</Link>
           <Link to="/browse_book" className="hover:bg-blue-200 p-2">Browse_book</Link>
           <Link to="/add_book" className="hover:bg-blue-200 p-2">Add_book</Link>
         </nav>
      </div>
    )
}