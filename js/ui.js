export class UI {
  displaygameData(response) {
    let moloading = document.querySelector(".moloading");
    moloading.classList.remove("d-none");
    let gameDataSection = document.querySelector("#gameData");
    let gamescontainer = "";
    for (let i = 0; i < response.length; i++) {
      gamescontainer += `
            <div class="col">
            <div data-id="${response[i].id}" class="card h-100 bg-transparent" role="button" "="">
           <div class="card-body">
              <figure class="position-relative">
                <img class="card-img-top object-fit-cover h-100" src="${response[i].thumbnail}">
    
              </figure>
    
              <figcaption>
    
                <div class="hstack justify-content-between">
                  <h3 class="h6 small">${response[i].title}</h3>
                  <span class="badge text-bg-primary p-2">Free</span>
                </div>
    
                <p class="card-text small text-center opacity-50">
                ${response[i].short_description}
                </p>
    
              </figcaption>
            </div>
    
            <footer class="card-footer small hstack justify-content-between">
    
              <span class="badge badge-color">${response[i].genre}</span>
              <span class="badge badge-color">${response[i].platform}</span>
    
            </footer>
          </div>
        </div>`;
    }
    gameDataSection.innerHTML = gamescontainer;
    moloading.classList.add("d-none");
  }
  displaygameDetails(response) {

    let moloading = document.querySelector(".moloading");
    moloading.classList.remove("d-none");

    let mogamedetailes = document.querySelector(".mogamedetailes");
    mogamedetailes.classList.remove("d-none");

    let gamedetailscontent = `
      <div class="row container d-flex align-content-center  m-auto position-relative">
      <div class="exitbtn"></div>
            <div class="mt-5 col-sm-12 col-md-4">
              <h2>Title: ${response.title}</h2>
              <img src="${response.thumbnail}" class="w-100" alt="image details">
            </div>
            <div class="mt-5 col-sm-12 col-md-8">
              <h3>Game Detailes</h3>
              <p>Category: <span class="badge text-bg-info"> ${response.genre}</span> </p>
              <p>Platform: <span class="badge text-bg-info"> ${response.platform}</span> </p>
              <p>Status: <span class="badge text-bg-info"> ${response.status}</span> </p>
              <p class="small">${response.description}</p>
              <a class="btn btn-outline-warning" target="_blank" href="${response.game_url}">Show
                Game</a>
            </div>
          </div>`;

    mogamedetailes.innerHTML = gamedetailscontent;
    moloading.classList.add("d-none");
    this.exitclick();
  }
  exitclick() {
    let btnExit = document.querySelector(".exitbtn");
    btnExit.addEventListener("click", () => {
      document.querySelector(".games").classList.remove("d-none");
      document.querySelector(".mogamedetailes").classList.add("d-none");
    });
  }
}
