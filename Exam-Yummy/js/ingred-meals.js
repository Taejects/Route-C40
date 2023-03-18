import { MealCard } from "./meals-listing.js";
import { selectMeal } from "./meal-object.js";
import { emptyList, loaderDisplay, loaderHide } from "./app-addons.js";

/* Get meals of every single ingredient */
export async function selectIngred(inglURL) {
  loaderDisplay();
  let ingResponse = await fetch(inglURL);
  if (ingResponse.ok && 400 != ingResponse.status) {
    let ingData = await ingResponse.json();
    let ingDetails = ingData.meals;
    let slicedIngDetails = ingDetails.slice(0, 20);
    emptyList();
    for (let meal of slicedIngDetails) {
      new MealCard(meal);
    }
    /* Add Event Listener to Every Single Meal Card */
    let countStart = 0;
    let countEnd = ingData.meals.length;
    for (let meal of ingData.meals) {
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
