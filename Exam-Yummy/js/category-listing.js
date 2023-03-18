// import { MealCards } from "./meal-cards.js";
// import { selectMeal } from "./meal-modal.js";
// import { loaderDisplay, loaderHide } from "./meal-loader.js";
import { emptyList, loaderDisplay, loaderHide } from "./app-addons.js";
import { selectMeal } from "./meal-object.js";

// loaderDisplay();
// loaderHide();

// Fetch All Categories ---------------------------- */
/* Loop Result */

import { CategoryCard } from "./category-card.js";
import { MealCard } from "./meals-listing.js";
import { MealObject } from "./meal-object.js";

export class CategoriesList {
  constructor() {
    this.url = "https://themealdb.com/api/json/v1/1/categories.php";
    this.getAllCategories(this.url);
  }

  /* Get All Categories Array from API */
  async getAllCategories(url) {
    loaderDisplay();
    let APIresponse = await fetch(url);
    if (APIresponse.ok && 400 != APIresponse.status) {
      let allCategories = await APIresponse.json();
      let allCategoriesArray = allCategories.categories;
      let slicedResult = allCategoriesArray.slice(0, 20);
      let countStart = 0;
      let countEnd = slicedResult.length;
      emptyList();
      for (let category of slicedResult) {
        countStart++;
        new CategoryCard(category);
        // new SingleCategory(category);
        if (countStart === countEnd) {
          let categoriesList = Array.from(document.querySelectorAll("#listing a"));
          for (let oneCategory of categoriesList) {
            oneCategory.addEventListener("click", function (e) {
              let categoryTitle = this.getAttribute("data-title");
              let categoryURL = `https://themealdb.com/api/json/v1/1/filter.php?c=${categoryTitle}`;
              selectCategory(categoryURL);
            });
          }
        }
      }
    } else {
      console.log("bad request");
    }
    loaderHide();
  }
}

async function selectCategory(url) {
  emptyList();
  loaderDisplay();
  let categoryResponse = await fetch(url);
  if (categoryResponse.ok && 400 != categoryResponse.status) {
    let categoryMeals = await categoryResponse.json();
    let categoryMealsArray = categoryMeals.meals;
    let slicedResult = categoryMealsArray.slice(0, 20);
    for (let meal of slicedResult) {
      new MealCard(meal);
    }
    /* Add Event Listener to Every Single Meal Card */
    let countStart = 0;
    let countEnd = slicedResult.length;
    for (let meal of slicedResult) {
      countStart++;
      if (countStart === countEnd) {
        let mealsList = Array.from(document.querySelectorAll("#listing a"));
        for (let oneMeal of mealsList) {
          oneMeal.addEventListener("click", function () {
            let mealID = this.getAttribute("data-id");
            let mealURL = `https://themealdb.com/api/json/v1/1/lookup.php?i=${mealID}`;
            selectMeal(mealURL);
          });
        }
      }
    }
  }
  loaderHide();
}
