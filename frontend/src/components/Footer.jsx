import { Link } from "react-router-dom";
import "../styles/footer.css";

function Footer() {
    return (
        <footer className="footer mt-5">
            <div className="container py-4">
                <div className="row">
                    <div className="col-md-6 mb-3 mb-md-0">
                        <h5>Informations</h5>

                        <p>
                            101 cours Charlemagne
                            <br />
                            cs 20033
                            <br />
                            69269 Lyon Cedex 02
                            <br />
                            France
                        </p>

                        <p>
                            <strong>Téléphone :</strong> +33 (0)4 26 73 40 00
                            </p>
                            </div>

                            <div className="col-md-6">
                                <h5>Pages légales</h5>

                                <ul className="list-unstyled">
                                    <li>
                                        <Link to="/mentions-legales">
                                            Mentions légales
                                        </Link>
                                    </li>

                                    <li>
                                        <Link to="/donnees-personnelles">
                                            Données personnelles
                                        </Link>
                                    </li>

                                    <li>
                                        <Link to="/accessibilite">
                                            Accessibilité
                                        </Link>
                                    </li>

                                    <li>
                                        <Link to="/cookies">
                                            Cookies
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <hr />

                        <p classname="text-center mb-0">
                        © 2026 Trrouve ton artisan - Région Auvergne-Rhône-Alpes - Tous droits réservés
                        </p>
                    </div>
                </footer>
            );
        }

export default Footer;
                        
      