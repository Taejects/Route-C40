// import { MealCards } from "./meal-cards.js";
// import { selectMeal } from "./meal-modal.js";
// import { loaderDisplay, loaderHide } from "./meal-loader.js";
import { CategoryCard } from "./categories-cards.js";

export class SingleCategory {
  constructor(category) {
    this.title = category.strCategory;
    this.url = `www.themealdb.com/api/json/v1/1/filter.php?c=${this.title}`;
    console.log(this.title, this.url);
  }
}

//   async selectCategory() {
//     loaderDisplay();
//     /* Assign checked input value to API function for default results */
//     let mealsList = await getCategory(this.url);
//     new MealCards(mealsList);
//     loaderHide();

//     /* Loop function to add Event Listener and call API function with the new category value*/
//     for (let category of this.mealCategory) {
//       category.addEventListener("click", async function (e) {
//         loaderDisplay();
//         document
//           .querySelector("#category-select .btn-warning")
//           .classList.add("btn-outline-warning");
//         document.querySelector("#category-select .btn-warning").classList.remove("btn-warning");
//         this.parentElement.classList.remove("btn-outline-warning");
//         this.parentElement.classList.add("btn-warning");

//         this.selectedCategory = e.target.value;
//         this.url = `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${this.selectedCategory}`;
//         mealsList = await getCategory(this.url);
//         document.querySelector(".container").innerHTML += mealsList[0].title;
//         new MealCards(mealsList);
//         selectMeal();
//         loaderHide();
//       });
//     }
//   }
// }

// // Fetch Meals List ---------------------------- */
// async function getCategory(url) {
//   let APIresponse = await fetch(url);

//   if (APIresponse.ok && 400 != APIresponse.status) {
//     result = await APIresponse.json();
//     /* Check if search term is valid */
//     if (result.length == 0) {
//       console.log("Zero Results");
//     } else {
//       console.log(result);
//     }
//   } else {
//     console.log("bad request");
//   }
// }
