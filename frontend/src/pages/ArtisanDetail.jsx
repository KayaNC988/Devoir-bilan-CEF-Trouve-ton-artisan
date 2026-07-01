import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import api from "../services/api";

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
        <main className="container py-5">
            <Link to="/artisans" className="btn btn-secondary mb-4">
                Retour à la liste des artisans
            </Link>

            <h1>{artisan.name}</h1>
            <p>Note : {artisan.note}/5</p>
            <p>Métier : {artisan.Specialty?.name}</p>
            <p>Ville : {artisan.city}</p>
            <p>À propos : {artisan.about}</p>
            <p>Email : {artisan.email}</p>
            {artisan.website && (
                <p>
                    site web :{" "}
                    <a href={artisan.website} target="_blank" rel="noreferrer">
                        {artisan.website}
                    </a>
                </p>
            )}
            
        </main>
    );
}

export default ArtisanDetail;
