// PeminjamanForm.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from './UserContext';
import "semantic-ui-css/semantic.min.css";

const PeminjamanForm = ({ book }) => {
  const { user } = useUser();
  const [peminjamanData, setPeminjamanData] = useState({
    tanggal_pinjam: "",
    tanggal_kembali: "",
  });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPeminjamanData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const id_pengguna = user ? user.id_pengguna : null;
  
    try {
      const response = await fetch("http://localhost:8181/peminjaman", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          pengguna: { id_pengguna: id_pengguna },
          buku: { id_buku: book.id_buku },
          tanggal_pinjam: peminjamanData.tanggal_pinjam,
          tanggal_kembali: peminjamanData.tanggal_kembali,
        }),
      });
  
      if (!response.ok) {
        throw new Error("Failed to submit borrowing request");
      }
  
      const data = await response.json();
      console.log("Peminjaman berhasil disubmit:", data);
  
      const peminjamanInfo = {
        id_buku: book.id_buku,
        id_pengguna: id_pengguna,
        judul: book.judul,
        penulis: book.penulis,
        tahun_terbit: book.tahun_terbit,
        isbn: book.isbn,
        gambar: book.gambar,
        jumlah_buku: book.jumlah_buku,
      };
  
      navigate("/Rating", { state: { peminjamanInfo } });
    } catch (error) {
      console.error("Error submitting borrowing request:", error);
      alert("Pastikan Anda sudah login.");
    }
  };

  return (
    <div className="card">
      <div className="card-body">
        <form onSubmit={handleSubmit}>
          <h2>Form Peminjaman</h2>
          <div className="form-group">
            <label>Tanggal Pinjam:</label>
            <input
              type="date"
              name="tanggal_pinjam"
              value={peminjamanData.tanggal_pinjam}
              onChange={handleInputChange}
              required
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label>Tanggal Kembali:</label>
            <input
              type="date"
              name="tanggal_kembali"
              value={peminjamanData.tanggal_kembali}
              onChange={handleInputChange}
              required
              className="form-control"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Pinjam Buku
          </button>
        </form>
      </div>
    </div>
  );
};

export default PeminjamanForm;
