import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import api from "../services/api";

function ArtisansList() {
  const [artisans, setArtisans] = useState([]);
  const [searchParams] = useSearchParams();
  const [name, setName] = useState(searchParams.get("name") || "");
  const [city, setCity] = useState(searchParams.get("city") || "");

  const category = searchParams.get("category");


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
        <main className="container py-5">
            <h1 className="mb-4">Nos artisans</h1>

            <form onSubmit={handleSearch} className="g-3 mb-4">
                <div className="col mb-5">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Nom de l'artisan"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className="col mb-5">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Ville"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                    />
                </div>
                <div className="col-mb-2">
                    <button type="submit" className="btn btn-primary w-100">
                        Rechercher
                    </button>
                </div>
            </form>

            <div className="row g-4">
                {artisans.map((artisan) => (
                    <div className="col-md-4" key={artisan.id}>
                        <div className="card h-100 shadow-sm">
                            <div className="card-body">
                                <h2 className="card-title h5">{artisan.name}</h2>
                                <p className="mb-1">
                                    <strong>Métier : </strong>{artisan.Specialty?.name}
                                </p>
                                <p className="mb-1">
                                    <strong>Ville : </strong>{artisan.city}
                                </p>
                                <p className="mb-3">
                                    <strong>Note : </strong>{artisan.note}/5
                                </p>

                                <Link to={`/artisans/${artisan.id}`} className="btn btn-primary">
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