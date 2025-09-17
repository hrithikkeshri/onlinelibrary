import React from "react";


export default function BookCard({url,title,category,btnMessage}) {

  
    return (
        <article className="flex flex-col relative items-center cursor-pointer w-[280px]  ">
            <img
                className="w-[250px] h-[300px]"
                src={url}
                alt="categoryImage"
                 />
            <h2 className="text-xl">{title}</h2>
            <h3 >{category}</h3>

            <button  className=" flex justify-center items-center cursor-pointer       absolute w-[100%] h-[100%] text-2xl  opacity-0 hover:opacity-85 bg-white text-black  transition-all duration-500 ease-linear font-bold  ">
                {btnMessage}  
            </button>

        </article>
    )
}