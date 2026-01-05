import { signal } from "@preact/signals-react";

export default class Signals{
    
    static personnage = signal([
        {
            id:"1",
            age: "19 ans",
            crew:{
                name:"L’équipage du Chapeau de Paille"
            },
            fruit:{
                name:"Fruit du Gum-Gum"
            },
            job:"Capitaine",
            name:"Monkey D Luffy",
            status: "vivant"
          
        },
      ]);

    static zoomPerson=signal([{
        id:"1",
        age: "19 ans",
        crew:{
            name:"L’équipage du Chapeau de Paille"
        },
        fruit:{
            name:"Fruit du Gum-Gum"
        },
        job:"Capitaine",
        name:"Monkey D Luffy",
        status: "vivant"
      
    },]);

    static personnageNaruto=signal([{
        id:"1344",
        name:"Naruto Uzumaki",
        sex:"Male",
        clan:"Uzumaki",
        birthdate:"October 10",
        images:"https://static.wikia.nocookie.net/naruto/images/d/d6/Naruto_Part_I.png"

    },
]);

static zoomPersonNaruto=signal([{
    id:"1344",
    name:"Naruto Uzumaki",
    sex:"Male",
    clan:"Uzumaki",
    birthdate:"October 10",
    images:"https://static.wikia.nocookie.net/naruto/images/d/d6/Naruto_Part_I.png"

  
},]);

}