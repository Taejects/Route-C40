import { emptyList, loaderDisplay, loaderHide } from "./app-addons.js";

class MealModal {
  constructor(mealDetails) {
    this.mealDetails = mealDetails;
    this.title = document.querySelector("#meal-details .modal-title");
    this.featureImage = document.querySelector("#meal-details .meal-thumb img");
    this.genre = document.querySelector("#meal-details .meal-category span");
    this.platform = document.querySelector("#meal-details .meal-platform span");
    this.status = document.querySelector("#meal-details .meal-status span");
    this.description = document.querySelector("#meal-details .meal-desc");
    this.btn = document.querySelector("#meal-details .meal-show");
    this.displayMealDetails();
    this.closeModal();
  }
  displayMealDetails() {
    document.querySelector("#meal-details").classList.add("show", "d-flex");
    document.querySelector("#meal-details").classList.remove("d-none");
    this.title.innerHTML = this.mealDetails.title;
    this.featureImage.src = this.mealDetails.thumbnail;
    this.featureImage.alt = this.mealDetails.title;
    this.genre.innerHTML = this.mealDetails.genre;
    this.platform.innerHTML = this.mealDetails.platform;
    this.status.innerHTML = this.mealDetails.status;
    this.description.innerHTML = this.mealDetails.description;
    this.btn.href = this.mealDetails.meal_url;
  }
  closeModal() {
    document.querySelector("#meal-details .btn-close").addEventListener("click", function () {
      document.querySelector("#meal-details").classList.remove("show", "d-flex");
      document.querySelector("#meal-details").classList.add("d-none");
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
      let gameID = this.getAttribute("data-id");
      let url = `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${gameID}`;
      let gameDetails = await getGameDetails(url);
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
