// import { MealCards } from "./meal-cards.js";
// import { selectMeal } from "./meal-modal.js";
// import { loaderDisplay, loaderHide } from "./meal-loader.js";
import { emptyList, loaderDisplay, loaderHide } from "./app-addons.js";

// loaderDisplay();
// loaderHide();

// Fetch All Categories ---------------------------- */
/* Loop Result */

import { CategoryCard } from "./categories-cards.js";
import { MealCard } from "./meals-list.js";

export class CategoriesList {
  constructor() {
    this.url = "https://themealdb.com/api/json/v1/1/categories.php";
    this.getAllCategories(this.url);
  }

  /* Get All Categories Array from API */
  async getAllCategories(url) {
    let APIresponse = await fetch(url);
    if (APIresponse.ok && 400 != APIresponse.status) {
      let allCategories = await APIresponse.json();
      let countStart = 0,
        countEnd = allCategories.categories.length;
      for (let category of allCategories.categories) {
        new CategoryCard(category);
        // new SingleCategory(category);
        if (countStart === countEnd) {
          let categoriesList = Array.from(document.querySelectorAll("#listing a"));
          for (let oneCategory of categoriesList) {
            oneCategory.addEventListener("click", function (e) {
              let categoryTitle = this.getAttribute("data-title");
              let categoryURL = `https://themealdb.com/api/json/v1/1/filter.php?c=${categoryTitle}`;
              console.log(categoryURL);
              selectCategory(categoryURL);
            });
          }
        }
      }
    } else {
      console.log("bad request");
    }
  }
}
/* Call for listing all categories */
new CategoriesList();

async function selectCategory(url) {
  emptyList();
  loaderDisplay();
  let categoryResponse = await fetch(url);
  if (categoryResponse.ok && 400 != categoryResponse.status) {
    let categoryMeals = await categoryResponse.json();
    for (let meal of categoryMeals.meals) {
      new MealCard(meal);
    }
    loaderHide();
  }
}
