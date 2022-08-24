import React, { useState, useEffect } from "react";
import { FiDownload } from "react-icons/fi";

const CardBook = () => {
  const axios = require("axios");
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios.get("http://gutendex.com/books/").then(function (response) {
      setBooks(response.data.results);
      console.log(response);
    });
  }, []);

  // console.log(books);
  return (
    <div className="flex justify-around">
      {books &&
        books.map((book) =>
          book.download_count >= 17000 ? (
            <div className="cardBook w-1/3" key={book.id}>
              <div className="w-2/3">
              <img
                src="https://www.gutenberg.org/cache/epub/1184/pg1184.cover.small.jpg"
                alt=""
                className="w-full block"
              />
              </div>
              <h2 className="text-xs w-4/5 ml-3 font-semibold">{book.title}</h2>
              <h3 className="text-xs ml-3 font-normal">
                {book.authors[0].name}
              </h3>
              <div className="right">
                <FiDownload className="float-left mx-3"/>
                <h4 className="text-xs ml-3"> {book.download_count}</h4>
              </div>
            </div>
          ) : null
        )}
    </div>
  );
};

export default CardBook;
