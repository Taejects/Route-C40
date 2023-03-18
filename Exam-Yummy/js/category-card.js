import { emptyList, loaderDisplay, loaderHide } from "./app-addons.js";

emptyList();
export class CategoryCard {
  constructor(category) {
    this.id = category.idCategory;
    this.title = category.strCategory;
    this.description = category.strCategoryDescription;
    this.thumb = category.strCategoryThumb;
    this.url = `www.themealdb.com/api/json/v1/1/filter.php?c=${this.title}`;
    this.createCategoryCard();
    // new SingleCategory(url);
  }
  createCategoryCard() {
    loaderDisplay();
    let categoryCard = document.createElement("div");
    categoryCard.setAttribute("class", "col-lg-3 col-md-4 col-sm-6 my-3");
    categoryCard.innerHTML = `
    <a href="#!" class="d-flex flex-column rounded-3 h-100 text-dark category-card bg-white text-decoration-none" data-id="${this.id}" data-title="${this.title}">
      <div class="category-feature-img position-relative">
          <img src="${this.thumb}" class="rounded-top img-fluid">          
        </div>
      <div class="category-info p-3 d-flex flex-column flex-grow-1">
          <h2 class="category-title fs-5 text-danger">${this.title}</h2>
          <p class="category-description">${this.description}</p>          
      </div>
    </a>
    `;

    document.querySelector("#listing").append(categoryCard);
    loaderHide();
  }
}
