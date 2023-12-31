import React from "react";
import { useState, useEffect } from "react";
import bukuImage from "../assets/buku1.png";
import "../index.css";
import "semantic-ui-css/semantic.min.css";
import Bintang from "../component/bintang";
import DetailButton from "../component/DetailButton";
import { useUser } from "../component/UserContext";

const Home = () => {
  const bookId = 1;
  const [books, setBooks] = useState([]);
  const { user, logout } = useUser();

  useEffect(() => {
    fetch("http://localhost:8181/buku")
      .then((response) => response.json())
      .then((data) => setBooks(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="ui grid container equal width">
      <div className="nine wide column welcome-section">
        <br />
        <h2>Selamat Datang, {user ? user.username : ""}!</h2>
        <h4>
          Di Perpustakaan Digital: <br />
          Temukan Keindahan Dunia dalam Setiap Kata yang Dibaca
        </h4>
      </div>
      <div className="five wide column">
        <img src={bukuImage} alt="buku" width={200} />
      </div>

      <div className="row">
        <hr />
        <h2 className="center">Daftar Buku</h2>
        <div className="ui four cards">
          {books.map((book) => (
            <div key={book.id_buku} className="card">
              <div className="image book-image gambar_buku">
                <img
                  src={book.gambar}
                  alt={book.judul}
                  className="image book-image"
                />
              </div>
              <div className="content left">
                <div className="header">{book.judul}</div>
                <div className="description">{`Penulis: ${book.penulis}`}</div>
                <div className="meta">
                  <Bintang id_buku={book.id_buku} />
                </div>
                <div className="meta right">
                  <DetailButton id_buku={book.id_buku} className="right" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
