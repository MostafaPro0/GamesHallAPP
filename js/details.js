import { UI } from "./ui.js";

export class Details {
    constructor(id) {
        this.ui = new UI();

        this.displaygameDetails(id);

    }
    async displaygameDetails(gameid) {

        let moloading = document.querySelector(".moloading");
        moloading.classList.remove("d-none");

        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '1cda19e953mshc3c8cd2b4ffcff4p1f7b30jsn4b53763ca435',
                'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };

        fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${gameid}`, options)
            .then((response) => response.json())
            .then((response) => this.ui.displaygameDetails(response))
            .catch((err) => console.error(err))
            .finally(() => {
                moloading.classList.add("d-none");
            });
    }

}