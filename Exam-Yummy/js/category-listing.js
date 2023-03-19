import { emptyList, loaderDisplay, loaderHide } from "./app-addons.js";
import { fetchMeals } from "./meals-get.js";
import { CategoryCard } from "./category-card.js";
import { fetchAreasIngs } from "./areas-ings-get.js";

// Fetch All Categories ---------------------------- */
export class CategoriesList {
  constructor() {
    this.url = "https://themealdb.com/api/json/v1/1/categories.php";
    fetchAreasIngs(this.url, "category");
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
        if (countStart === countEnd) {
          let categoriesList = Array.from(document.querySelectorAll("#listing a"));
          for (let oneCategory of categoriesList) {
            oneCategory.addEventListener("click", function (e) {
              let categoryTitle = this.getAttribute("data-title");
              let categoryURL = `https://themealdb.com/api/json/v1/1/filter.php?c=${categoryTitle}`;
              fetchMeals(categoryURL);
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
