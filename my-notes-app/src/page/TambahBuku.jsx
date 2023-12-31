import React, { useState } from "react";
import "semantic-ui-css/semantic.min.css";

const TambahBuku = () => {
  const [dataBuku, setDataBuku] = useState({
    judul: "",
    penulis: "",
    tahun_terbit: 0,
    isbn: "",
    gambar: "",
    jumlah_buku: 0,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setDataBuku((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("http://localhost:8181/buku", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataBuku),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Gagal menambahkan buku");
        }
        return response.json();
      })
      .then((data) => {
        // Handle respons berhasil, misalnya menampilkan pesan sukses atau mengarahkan halaman
        console.log("Buku berhasil ditambahkan:", data);
        alert("Buku berhasil ditambahkan");
      })
      .catch((error) => console.error("Error menambahkan buku:", error));
  };

  return (
    <form onSubmit={handleSubmit} className="ui form container">
      <h3 class="ui dividing header center">Tambah Buku</h3>
      <div className="field">
        <label>Judul:</label>
        <input
          type="text"
          name="judul"
          value={dataBuku.judul}
          onChange={handleInputChange}
          placeholder="Masukkan judul buku"
        />
      </div>
      <div className="field">
        <label>Penulis:</label>
        <input
          type="text"
          name="penulis"
          value={dataBuku.penulis}
          onChange={handleInputChange}
          placeholder="Masukkan nama penulis"
        />
      </div>
      <div className="field">
        <label>Tahun Terbit:</label>
        <input
          type="number"
          name="tahun_terbit"
          value={dataBuku.tahun_terbit}
          onChange={handleInputChange}
          placeholder="Masukkan tahun terbit"
        />
      </div>
      <div className="field">
        <label>ISBN:</label>
        <input
          type="text"
          name="isbn"
          value={dataBuku.isbn}
          onChange={handleInputChange}
          placeholder="Masukkan ISBN"
        />
      </div>
      <div className="field">
        <label>Gambar:</label>
        <select
          name="gambar"
          value={dataBuku.gambar} // Perubahan di sini
          onChange={handleInputChange} // Tambahkan jika diperlukan
          className="ui fluid dropdown"
        >
          <option value="">Pilih Gambar</option>
          <option value="https://media.istockphoto.com/id/183890264/id/foto/buku-merah-tegak-dengan-jalur-kliping.webp?s=1024x1024&w=is&k=20&c=BZWH0co9239W3xJiONIUHZFqTJTHYcarrvcP3MgxKtM=">
            Buku Merah
          </option>
          <option value="https://media.istockphoto.com/id/162833245/id/foto/buku-kosong.webp?s=1024x1024&w=is&k=20&c=RSTxsU786S4Xg7-h22qOS3yikXX5exjIiHcPYN9Bpkg=">
            Buku Biru
          </option>
          <option value="https://media.istockphoto.com/id/162259067/id/foto/buku-kosong.jpg?s=612x612&w=0&k=20&c=ysRRdhlZCrDZQYphJwPF8JCiRm6KvFKHTY2nlTnYzmc=">
            Buku hijau
          </option>
          <option value="https://media.istockphoto.com/id/162832807/id/foto/buku-kosong.webp?s=1024x1024&w=is&k=20&c=52ofIBeVbitBdRwDJzyTx7geqVoPDa2csZP2zz6OLqc=">
            Buku Hitam
          </option>
          <option value="https://media.istockphoto.com/id/1325103413/id/foto/notepad-kosong-violet-pada-latar-belakang-pastel-ilustrasi-render-3d-sederhana.webp?s=1024x1024&w=is&k=20&c=A4zmokyxAxrIy2EiA76rAtk6PHzQK0pKMb317HPVgtA=">
            Buku Ungu
          </option>
        </select>
      </div>
      <div className="field">
        <label>Jumlah Buku:</label>
        <input
          type="number"
          name="jumlah_buku"
          value={dataBuku.jumlah_buku}
          onChange={handleInputChange}
          placeholder="Masukkan jumlah buku"
        />
      </div>
      <button type="submit" className="ui button primary">
        Tambahkan Buku
      </button>
    </form>
  );
};

export default TambahBuku;
