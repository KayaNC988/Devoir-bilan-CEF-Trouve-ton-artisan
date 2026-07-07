import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/Logo.png";
import api from "../services/api";
import "../styles/header.css";

function Header() {
  const [categories, setCategories] = useState([]);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    api
      .get("/categories")
      .then((response) => {
        setCategories(response.data);
      })
      .catch((error) => {
        console.error("Erreur chargement catégories :", error);
      });
  }, []);

  const handleSearch = (event) => {
    event.preventDefault();

    if (search.trim() !== "") {
      navigate(`/artisans?name=${search}`);
      setSearch("");
    }
  };

  return (
    <header className="site-header">
      <nav className="header-container">
        <Link to="/" className="header-logo">
          <img
            src={logo}
            alt="Trouve ton artisan"
            style={{ height: "95px" }}
          />
        </Link>

        <div className="header-nav">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/artisans?category=${encodeURIComponent(category.name)}`}
              className="header-link"
            >
              {category.name}
            </Link>
          ))}
        </div>

        <form onSubmit={handleSearch} className="header-search">
          <input
            type="search"
            placeholder="Rechercher un artisan"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />
        </form>
      </nav>
    </header>
  );
}

export default Header;