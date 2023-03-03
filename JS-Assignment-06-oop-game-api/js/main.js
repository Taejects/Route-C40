import { GameCategory } from "./game-list.js";
new GameCategory();

// Setting Variables -------------------------- */
let detailsResult;

// Fetch Game Details ------------------------- */
async function getDetails() {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "0cd674e85dmsh771e31f91a60d94p184433jsn468596cfa9b4",
      "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
    },
  };

  const api = await fetch(
    "https://free-to-play-games-database.p.rapidapi.com/api/game?id=452",
    options
  );
  detailsResult = await api.json();
  console.log(detailsResult);
}
