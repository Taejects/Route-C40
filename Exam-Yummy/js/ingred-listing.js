export class IngredCard {
  constructor(ing) {
    this.title = ing.strIngredient;
    this.description = ing.strDescription;
    this.createIngCard();
  }

  createIngCard() {
    let ingCard = document.createElement("div");
    ingCard.setAttribute("class", "col-lg-3 col-md-4 col-sm-6 my-3");
    ingCard.innerHTML = `
    <a href="#!" class="d-flex flex-column rounded-3 h-100 text-dark ing-card bg-white text-decoration-none" data-title="${this.title}">
      <div class="ing-feature-img position-relative">
          <img src="../assets/imgs/ingred-icon.png" class="img-fluid">          
        </div>
      <div class="ing-info p-3 d-flex flex-column flex-grow-1">
          <h2 class="ing-title fs-5 text-danger">${this.title}</h2>               
          <p class="ing-description">${this.description}</p>
      </div>
    </a>
    `;
    document.querySelector("#listing").append(ingCard);
  }
}
