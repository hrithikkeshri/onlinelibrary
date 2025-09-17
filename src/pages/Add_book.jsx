import { useState } from "react"
import AllBook from "../utils/BookList"
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { changeList } from "../State/Slice/BookListSlice";

export default function Add_book() {
  const [category, setCategory] = useState('');
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('')
  const [imageUrl, setImageUrl] = useState('');
  const [desc, setDesc] = useState('')
  const navigate = useNavigate();
  const dispatch = useDispatch()

  function validation(data, fieldName) {
    let status = true;
    if (data) {
      if (data.trim().length < 3) {
        status = false;
        alert(`${fieldName} field must be contain at least 3 charachtor`)
      }
    } else {
      status = false;
      alert(`${fieldName} is required`)
    }
    return status;
  }

  function handleAdd(e) {
    e.preventDefault();
    let isValid = validation(category, "category")
    if (!isValid) {
      return 0
    }
    isValid = validation(title, "title")
    if (!isValid) {
      return 0
    }
    isValid = validation(author, "author")
    if (!isValid) {
      return 0
    }
    isValid = validation(imageUrl, "imageUrl")
    if (!isValid) {
      return 0
    }
    validation(desc, "description")
    isValid = validation(desc, "description")
    if (!isValid) {
      return 0
    }
    const newBook = {
      id: AllBook.length + 1,
      category,
      title,
      author,
      imageUrl,
      description: desc
    }
    const newList = [...AllBook, newBook];
    dispatch(changeList(newList))
    localStorage.setItem('bookList', JSON.stringify(newList));
    navigate('/browse_book')
  }

  return (
    <center>
      <section className="shadow-2xl md:w-[60%] flex  justify-center items-center rounded-2xl m-5 p-5">
        <section className="hidden lg:flex ">
          <img className="w-full h-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKTsg8dmns4OOfdyo4MTw7Wip8FUk78BYZAQ&s" alt="image" />
        </section>
        <form className="flex gap-3 flex-col      p-5 items-end">
          <h1 className="text-3xl text-center w-full lg:text-4xl font-bold">Add New Book</h1>
          <input className="border-b-2 w-[90%]  outline-none p-2 text-2xl " value={category} onChange={(e) => setCategory(e.target.value)} type="text" placeholder="Book category..." />
          <input className="border-b-2 w-[90%] outline-none p-2 text-2xl " value={title} onChange={(e) => setTitle(e.target.value)} type="text" placeholder="Book title..." />
          <input className="border-b-2 w-[90%] outline-none p-2 text-2xl " type="text" value={author} onChange={(e) => setAuthor(e.target.value)} placeholder="Book author..." />
          <input className="border-b-2 w-[90%] outline-none p-2 text-2xl " type="text" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} placeholder="Book image url..." />
          <input className="border-b-2 w-[90%] outline-none p-2 text-2xl " type="text" value={desc} onChange={(e) => setDesc(e.target.value)} placeholder="Book description..." />


          <button className="text-white bg-green-800 w-fit p-2 rounded cursor-pointer hover:bg-green-500 transition-all duration-500 ease-linear" onClick={handleAdd}>Add New</button>
        </form>
      </section>
    </center>
  )
}