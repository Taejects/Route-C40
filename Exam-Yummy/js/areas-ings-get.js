import { AreaCard } from "./areas-listing.js";
import { IngredCard } from "./ingred-listing.js";
import { CategoryCard } from "./category-card.js";
import { fetchMeals } from "./meals-get.js";
import { emptyList, loaderDisplay, loaderHide } from "./app-addons.js";

export async function fetchAreasIngs(url, cardType) {
  loaderDisplay();
  let result, response, resultArray, slicedResult, list, contStart;
  response = await fetch(url);
  if (response.ok && 400 != response.status) {
    result = await response.json();
    if (Array.isArray(result)) {
      slicedResult = result.meals.slice(0, 20);
    } else if (cardType != "category") {
      resultArray = result.meals;
      slicedResult = resultArray.slice(0, 20);
    } else {
      resultArray = result.categories;
      slicedResult = resultArray.slice(0, 20);
    }
    emptyList();
    for (let item of slicedResult) {
      if (cardType == "area") {
        new AreaCard(item);
      } else if (cardType == "ing") {
        new IngredCard(item);
      } else {
        new CategoryCard(item);
      }

      list = Array.from(document.querySelectorAll("#listing a"));
      contStart = 0;
      for (let listItem of list) {
        contStart++;
        if (contStart == list.length) {
          listItem.addEventListener("click", function (e) {
            if (cardType == "area") {
              let areaTitle = this.getAttribute("data-title");
              let areaURL = `https://themealdb.com/api/json/v1/1/filter.php?a=${areaTitle}`;
              fetchMeals(areaURL);
            } else if (cardType == "ing") {
              let ingTitle = this.getAttribute("data-title");
              let ingURL = `https://themealdb.com/api/json/v1/1/filter.php?i=${ingTitle}`;
              fetchMeals(ingURL);
            } else {
              let categoryTitle = this.getAttribute("data-title");
              let categoryURL = `https://themealdb.com/api/json/v1/1/filter.php?c=${categoryTitle}`;
              fetchMeals(categoryURL);
            }
          });
        }
      }
    }
  }
  loaderHide();
}
