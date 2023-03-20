import { MealCard } from "./meals-listing.js";
import { selectMeal } from "./meal-object.js";
import { emptyList, loaderDisplay, loaderHide } from "./app-addons.js";

let mealsList;

export async function searchMeals(url) {
  loaderDisplay();
  let APIresponse = await fetch(url);

  if (APIresponse.ok && 400 != APIresponse.status) {
    let result = await APIresponse.json();
    let resultArray = result.meals;
    if (resultArray) {
      let slicedResult = resultArray.slice(0, 20);
      emptyList();

      for (let meal of slicedResult) {
        new MealCard(meal);
        mealsList = Array.from(document.querySelectorAll("#listing a"));
      }

      /* Add Event Listener to Every Single Meal Card */
      for (let oneMeal of mealsList) {
        oneMeal.addEventListener("click", function () {
          let mealID = this.getAttribute("data-id");
          let mealURL = `https://themealdb.com/api/json/v1/1/lookup.php?i=${mealID}`;
          selectMeal(mealURL);
        });
      }
      loaderHide();
    } else {
      loaderHide();
      emptyList();
      document.querySelector("#listing").innerHTML = `
      <div class="container text-center">
      <div class="alert alert-warning align-self-start"><i class="fa-regular fa-face-sad-tear fa-lg"></i> No meals found</div>
      </div>
      `;
    }
  }
}
