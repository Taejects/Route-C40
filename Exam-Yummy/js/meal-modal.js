class MealModal {
  constructor(mealDetails) {
    this.mealDetails = mealDetails;
    this.title = document.querySelector("#meal-details .modal-title");
    this.featureImage = document.querySelector("#meal-details .meal-thumb img");
    this.genre = document.querySelector("#meal-details .meal-category span");
    this.platform = document.querySelector("#meal-details .meal-platform span");
    this.status = document.querySelector("#meal-details .meal-status span");
    this.description = document.querySelector("#meal-details .meal-desc");
    this.btn = document.querySelector("#meal-details .meal-show");
    this.displayMealDetails();
    this.closeModal();
  }
  displayMealDetails() {
    document.querySelector("#meal-details").classList.add("show", "d-flex");
    document.querySelector("#meal-details").classList.remove("d-none");
    this.title.innerHTML = this.mealDetails.title;
    this.featureImage.src = this.mealDetails.thumbnail;
    this.featureImage.alt = this.mealDetails.title;
    this.genre.innerHTML = this.mealDetails.genre;
    this.platform.innerHTML = this.mealDetails.platform;
    this.status.innerHTML = this.mealDetails.status;
    this.description.innerHTML = this.mealDetails.description;
    this.btn.href = this.mealDetails.meal_url;
  }
  closeModal() {
    document.querySelector("#meal-details .btn-close").addEventListener("click", function () {
      document.querySelector("#meal-details").classList.remove("show", "d-flex");
      document.querySelector("#meal-details").classList.add("d-none");
    });
  }
}
