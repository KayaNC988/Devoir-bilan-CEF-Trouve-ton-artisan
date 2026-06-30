import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../services/api";

function Header() {
  const [categories, setCategories] = useState([]);

    useEffect(() => {
        api.get("/categories")
            .then((response) => {
                setCategories(response.data);
            })
            .catch((error) => {
                console.error("Error fetching categories:", error);
            });
    }, []);

    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-light bg-light" >
                <div className="container">
                    <Link className="navbar-brand" to="/">Trouve ton artisan</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                     {       categories.map((category) => (
                                <li className="nav-item" key={category.id}>
                                    <Link className="nav-link" to={`/categories/${category.id}/artisans`}>{category.name}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;