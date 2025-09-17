import { FaArrowAltCircleLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function ErrorPage(){
    return (
        <section>
        <Link  to='/' className="flex items-center gap-3 text-2xl p-3 hover:underline"><span><FaArrowAltCircleLeft/></span>Back to Home</Link>   
        <center>
        <section className="flex flex-col w-[50%] items-center h-[100vh] justify-center">
             <h1 className="text-4xl font-bold">404 Not found</h1>
             <p>You have come on wrong path</p>
        </section>
        </center>
        </section>
    )
}