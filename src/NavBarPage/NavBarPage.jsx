import { faUser } from '@fortawesome/free-regular-svg-icons';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export default function NavBarPage() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">

          <Link className="navbar-brand text-primary" to="/">
           <img src="luffyEntete.png" alt="" style={{width:"70px"}} /> Accueil
          </Link>


          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >


          <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">

                <Link className="nav-link text-primary" to="/Page_Liste_1">
                  Personnages One Piece
                </Link>

              </li>
              <li className="nav-item">

                <Link className="nav-link text-primary" to="/Page_Liste_2">
                  Personnages Naruto
                </Link>

              </li>
              {/* <li className="nav-item">

                <Link className="nav-link" to="/RandomDog">
                  Chien généré aléatoirement
                </Link>
                
              </li> */}
              
            </ul>
            <ul className="navbar-nav  mb-2 mb-lg-0">
              <li className="nav-item">
              <Link className="nav-link text-primary  " to="/connexion">
                <h1 className='fs-5'><FontAwesomeIcon icon={faUser} className='text-primary'/>Connexion</h1>
             
                
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
