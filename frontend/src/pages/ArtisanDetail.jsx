import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import StarRating from "../components/StarRating";
import api from "../services/api";
import artisanDefault from "../assets/artisan-default.png";
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

      <div className="artisan-image">
        <img
        src={artisanDefault}
        alt={'Illustration de ${artisan.name}'}
        className="artisan-detail-image"
        />
      </div>

      <h1 className="artisan-detail-title">{artisan.name}</h1>

      <div className="artisan-detail-infos">
        <p>
          <strong>Métier :</strong> {artisan.Specialty?.name}
        </p>

        <p>
          <strong>Ville :</strong> {artisan.city}
        </p>
         <p>
          <StarRating note={artisan.note} />
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
            <section className="contact-section">
  <h2>Contacter cet artisan</h2>

  <form className="contact-form">
    <div className="mb-3">
      <label className="form-label">Nom</label>
      <input
        type="text"
        className="form-control"
        placeholder="Votre nom"
      />
    </div>

    <div className="mb-3">
      <label className="form-label">Email</label>
      <input
        type="email"
        className="form-control"
        placeholder="Votre adresse email"
      />
    </div>

    <div className="mb-3">
      <label className="form-label">Objet</label>
      <input
        type="text"
        className="form-control"
        placeholder="Objet de votre demande"
      />
    </div>

    <div className="mb-3">
      <label className="form-label">Message</label>
      <textarea
        className="form-control"
        rows="6"
        placeholder="Votre message..."
      ></textarea>
    </div>

    <button type="submit" className="contact-btn">
      Envoyer
    </button>
  </form>
</section>
    </article>
  </main>
);
    
}

export default ArtisanDetail;
