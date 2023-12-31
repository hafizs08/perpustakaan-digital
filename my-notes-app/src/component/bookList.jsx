import React, { useState, useEffect } from 'react';

const BookList = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {

    const fetchBooks = async () => {
      try {
        const response = await fetch('http://localhost:8181/buku');
        const data = await response.json();
        setBooks(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchBooks();
  }, []);

  return (
    <div>
      <h2>Daftar Buku</h2>
      <ul>
        {books.map((book) => (
          <li key={book.id_buku}>
            {book.judul} oleh {book.penulis}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;
