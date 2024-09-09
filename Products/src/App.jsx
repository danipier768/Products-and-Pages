import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { Link, Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/home/Home.jsx";
import Products from "./pages/Products/Products.jsx";
import Users from "./pages/Users/Users.jsx";
function App() {
  return (
    <>
      <BrowserRouter>
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
          <div className="container-fluid">
            <h1 className="navbar-brand">The productos and the Users</h1>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarCollapse"
              aria-controls="navbarCollapse"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
              <ul className="navbar-nav me-auto mb-2 mb-md-0 flex-grow-1s">
                <li className="nav-item">
                  <Link className="nav-link active" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/products">
                    Products
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/users">
                    Users
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route path="/users" element={<Users />} />
            </Routes>
        </div>
          
      </BrowserRouter>
    </>
  );
}

export default App;
