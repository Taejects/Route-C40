import { GameObject } from "./game-object.js";
import { selectGame } from "./game-modal.js";
import { loaderDisplay, loaderHide } from "./game-loader.js";

export class GameCards {
  constructor(gamesList) {
    this.gamesList = gamesList;
    this.featureImage;
    this.title;
    this.price;
    this.platform;
    this.genre;
    this.short_description;
    this.id;
    this.emptyGamesList();
    this.displayCards();
  }

  emptyGamesList() {
    document.querySelector("#games-list").innerHTML = "";
  }

  createGameCard(gameCard) {
    loaderDisplay();
    let card = document.createElement("div");
    card.setAttribute("class", "col-lg-3 col-md-4 col-sm-6 my-3");
    card.innerHTML = `
    <a href="#!" class="d-flex flex-column rounded-3 h-100 text-dark game-card bg-white text-decoration-none" data-id="${gameCard.id}">
      <div class="game-feature-img position-relative">
          <img src="${gameCard.featureImage}" class="rounded-top img-fluid">
          <span class="badge game--price position-absolute start-0 bg-warning text-dark fs-6 m-3">${gameCard.price}</span>
        </div>
      <div class="game-info p-3 d-flex flex-column flex-grow-1">        
          <h2 class="game-title fs-5 text-danger">${gameCard.title}</h2>
          <p class="game-description">${gameCard.short_description}</p>
          <div class="d-flex align-items-center justify-content-between mt-auto pb-1">
            <span class="game-genre badge text-bg-secondary">${gameCard.genre}</span>
            <span class="game-platform badge text-bg-secondary">${gameCard.platform}</span>
          </div>
      </div>
    </a>
    `;
    document.querySelector("#games-list").append(card);
  }

  displayCards() {
    for (let game of this.gamesList) {
      let gameCard = new GameObject(game);
      this.createGameCard(gameCard);
    }
    selectGame();
  }
}
