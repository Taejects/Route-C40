let selectedCategory, url, gamesResult;

export class GameCard {
  constructor() {
    selectCategory();
    this.gameCategory = selectedCategory;
  }
}

function selectCategory() {
  let gameCategories = Array.from(document.getElementsByName("game-category"));
  for (let category of gameCategories) {
    category.addEventListener("click", (e) => {
      selectedCategory = e.target.value;
      url = `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${selectedCategory}`;
      getGames(url);
    });
  }
}

// Fetch Game List ---------------------------- */
async function getGames(url) {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "0cd674e85dmsh771e31f91a60d94p184433jsn468596cfa9b4",
      "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
    },
  };

  const api = await fetch(url, options);
  gamesResult = await api.json();
  console.log(gamesResult);
}
