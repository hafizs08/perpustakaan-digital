
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import Home from "./component/Home";
import About from "./component/About";
import DaftarCatatan from "./component/DaftarCatatan";
import UserList from "./component/UserList";
import PostList from "./component/PostForm";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/daftar-catatan" element={<DaftarCatatan />} />
        <Route path="Users" element={<UserList />} />
        <Route path="post" element={<PostList />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
