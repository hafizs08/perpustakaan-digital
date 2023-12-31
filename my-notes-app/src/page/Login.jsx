import { useUser } from "../component/UserContext";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

const Login = () => {
  const { login } = useUser();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [kataSandi, setKataSandi] = useState("");

  const handleLogin = async () => {
    try {
      const response = await axios.post(
        "http://localhost:8181/pengguna/login",
        {
          email: email,
          kataSandi: kataSandi,
        }
      );

      const userData = response.data;
      // Simpan id_pengguna ke dalam state setelah login
      login({ ...userData, id_pengguna: userData.id_pengguna });

      // Jika login berhasil, arahkan ke halaman home
      navigate("/");
    } catch (error) {
      console.error("Error during login:", error);

      if (error.response) {
        console.error("Server response data:", error.response.data);
        alert("Login gagal. Periksa email dan kata sandi Anda.");
      } else {
        alert("Terjadi kesalahan saat melakukan login.");
      }
    }
  };

  return (
    <div className="container mt-5 col-md-5">
      <div className="card">
        <div className="card-body">
          <h1 className="card-title">Login</h1>
          <form>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email:
              </label>
              <input
                type="text"
                className="form-control"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password:
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                value={kataSandi}
                onChange={(e) => setKataSandi(e.target.value)}
              />
            </div>
            <button
              type="button"
              className="btn btn-primary center-block center col-md-12"
              onClick={handleLogin}
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
