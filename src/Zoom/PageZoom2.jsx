
import Signals from "../Signals";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBackwardFast } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function PageZoom2() {
    return (
      <> 
      
      <div
        id="page"
        className="container-fluid  d-flex  align-items-center justify-content-evenly "
        style={{
          backgroundImage: "url('backNaruto.jpeg')",
         
          backgroundAttachment: "fixed",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundColor: "black",
        }}
      >
        <div id="info" style={{ height: "100%" }}>
          {personneNaruto()}
        </div>
      </div>
      </>)}

function personneNaruto() {
  return (
    <div
      id={Signals.zoomPersonNaruto.value[0].id}
     
      style={{
        height:"100%",
        // backgroundImage: "url('background.jpeg')",
      }}
    >
      <div className="row">

      <div className="col-1 mt-4">
       <Link to="/Page_Liste_2" style={{textDecoration:'none'}}>
        
        <FontAwesomeIcon
              icon={faBackwardFast}
              style={{ color: "red", margin: "0",float:"left",height:"20px " } }
            /> 
         </Link>
         
         </div>
        <div className="col-sm-12 col-md-3 col-lg-3">
          <p
            
            style={{ fontWeight: "bold", color: "red" }}
          >
            <span>Id:{Signals.zoomPersonNaruto.value[0].id} <br /></span>
            <span>Nom: {Signals.zoomPersonNaruto.value[0].name}</span>
            <br />
            <span>Numéro de ninja: {Signals.zoomPersonNaruto.value[0].rank.ninjaRegistration}</span>
            <br />
            <span>Sexe: {Signals.zoomPersonNaruto.value[0].personal.sex}</span>
            <br />
            <span>Premier Jutsu: {Signals.zoomPersonNaruto.value[0].jutsu[0]}</span>
            <br />
            {/* <span>Fruits: {person.fruit.name}</span><br /> */}
            {/* <span>Equipe: {Signals.zoomPerson.value[0].crew.name}</span> */}
          </p>
        </div>
        
        <div id="img" className="col-sm-12 col-md-8 col-lg-8" style={{height:"100%",}}>
          <img
            src={Signals.zoomPersonNaruto.value[0].images[0]}
            style={{height:"45rem",width:"30rem"}}
          />
        </div>

      </div>
      
    </div>
  );
}