import React from "react";
import "./BookList.css";
import books from "./book";
export default function BookList() {
  return (
    <div className="cardcontainer">
      {books.map((book) => {
        return (
          <div className="cards-container">
            {/* Card 2 */}
            <div className="book-card">
              <img src={book.img} alt="Profile" className="card-img" />

              <div className="card-content overlay">
                <h3 className="name">{book.title}</h3>
                <p className="book-auther">{book.genre}</p>
                <p className="book-description">{book.description}...</p>

                <div className="stats">
                  <span>
                    {book.author} | {book.year}
                  </span>
                  <button className="follow-btn">خرید </button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
