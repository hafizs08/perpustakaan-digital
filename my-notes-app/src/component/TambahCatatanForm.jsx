import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const TambahCatatanForm = ({ tambahCatatan }) => {
  const [judul, setJudul] = useState('');
  const [isi, setIsi] = useState('');

  const MAX_JUDUL_LENGTH = 50;

  const handleTambahCatatan = () => {
    if (judul && isi) {
      tambahCatatan(judul, isi);
      setJudul('');
      setIsi('');
    } else {
      alert('Judul dan isi catatan harus diisi');
    }
  };

  const handleJudulChange = (e) => {
    const inputJudul = e.target.value;
    if (inputJudul.length <= MAX_JUDUL_LENGTH) {
      setJudul(inputJudul);
    }
  };

  return (
    <div>
      <h2>Tambah Catatan Baru</h2>
      <div className=''>
        <input
          type="text"
          className="form-control"
          placeholder='Tuliskan judul catatan di sini...'
          value={judul}
          onChange={handleJudulChange}
        />
        <small className="text-muted">{MAX_JUDUL_LENGTH - judul.length} karakter tersisa</small>
      </div>
      <label></label>
      <div>
        <textarea
          className="form-control"
          rows={5}
          placeholder='Tuliskan isi catatan di sini...'
          value={isi}
          onChange={(e) => setIsi(e.target.value)}
        />
      </div>
      <button className="btn btn-danger btn-lg btn-block mt-2 mb-2" onClick={handleTambahCatatan}>
        Tambah Catatan
      </button>
    </div>
  );
};

export default TambahCatatanForm;