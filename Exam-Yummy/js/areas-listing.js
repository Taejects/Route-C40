import { MealCard } from "./meals-listing.js";
import { emptyList, loaderDisplay, loaderHide } from "./app-addons.js";

export class AreaCard {
  constructor(area) {
    this.title = area.strArea;
    this.createAreaCard();
  }

  createAreaCard() {
    let areaCard = document.createElement("div");
    areaCard.setAttribute("class", "col-lg-3 col-md-4 col-sm-6 my-3");
    areaCard.innerHTML = `
    <a href="#!" class="d-flex flex-column rounded-3 h-100 text-dark area-card bg-white text-decoration-none" data-title="${this.title}">
      <div class="area-feature-img position-relative">
          <img src="../../assets/imgs/area-icon.png" class="img-fluid">          
        </div>
      <div class="area-info p-3 d-flex flex-column flex-grow-1">
          <h2 class="area-title fs-5 text-danger">${this.title}</h2>               
      </div>
    </a>
    `;

    document.querySelector("#listing").append(areaCard);
  }
}
