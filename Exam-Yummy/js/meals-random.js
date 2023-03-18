import { MealCard } from "./meals-listing.js";
import { selectMeal } from "./meal-object.js";
import { emptyList, loaderDisplay, loaderHide } from "./app-addons.js";

let url = "https://themealdb.com/api/json/v1/1/search.php?s=";
export async function fetchMeals() {
  loaderDisplay();
  let APIresponse = await fetch(url);

  if (APIresponse.ok && 400 != APIresponse.status) {
    let result = await APIresponse.json();
    let resultArray = result.meals;
    let slicedResult = resultArray.slice(0, 20);
    emptyList();
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
    loaderHide();
  }
}
