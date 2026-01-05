import Signals from "../Signals";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Controller from "../Controller";
export default function PageListe2() {
    return (
      <> 
      <div
        id="page2"
        className="container-fluid "
        style={{ backgroundColor: "black",
        backgroundImage: "url('backNaruto.jpg')",
         
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
       
         }}
      >
        <h1 className="h1 p-5 ">Liste des personnages de Naruto</h1>
        <div className="form-group d-inline-block " style={{ float: "right" }}>
          <input
            onChange={Controller.tri1}
            type="text"
            id="recherche"
            placeholder="ID:1344 "
          />
          <label htmlFor="recherche">
            <FontAwesomeIcon
              icon={faSearch}
              style={{ color: "white", margin: "5px" }}
            />
          </label>
          
        </div> <br /><br />
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
      </>)}

function personne() {
    return Signals.personnageNaruto.value.map((person) => {
      return (
        <div
          id={person.id}
          key={person.id}
          className="card card-fluid"
          style={{
            width: "18rem",
            height: "24rem",
            backgroundImage: "url('background.jpeg')",
            
          }}
          onMouseOver={()=>{hover(person)}}
          onMouseOut={()=>{out(person)}}
          onClick={()=>{zoom(person)}}
          
        >
          <Link to="/Zoom2" style={{textDecoration:'none'}}>
         
            <img
              src={person.images[0]}
              className="card-img-top img-fluid"
              style={{ height: "13rem" }}
            />
            <div className="card-body" >
              <p
                className="card-text "
                style={{ fontWeight: "bold", color: "white" }}
              >
                <span>Id: {person.id}</span><br />
                <span>Nom: {person.name}</span><br />
                {/* <span>debut d'animé: {person.debut.anime}</span><br /> */}
                {/* <span>clan: {person.personal.clan}</span><br /> */}
                {/* <span>Date d'anniversaire: {person.personal.birthdate}</span><br /> */}
                
                <br />
             
              </p>
            </div>
            <br />
          </Link>
        </div>
      );
    });
  }
  
  function zoom(personnage) {
    Signals.zoomPersonNaruto.value = Signals.personnageNaruto.value.filter(t => t === personnage);

   }
  
   function hover(div) {
    const card=document.getElementById(div.id);
    card.style.width="21rem"
    card.style.height="28rem"
    
   }
   function out(div) {
    const card=document.getElementById(div.id);
    card.style.width="18rem"
    card.style.height="24rem"
   }

 