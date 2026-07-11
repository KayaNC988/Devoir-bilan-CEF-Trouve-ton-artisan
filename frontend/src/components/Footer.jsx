import { Link } from "react-router-dom";
import "../styles/footer.css";

function Footer() {
    return (    
<footer className="site-footer">
  <div className="footer-container">
    <section className="footer-section">
      <h3>Informations</h3>

      <p>101 cours Charlemagne</p>
      <p>CS 20033</p>
      <p>69269 Lyon Cedex 02</p>
      <p>France</p>

      <p className="footer-phone">
        <strong>Téléphone :</strong> +33 (0)4 26 73 40 00
      </p>
    </section>

    <section className="footer-section">
      <h3>Pages légales</h3>

      <ul>
        <li><Link to="/mentions-legales">Mentions légales</Link></li>
        <li><Link to="/donnees-personnelles">Données personnelles</Link></li>
        <li><Link to="/accessibilite">Accessibilité</Link></li>
        <li><Link to="/cookies">Cookies</Link></li>
      </ul>
    </section>
  </div>

  <div className="footer-bottom">
    © 2026 Trouve ton artisan — Région Auvergne-Rhône-Alpes — Tous droits réservés
  </div>
</footer>
    );
}
        

export default Footer;
                        
      