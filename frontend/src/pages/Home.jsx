import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../services/api";


function Home() {

  const [topArtisans, setTopArtisans] = useState([]);

useEffect(() => {
    api.get("/artisans/top")
        .then((response) => {
            setTopArtisans(response.data);
        })
        .catch((error) => {
            console.error("Erreur chargement des artisans :", error);
        });

}, []);


  return (
    <div className="container mt-5">

      <h1 className="display-4 fw-bold">
        Trouve ton artisan
      </h1>

      <p className="lead mt-3">
        La plateforme qui vous permet de trouver facilement un artisan
        qualifié dans votre région.
      </p>

      <hr className="my-5" />

      <h2>Comment trouver mon artisan ?</h2>

      <div className="row mt-4">

        <div className="col-md-3">
          <div className="card text-center p-3">
            <h1>1</h1>
            <p>Choisir une catégorie.</p>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card text-center p-3">
            <h1>2</h1>
            <p>Sélectionner un artisan.</p>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card text-center p-3">
            <h1>3</h1>
            <p>Envoyer une demande.</p>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card text-center p-3">
            <h1>4</h1>
            <p>Recevoir une réponse sous 48 h.</p>
          </div>
        </div>

      </div>
      <section id="top-artisans" className="mt-5">
        <h2 className="mb-4">Nos artisans les mieux notés</h2>

        <div className="row g-4">
          {topArtisans.map((artisan) => (
            <div className="col-md-4" key={artisan.id}>
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h3 className="card-title h5">{artisan.name}</h3>
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
      </section>

    </div>
  );
}

export default Home;
