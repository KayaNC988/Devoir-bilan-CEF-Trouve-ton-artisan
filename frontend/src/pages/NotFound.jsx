import { Link } from 'react-router-dom';
import '../styles/notfound.css';

function NotFound() {
    return (
        <div className="not-found">
             <h1>404</h1>

             <h2>Oups! cette page est introuvable.</h2>
             <p>La page que vous recherchez n'existe pas ou a peut-être été déplacé.</p>

             <Link to='/' className='home-button'>
             Retour a l'accueil</Link>
        </div>
       
    );
}

export default NotFound;