import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import api from "../services/api";
import "../styles/artisandetail.css";

function ArtisanDetail() {
  const { id } = useParams();
  const [artisan, setArtisan] = useState(null);

    useEffect(() => {
        api.get(`/artisans/${id}`)
            .then((response) => {
                setArtisan(response.data);
            })
            .catch((error) => {
                console.error("Erreur chargement de l'artisan :", error);
            });
    }, [id]);

    if (!artisan) {
        return <p className="container py-5">Chargement...</p>;     
    }

   return (
  <main className="artisan-detail-page">
    <article className="artisan-detail-card">
      <Link to="/artisans" className="artisan-back-button">
        Retour à la liste des artisans
      </Link>

      <h1 className="artisan-detail-title">{artisan.name}</h1>

      <div className="artisan-detail-infos">
        <p>
          <strong>Métier :</strong> {artisan.Specialty?.name}
        </p>

        <p>
          <strong>Ville :</strong> {artisan.city}
        </p>
         <p>
          <strong>Note :</strong> {artisan.note}/5
        </p>
      </div>

      <section className="artisan-detail-about">
        <h2>À propos</h2>
        <p>{artisan.about}</p>
      </section>

      <p className="artisan-detail-contact">
        <strong>Email :</strong>{" "}
        <a href={`mailto:${artisan.email}`}>{artisan.email}</a>
      </p>

      {artisan.website && (
        <p className="artisan-detail-contact">
          <strong>Site web :</strong>{" "}
          <a
            href={artisan.website}
            target="_blank"
            rel="noreferrer"
          >
            {artisan.website}
          </a>
        </p>
      )}
    </article>
  </main>
);
    
}

export default ArtisanDetail;
