// import { selectMeal } from "./meal-modal.js";
import { emptyList, loaderDisplay, loaderHide } from "./app-addons.js";

export class MealCard {
  constructor(meal) {
    this.id = meal.idMeal;
    this.title = meal.strMeal;
    this.thumb = meal.strMealThumb;
    this.createMealCard();
  }

  createMealCard() {
    loaderDisplay();
    let mealCard = document.createElement("div");
    mealCard.setAttribute("class", "col-lg-3 col-md-4 col-sm-6 my-3");
    mealCard.innerHTML = `
    <a href="#!" class="d-flex flex-column rounded-3 h-100 text-dark meal-card bg-white text-decoration-none" data-id="${this.id}" data-title="${this.title}">
      <div class="meal-feature-img position-relative">
          <img src="${this.thumb}" class="rounded-top img-fluid">          
        </div>
      <div class="meal-info p-3 d-flex flex-column flex-grow-1">
          <h2 class="meal-title fs-5 text-danger">${this.title}</h2>               
      </div>
    </a>
    `;
    document.querySelector("#listing").append(mealCard);
    loaderHide();
  }
}
