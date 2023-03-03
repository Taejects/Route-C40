let url, gamesResult;

export class GameCategory {
  constructor() {
    /* Array from categories form radio buttons */
    this.gameCategories = Array.from(document.getElementsByName("game-category"));
    /* Check which option is checked by default [1st option] */
    this.selectedCategory = this.gameCategories.find((input) => input.checked).value;
    console.log(this.selectedCategory);
    /* Assign check value to API function */
    url = `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${this.selectedCategory}`;
    getGames(url);
    /* Run selectCategory function */
    this.selectCategory();
  }

  /* Loop function to add Event Listener and call API function with the new category value*/
  selectCategory() {
    for (let category of this.gameCategories) {
      category.addEventListener("click", (e) => {
        this.selectedCategory = e.target.value;
        console.log(this.selectedCategory);
        url = `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${this.selectedCategory}`;
        getGames(url);
      });
    }
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
