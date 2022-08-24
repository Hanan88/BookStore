import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { FiHeart } from "react-icons/fi";


const ListBooks = () => {
  const [books, setBooks] = useState([]);
  const [page, setPage] = useState(1);

  // const {books} = useSelector((state) => state.books);
  // const dispatch = useDispatch();
  const nextPage = () => {
    setPage(page + 1);
  };
  const prevPage = () => {
    setPage(page - 1);
  };
  useEffect(() => {
    axios
      .get(`http://gutendex.com/books/?page=${page}`)
      .then(function (response) {
        setBooks(response.data.results);
        console.log(response);
      });
  }, [page]);

  return (
    <>
      <div className="text-black flex flex-wrap">
        {books &&
          books.map((book) => (
            <div className="cardBook w-1/5 m-5" key={book.id}>
              <div className="bookCover float-left  ">
                <img
                  src="https://www.gutenberg.org/cache/epub/1184/pg1184.cover.small.jpg"
                  alt="" 
                />
              </div>
              <h1 className="title overflow-hidden h-1/5 mb-2 ml-1 text-xs">{book.title}</h1>
              <h2 className="subject overflow-hidden h-1/5 ml-1 text-xs">
                {book?.subjects[0]}
              </h2>
              <div className="mx-2">
          <FiHeart />
        </div>
            </div>
          ))}
      </div>
      <div className="pagination flex justify-around">
        <button onClick={prevPage} className="text-xs p-2 text-orange-500	">Prev</button>
        <button onClick={nextPage} className="text-xs p-2 text-orange-500	">Next</button>
      </div>
    </>
  );
};

export default ListBooks;
