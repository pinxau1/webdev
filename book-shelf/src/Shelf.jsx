
import { useState } from "react";

export default function Shelf() {
    const [books, setBooks] = useState([
        { title: "Percy Jackson and the Olympians", author: "Rick Riordan" },
        { title: "The Darjeeling Limited", author: "Wes Anderson" },
        { title: "Lives and Opinions of Eminent Philosophers", author: "Diogenes Laertius" }
    ]);

    const [favorites, setFavorites] = useState([]);

    function addToFavorites(book) {
        if (!favorites.includes(book)) {
            setFavorites([...favorites, book]);
        }
    }

    return (
        <>
            <h1>My Book Shelf</h1>

            {books.map((book) => {
                return (
                    <div key={book.title}>
                        <h3>{book.title}</h3>
                        <p>{book.author}</p>
                        <button onClick={() => addToFavorites(book)}>
                            Add to Favorites
                        </button>
                    </div>
                );
            })}

            <h1>My Favorites</h1>

            {favorites.map((book) => {
                return (
                    <div key={book.title}>
                        <h3>{book.title}</h3>
                        <p>{book.author}</p>
                    </div>
                );
            })}
        </>
    );
}
