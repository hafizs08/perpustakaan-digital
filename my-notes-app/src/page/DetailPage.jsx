import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";
import Bintang from "../component/bintang";
import PeminjamanForm from "../component/PeminjamanForm";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

const DetailPage = () => {
  const { id_buku } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:8181/buku/${id_buku}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch book details");
        }
        return response.json();
      })
      .then((data) => setBook(data))
      .catch((error) => console.error("Error fetching book details:", error));
  }, [id_buku]);

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-3">
          {book ? (
            <React.Fragment>
              <div className="card">
                <div className="card-body">
                  <img className="book-image" src={book.gambar} alt={book.judul} />
                  <h5 className="card-title">{book.judul}</h5>
                  <p className="card-text">Penulis: {book.penulis}</p>
                  <p className="card-text">Tahun Terbit: {book.tahun_terbit}</p>
                  <p className="card-text">ISBN: {book.isbn}</p>
                  <p className="card-text">Jumlah Buku: {book.jumlah_buku}</p>
                  <Bintang id_buku={book.id_buku} />
                </div>
              </div>
            </React.Fragment>
          ) : (
            <div className="ui active inline loader"></div>
          )}
        </div>
        <div className="col-md-6">
          
          <PeminjamanForm book={book} />
        </div>
      </div>
    </div>
  );
};

export default DetailPage;