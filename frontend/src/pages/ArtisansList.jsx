import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import api from "../services/api";
import "../styles/artisanslist.css";

function ArtisansList() {
  const [artisans, setArtisans] = useState([]);
  const [searchParams] = useSearchParams();
  const [name, setName] = useState(searchParams.get("name") || "");
  const [city, setCity] = useState(searchParams.get("city") || "");
  
  const category = searchParams.get("category");

  useEffect(() =>{   
setName(searchParams.get("name") || "");
setCity(searchParams.get("city") || "");
}, [searchParams]);


  const handleSearch = (event) => {
    event.preventDefault();

    api.get(`/artisans/search?name=${name}&city=${city}`)
      .then((response) => {
        setArtisans(response.data);
        })
        .catch((error) => {
            console.error("Erreur chargement artisans :", error);
        });
  };
  useEffect(() => {
    let url = "/artisans";

    if (category) {
      url = `/artisans/category/${encodeURIComponent(category)}`;
    }

    if (name) {
      url = `/artisans/search?name=${name}`;
    }

    api.get(url)
      .then((response) => {
        setArtisans(response.data);
      })
      .catch((error) => {
        console.error("Erreur chargement artisans :", error);
      });
  }, [category, name]);

    return (  
        <main className="artisans-list-page">
            <h1 className="artisans-list-title">Nos artisans</h1>

            <form onSubmit={handleSearch} className="row justify-content-center align-items-center g-3 mb-5">
                <div className="col-12 col-md-4">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Rechercher un métier"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className="col-12 col-md-4">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Ville"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                    />
                </div>
                <div className="col-12 col-md-auto">
                    <button type="submit" className="btn btn-primary">
                        Rechercher
                    </button>
                </div>
            </form>

            <div className="row g-4">
                {artisans.map((artisan) => (
                    <div className="col-12 col-md-6 mb-4" key={artisan.id}>
                        <div className="artisans-card card h-100 shadow-sm">
                            <div className="card-body">
                                <h2>{artisan.name}</h2>
                                <p className="mb-1">
                                    <strong>Métier : </strong>{artisan.Specialty?.name}
                                </p>
                                <p className="mb-1">
                                    <strong>Ville : </strong>{artisan.city}
                                </p>
                                <p className="mb-3">
                                    <strong>Note : </strong>{artisan.note}/5
                                </p>

                                <Link to={`/artisans/${artisan.id}`} className="artisan-card-btn">
                                    Voir le profil
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </main>
    );
}

export default ArtisansList;