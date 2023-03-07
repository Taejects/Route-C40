import { loaderDisplay, loaderHide } from "./game-loader.js";

class GameModal {
  constructor(gameDetails) {
    this.gameDetails = gameDetails;
    console.log(this.gameDetails);
    this.title = document.querySelector("#game-details .modal-title");
    this.featureImage = document.querySelector("#game-details .game-thumb img");
    this.genre = document.querySelector("#game-details .game-category span");
    this.platform = document.querySelector("#game-details .game-platform span");
    this.status = document.querySelector("#game-details .game-status span");
    this.description = document.querySelector("#game-details .game-desc");
    this.btn = document.querySelector("#game-details .game-show");
    this.displayGameDetails();
    this.closeModal();
  }
  displayGameDetails() {
    document.querySelector("#game-details").classList.add("show", "d-flex");
    document.querySelector("#game-details").classList.remove("d-none");
    this.title.innerHTML = this.gameDetails.title;
    this.featureImage.src = this.gameDetails.thumbnail;
    this.featureImage.alt = this.gameDetails.title;
    this.genre.innerHTML = this.gameDetails.genre;
    this.platform.innerHTML = this.gameDetails.platform;
    this.status.innerHTML = this.gameDetails.status;
    this.description.innerHTML = this.gameDetails.description;
    this.btn.href = this.gameDetails.game_url;
  }
  closeModal() {
    document.querySelector("#game-details .btn-close").addEventListener("click", function () {
      document.querySelector("#game-details").classList.remove("show", "d-flex");
      document.querySelector("#game-details").classList.add("d-none");
    });
  }
}

export function selectGame() {
  let listedGames = Array.from(document.querySelectorAll("#games-list a"));
  /* Loop function to add Event Listener and call API function to show Game Details*/
  for (let singleGame of listedGames) {
    singleGame.addEventListener("click", async function (e) {
      e.stopPropagation();
      loaderDisplay();
      console.log(e.target);
      let gameID = this.getAttribute("data-id");
      console.log(gameID);
      let url = `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${gameID}`;
      let gameDetails = await getGameDetails(url);
      console.log(gameDetails);
      new GameModal(gameDetails);
      loaderHide();
    });
  }
}

// Fetch Game Details ------------------------- */
async function getGameDetails(urlGameID) {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "0cd674e85dmsh771e31f91a60d94p184433jsn468596cfa9b4",
      "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
    },
  };

  let detailsResponse = await fetch(urlGameID, options);
  let detailsResults = await detailsResponse.json();
  return detailsResults;
}
