export default class OnePiece{
    static async getOnePiece(){
        const response = await fetch('https://api.api-onepiece.com/v2/characters/fr');
        const data = await response.json();
        return data;
    }

    
  static tabImage = [
    "",
    "luffy.png",
    "zoro.png",
    "Nami.jpeg",
    "usopp.jpeg",
    "sanji.png",
    "tony.png",
    "nico.png",
    "francky.jpeg",
    "brook.jpeg",
    "jinbe.jpg",
    "zeus.jpeg",
    "cavendish.jpg",
    "suleiman.jpeg",
    "bartolomeo.png",
    "gambia.jpeg",
    "sai.jpeg",
    "boojpeg.jpeg",
    "Baby5.jpeg",
    "ideo.jpeg",
    "gilly.png",
  ];
}