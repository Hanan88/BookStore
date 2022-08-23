import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const CardBook = () => {
  const axios = require("axios");
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios.get("http://gutendex.com/books/").then(function (response) {
      setBooks(response.data.results);
      console.log(response);
    });
  }, []);

  console.log(books);
  return (
    <div className="flex justify-around">
      {books &&
        books.map((book) =>
          book.download_count >= 19500 ? (
            <div className="cardBook w-1/3" key={book.id}>
              <div className="w-3/4">
                <img
                  src="https://www.gutenberg.org/cache/epub/1184/pg1184.cover.small.jpg"
                  alt=""
                  className="w-full	"
                />
              </div>
              <h2 className="text-base w-4/5 ml-3 font-semibold">{book.title}</h2>
              <h3 className="text-sm ml-3 font-normal">{book.authors[0].name}</h3>
              <h4 className="text-xs ml-3">{book.download_count}</h4>
            </div>
          ) : null
        )}
    </div>
  );
};

export default CardBook;
