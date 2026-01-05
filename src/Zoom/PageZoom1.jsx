
import OnePiece from "../Modele/OnePiece";
import Signals from "../Signals";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBackwardFast } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function PageZoom1() {
  return (
    <>
      <div
        id="page"
        className="container-fluid  d-flex  align-items-center justify-content-evenly "
        style={{
          backgroundImage: "url('back.jpg')",
         
         
        }}
      >
        <div id="info" style={{ height: "100%" }}>
          {personne()}
        </div>
      </div>
    </>
  );
}

function personne() {
  return (
    <div
      id={Signals.zoomPerson.value[0].id}
     
      style={{
        height:"100%",
        
      }}
    >
      <div className="row">

       <div className="col-1 mt-4">
       <Link to="/Page_Liste_1" style={{textDecoration:'none'}}>
        
        <FontAwesomeIcon
              icon={faBackwardFast}
              style={{ color: "red", margin: "0",float:"left",height:"20px "} }
            /> 
         </Link>
         </div>
        <div className="col-sm-12 col-md-7 col-lg-7">
          <p
            
            style={{ fontWeight: "bold", color: "black" }}
          >
            
            <span>Nom: {Signals.zoomPerson.value[0].name}</span>
            <br />
            <span>Age: {Signals.zoomPerson.value[0].age}</span>
            <br />
            <span>Size: {Signals.zoomPerson.value[0].size}</span>
            <br />
            <span> bounty: {Signals.zoomPerson.value[0].bounty}</span><br />
            <span>Total prime: {Signals.zoomPerson.value[0].crew.total_prime}</span><br />
            <span>Equipe: {Signals.zoomPerson.value[0].crew.name}</span>
            <span>Vivant ou non ? : {Signals.zoomPerson.value[0].status}</span>
          </p>
        </div>
        
        <div id="img" className="col-sm-12 col-md-4 col-lg-4" style={{height:"100%",}}>
          <img
            src={OnePiece.tabImage[Signals.zoomPerson.value[0].id]}
            style={{height:"40rem",width:"18rem"}}
          />
          
        </div>

        
      </div>
      
    </div>
  );
}