import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const Catatan = ({ id, title, body, createdAt, hapusCatatan }) => {
  return (
    <div className="border p-3">
      <h3>{title}</h3>
      <p>{body}</p>
      <p>Created At: {createdAt}</p>
      <button className="btn btn-primary" onClick={() => hapusCatatan(id)}>Hapus</button>
    </div>
  );
};

export default Catatan;