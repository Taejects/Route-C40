import { GameCards } from "./game-cards.js";
import { selectGame } from "./game-modal.js";
import { loaderDisplay, loaderHide } from "./game-loader.js";

export class GameGenre {
  constructor() {
    this.url = ``;
    /* Array from genres form radio buttons */
    this.gameGenres = Array.from(document.getElementsByName("game-genre"));
    /* Check which option is checked by default [1st option] */
    this.selectedGenre = this.gameGenres.find((input) => input.checked).value;
    /* Run selectGenre function */
    this.selectGenre();
    // let gamesResult = new GameCard(gamesResult);
  }

  async selectGenre() {
    loaderDisplay();
    /* Assign checked input value to API function for default results */
    this.url = `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${this.selectedGenre}`;
    let gamesList = await getGenre(this.url);
    new GameCards(gamesList);
    loaderHide();

    /* Loop function to add Event Listener and call API function with the new genre value*/
    for (let genre of this.gameGenres) {
      genre.addEventListener("click", async function (e) {
        loaderDisplay();
        document.querySelector("#genre-select .btn-warning").classList.add("btn-outline-warning");
        document.querySelector("#genre-select .btn-warning").classList.remove("btn-warning");
        this.parentElement.classList.remove("btn-outline-warning");
        this.parentElement.classList.add("btn-warning");

        this.selectedGenre = e.target.value;
        this.url = `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${this.selectedGenre}`;
        gamesList = await getGenre(this.url);
        document.querySelector(".container").innerHTML += gamesList[0].title;
        new GameCards(gamesList);
        selectGame();
        loaderHide();
      });
    }
  }
}

// Fetch Game List ---------------------------- */
async function getGenre(url) {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "0cd674e85dmsh771e31f91a60d94p184433jsn468596cfa9b4",
      "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
    },
  };

  let response = await fetch(url, options);
  let results = await response.json();
  return results;
}
