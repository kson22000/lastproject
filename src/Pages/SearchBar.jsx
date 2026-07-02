import { useState } from "react";

export default function SearchBar() {
  return (
    <div className="font-serif">
      <h1 className='text-2xl mt-2 font-bold justify-center flex'>
        Search
      </h1>
      <form className="w-full h-107 flex items-center max-w-md mx-auto">
      <input
        type="text"
        placeholder="...Search..."
        className="w-full px-4 py-2 border-b-2 border-gray-300 shadow-2xl shadow-black focus:outline-none"
      />
      <button
        type="submit"
        className="px-4 py-2 duration-500 bg-black text-white shadow-2xl shadow-black hover:text-black hover:bg-gray-300"
      >
        Search
      </button>
    </form>
    </div>
    
    
  );
}