import { Details } from "./details.js";
import { UI } from "./ui.js";


export class Games {
    constructor() {
        this.getgames("mmorpg");

        document.querySelectorAll(".nav-item a").forEach((link) => {
            link.addEventListener("click", (e) => {
                document.querySelector(".menu .active").classList.remove("active");
                e.target.classList.add("active");
                this.getgames(e.target.dataset.category);
            })
        });

        this.ui = new UI;
    }

    async getgames(categoryname) {
        let moloading = document.querySelector(".moloading");
        moloading.classList.remove("d-none");

        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '1cda19e953mshc3c8cd2b4ffcff4p1f7b30jsn4b53763ca435',
                'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };

        let apifetch = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${categoryname}`, options);
        let response = await apifetch.json();
        this.ui.displaygameData(response);
        this.cardclick();
        moloading.classList.add("d-none");
    }

    cardclick() {
        document.querySelectorAll(".card").forEach((item) => {
           item.addEventListener("click", () => {
              const id = item.dataset.id;
              this.showDetails(id);
           });
        });
     }
  

    showDetails(idGame) {
        const details = new Details(idGame);
        document.querySelector(".games").classList.add("d-none");
        document.querySelector(".mogamedetailes").classList.remove("d-none");
     }

    
}
