import { emptyList, loaderDisplay, loaderHide } from "./app-addons.js";

export class MealObject {
  constructor(mealDetails) {
    this.title = mealDetails.strMeal;
    this.thumb = mealDetails.strMealThumb;
    this.instructions = mealDetails.strInstructions;
    this.area = mealDetails.strArea;
    this.category = mealDetails.strCategory;
    this.recipes = this.collectIngredients(mealDetails);
    this.tags = mealDetails.strTags;
    this.source = mealDetails.strSource;
    this.youtube = mealDetails.strYoutube;
    this.displayMealDetails();
    this.closeModal();
  }

  displayMealDetails() {
    document.querySelector("#meal-details").classList.add("show", "d-flex");
    document.querySelector("#meal-details").classList.remove("d-none");
    document.querySelector(".modal-body").scrollTo(0, 0);
    document.querySelector("#meal-details .modal-title").innerHTML = this.title;
    document.querySelector("#meal-details .meal-thumb img").src = this.thumb;
    document.querySelector("#meal-details .meal-thumb img").alt = this.title;
    document.querySelector("#meal-details .meal-area span").innerHTML = this.area;
    document.querySelector("#meal-details .meal-category span").innerHTML = this.category;
    document.querySelector("#meal-details .meal-tags span").innerHTML = this.tags;
    document.querySelector("#meal-details .meal-source").href = this.source;
    document.querySelector("#meal-details .meal-youtube").href = this.youtube;
    document.querySelector("#meal-details .meal-instructions p").innerHTML = this.instructions;
  }

  closeModal() {
    document.querySelector("#meal-details .btn-close").addEventListener("click", function () {
      document.querySelector("#meal-details").classList.remove("show", "d-flex");
      document.querySelector("#meal-details").classList.add("d-none");
    });
  }

  collectIngredients(mealDetails) {
    document.querySelector(".meal-recipes").innerHTML = "";
    let ingredients = [];
    for (let key in mealDetails) {
      if (key.includes("strIngredient") && mealDetails[key] !== "") {
        ingredients.push(mealDetails[key]);
        document.querySelector(".meal-recipes").innerHTML += `<li>${mealDetails[key]}</li>`;
      }
    }
  }
}

export async function selectMeal(mealURL) {
  loaderDisplay();
  let mealResponse = await fetch(mealURL);
  if (mealResponse.ok && 400 != mealResponse.status) {
    let mealData = await mealResponse.json();
    let mealDetails = mealData.meals[0];
    new MealObject(mealDetails);
    loaderHide();
  }
}
