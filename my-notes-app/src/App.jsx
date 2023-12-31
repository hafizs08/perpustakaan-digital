import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./component/Navbar";
import DaftarCatatan from "./component/DaftarCatatan";
import Hooks from "./component/ExampleComponent";
import BookList from "./component/bookList";
import Home from "./page/Home";
import Login from "./page/login";
import Rating from "./page/Rating";
import DetailPage from './page/DetailPage';
import TambahBuku from "./page/TambahBuku";
import PeminjamForm from "./component/PeminjamanForm";
import Board from "./component/board";
import { UserProvider } from "./component/UserContext";

const App = () => {
  return (
    <BrowserRouter>
      <UserProvider>
        <AppWithNavbar />
      </UserProvider>
    </BrowserRouter>
  );
};

const AppWithNavbar = () => {
  const location = useLocation();
  const hideNavbarOnLogin = location.pathname === "/login";

  return (
    <>
      {!hideNavbarOnLogin && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail/:id_buku" element={<DetailPage />} />
        <Route path="/TambahBuku" element={<TambahBuku />} />
        <Route path="/Rating" element={<Rating />} />
        <Route path="/daftar-catatan" element={<DaftarCatatan />} />
        <Route path="/hooks" element={<Hooks />} />
        <Route path="/peminjaman" element={<Board />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
};

export default App;
