import Naruto from "./Modele/Naruto";
import OnePiece from "./Modele/OnePiece";
import Signals from "./Signals";

document.addEventListener("DOMContentLoaded", () => {
  

  let tab = [];
  OnePiece.getOnePiece().then((onePiece) => {
    for (let index = 0; index < 20; index++) {
      tab[index] = onePiece[index];
   
    }
    Signals.personnage.value = tab;
 
  });

   Naruto.getNaruto().then((naruto)=>{
    
    Signals.personnageNaruto.value=naruto.characters;
   
   })
});

// function valid() {
//   const formulaire = document.querySelector("form");
// const prenom = formulaire.querySelector('input[name="prenom"]');
// const nom = formulaire.querySelector('input[name="nom"]');

//   formulaire.classList.add("was-validated");

// if (prenom.value === "") {
//   prenom.classList.add("is-invalid");
// } else {

//   prenom.classList.remove("is-invalid");
// }
// if (nom.value === "") {
//   nom.classList.add("is-invalid");
// } else {
//   nom.classList.remove("is-invalid");
// }
// }

export default class Controller {
  static tri() {
    const recherche = document.querySelector("#recherche");
    const aucun = document.getElementById("aucun");
    const plus = document.getElementById("plus");

    let trouve = false;

    //   Signals.personnage.value= Signals.personnage.v.filter(a=>{a.age==recherche.value
    //  console.log(a.age);
    //  console.log(recherche.value);}
    //  );

    Signals.personnage.value.forEach((a) => {
      if (a.age == recherche.value) {
        const id = document.getElementById(a.id);
        id.classList.remove("d-none");
        trouve = true;
        aucun.classList.add("d-none");
        plus.classList.remove("d-none");
      } else {
        const id = document.getElementById(a.id);
        id.classList.add("d-none");
        plus.classList.add("d-none");
        aucun.classList.remove("d-none");
      }
      if (recherche.value == "") {
        const id = document.getElementById(a.id);
        id.classList.remove("d-none");
          plus.classList.add("d-none");
          aucun.classList.remove("d-none");
        }
    });
    if (trouve) {
      aucun.classList.add("d-none");
      plus.classList.remove("d-none");
    }
    
  }

  static tri1() {
    const recherche = document.querySelector("#recherche");
    const aucun = document.getElementById("aucun");
    const plus = document.getElementById("plus");

    let trouve = false;

    //   Signals.personnage.value= Signals.personnage.v.filter(a=>{a.age==recherche.value
    //  console.log(a.age);
    //  console.log(recherche.value);}
    //  );

    Signals.personnageNaruto.value.forEach((a) => {
      if (a.id == recherche.value) {
        const id = document.getElementById(a.id);
        id.classList.remove("d-none");
        trouve = true;
        aucun.classList.add("d-none");
        plus.classList.remove("d-none");
      } else {
        const id = document.getElementById(a.id);
        id.classList.add("d-none");
        plus.classList.add("d-none");
        aucun.classList.remove("d-none");
      }
      if(recherche.value==""){
          const id = document.getElementById(a.id);
          aucun.classList.add("d-none");
          plus.classList.remove("d-none");
          id.classList.remove("d-none");
      }
    });
    if (trouve) {
      aucun.classList.add("d-none");
      plus.classList.remove("d-none");
    }
  }

  // for (let index = 0; index < tabImage.length; index++) {

  //   const id = document.getElementById(index);
  //   id.src=tabImage[index];
  // }
  // static tabperson(person){
  //   const tabperson=[];
  //   tabperson.push(person);

  //   return tabperson;
  // }

  
  
}
