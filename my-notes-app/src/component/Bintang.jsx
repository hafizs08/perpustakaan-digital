import React, { useState, useEffect } from 'react';
import 'semantic-ui-css/semantic.min.css';

const Bintang = ({ id_buku }) => {
  const [rating, setRating] = useState(null);

  useEffect(() => {
    // Gantilah URL_API_RATING dengan URL API yang sesuai dengan endpoint rating buku
    fetch(`http://localhost:8181/buku/${id_buku}`)
      .then((response) => response.json())
      .then((data) => {
        // Memperbarui nilai rating dari respons API
        setRating(data.rataRataRating);
      })
      .catch((error) => {
        console.error('Error fetching rating:', error);
      });
  }, [id_buku]);

  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <i
          key={i}
          className={`icon ${i <= rating ? 'active' : ''}`}
        ></i>
      );
    }
    return stars;
  };

  return (
    <div className="ui star rating">
      {rating !== null ? (
        <>
          {renderStars()}
          <div className="meta">{`Rating: ${rating || 'Not rated'}`}</div>
        </>
      ) : (
        <div className="ui active inline "></div>
      )}
    </div>
  );
};

export default Bintang;
