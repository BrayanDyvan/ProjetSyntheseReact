import Signals from "../Signals";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Controller from "../Controller";
import OnePiece from "../Modele/OnePiece";
export default function PageListe1() {
  return (
    <>
      <div
        id="page1"
        className="container-fluid "
        style={{ backgroundColor: "black",
        backgroundImage: "url('backOne.jpg')",
         
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
         }}
      >
        <h1 className="h1 p-5 text-primary " >Liste des personnages de OnePiece</h1>
        <div className="form-group d-inline-block " style={{ float: "right" }}>
          <input
            onChange={Controller.tri}
            type="text"
            id="recherche"
            placeholder="ex:19 ans "
          />
          <label htmlFor="recherche">
            <FontAwesomeIcon
              icon={faSearch}
              style={{ color: "white", margin: "5px" }}
            />
          </label>
        </div>
        <br />
        <br />
        <br />
        <div className="container d-flex flex-wrap align-items-center justify-content-evenly gap-3">
          {personne()}
          
        </div>
      </div>
      <div id="plus" style={{ backgroundColor: "black",height:"100px" }} ></div>
      <div
        id="aucun"
        className="container-fluid vh-100 d-none  d-flex  align-items-center justify-content-center"
        style={{ backgroundColor: "black" }}
      >
        <h1 style={{ color: "white" }}>
          Aucun résultat{" "}
          <FontAwesomeIcon
            icon={faSearch}
            style={{ color: "white", margin: "10px", fontSize: "80px" }}
          />
        </h1>
      </div>
    </>
  );
}

function personne() {
  return Signals.personnage.value.map((person) => {
    return (
      <div
        id={person.id}
        key={person.id}
        className="card card-fluid"
        style={{
          width: "21rem",
          height: "28rem",
          backgroundImage: "url('background.jpeg')",
          
        }}
        onMouseOver={()=>{hover(person)}}
        onMouseOut={()=>{out(person)}}
        onClick={()=>{zoom(person)}}
        
      >
        <Link to="/Zoom1" style={{textDecoration:'none'}}>
        <img
            src={"onePieceTtre.jpeg"}
            className="card-img-top "
            style={{ height: "5rem" }}
          />
          <img
            src={OnePiece.tabImage[person.id]}
            className="card-img-top img-fluid"
            style={{ height: "13rem" }}
          />
          <div className="card-body" >
            <p
              className="card-text "
              style={{ fontWeight: "bold", color: "white" }}
            >
              <span>Nom: {person.name}</span>
              <br />
              <span>Age: {person.age}</span>
              <br />
              <span>Size: {person.size}</span>
              <br />
              {/* <span>Fruits: {person.fruit.name}</span><br /> */}
              <span>Equipe: {person.crew.name}</span>
            </p>
          </div>
          <br />
        </Link>
        
      </div>
    );
  });
}

function zoom(personnage) {
  Signals.zoomPerson.value = Signals.personnage.value.filter(t => t === personnage);

 }


 function hover(div) {
  const card=document.getElementById(div.id);
  card.style.width="22rem"
  card.style.height="29rem"
  
 }
 function out(div) {
  const card=document.getElementById(div.id);
  card.style.width="21rem"
  card.style.height="28rem"
 }