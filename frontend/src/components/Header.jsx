import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/Logo.png";
import api from "../services/api";

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
    <header className="bg-white border-bottom">
      <nav className="container d-flex align-items-center justify-content-between py-3">
        <Link to="/" className="d-flex align-items-center">
          <img
            src={logo}
            alt="Trouve ton artisan"
            style={{ height: "55px" }}
          />
        </Link>

        <div className="d-flex align-items-center gap-4">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/artisans?category=${encodeURIComponent(category.name)}`}
              className="text-decoration-none text-dark"
            >
              {category.name}
            </Link>
          ))}
        </div>

        <form onSubmit={handleSearch} className="d-flex">
          <input
            type="search"
            className="form-control"
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