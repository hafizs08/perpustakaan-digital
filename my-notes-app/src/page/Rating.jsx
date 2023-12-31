import React, { useState } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import { useUser } from "../component/UserContext";
import "semantic-ui-css/semantic.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

const Rating = () => {
  const { user } = useUser();
  const [rating, setRating] = useState(3);
  const [comment, setComment] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const peminjamanInfo = location.state && location.state.peminjamanInfo;

  if (!peminjamanInfo) {
    return <p>Data peminjaman tidak tersedia.</p>;
  }

  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleSubmitRating = async () => {
    try {
      const response = await axios.post('http://localhost:8181/rating_buku', {
        buku: {
          id_buku: peminjamanInfo.id_buku,
          judul: peminjamanInfo.judul,
          penulis: peminjamanInfo.penulis,
          tahun_terbit: peminjamanInfo.tahun_terbit,
          isbn: peminjamanInfo.isbn,
          gambar: peminjamanInfo.gambar,
          jumlah_buku: peminjamanInfo.jumlah_buku,
        },
        pengguna: { id_pengguna: peminjamanInfo.id_pengguna },
        rating: rating,
        komentar: comment,
      });

      console.log('Rating berhasil disubmit:', response.data);
      navigate('/');
    } catch (error) {
      console.error('rating gagal di submission:', error);
    }
  };

  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <i
          key={i}
          className={`icon ${i <= rating ? "active" : ""}`}
          onClick={() => handleRatingChange(i)}
        ></i>
      );
    }
    return stars;
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h2 className="mb-4">Rating Page</h2>
          <div className="mb-4">
            <label>Your Rating:</label>
            <div className="ui star rating" data-rating={rating}>
              {renderStars()}
            </div>
          </div>
          <div className="mb-4">
            <label>Comment:</label>
            <textarea
              className="form-control"
              value={comment}
              onChange={handleCommentChange}
            ></textarea>
          </div>
          <button
            className="btn btn-primary"
            onClick={handleSubmitRating}
          >
            Submit Rating
          </button>
        </div>
      </div>
    </div>
  );
};

export default Rating;