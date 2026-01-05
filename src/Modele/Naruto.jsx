export default class Naruto{
    static async getNaruto(){
        const response = await fetch('https://dattebayo-api.onrender.com/characters');
        const data = await response.json();
        return data;
    }
}