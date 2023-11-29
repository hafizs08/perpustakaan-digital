import React, { useState } from "react";
import Catatan from "./Catatan";
import { getInitialData } from "../utils";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "../App.css";
import TambahCatatanForm from "./TambahCatatanForm";

const DaftarCatatan = () => {
  const [catatan, setCatatan] = useState(getInitialData());

  const tambahCatatan = (judul, isi) => {
    const newNote = {
      id: +new Date(),
      title: judul,
      body: isi,
      archived: false,
      createdAt: new Date().toISOString(),
    };

    setCatatan([...catatan, newNote]);
  };

  const hapusCatatan = (id) => {
    const catatanBaru = catatan.filter((note) => note.id !== id);
    setCatatan(catatanBaru);
  };

  return (
    <div className="container">
      <TambahCatatanForm tambahCatatan={tambahCatatan} />
      <div className="row row-cols-1 row-cols-md-4 text-start">
        {catatan.length === 0 ? (
          <h1>Tidak ada catatan.</h1>
        ) : (
          catatan.map((catatan) => (
            <div key={catatan.id} className="col mb-4">
              <Catatan
                {...catatan}
                hapusCatatan={() => hapusCatatan(catatan.id)}
              />
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default DaftarCatatan;
