import { AreaCard } from "./areas-listing.js";
import { IngredCard } from "./ingred-listing.js";
import { CategoryCard } from "./category-card.js";
import { fetchMeals } from "./meals-get.js";
import { emptyList, loaderDisplay, loaderHide } from "./app-addons.js";

export async function fetchAreasIngs(url, cardType) {
  loaderDisplay();
  let response, resultArray, slicedResult, countStart;
  response = await fetch(url);
  if (response.ok && 400 != response.status) {
    let result = await response.json();
    console.log(result);
    if (Array.isArray(result)) {
      console.log("arrrray");
      slicedResult = result.meals.slice(0, 20);
    } else if (cardType != "category") {
      resultArray = result.meals;
      slicedResult = resultArray.slice(0, 20);
    } else {
      resultArray = result.categories;
      slicedResult = resultArray.slice(0, 20);
    }
    countStart = 0;
    emptyList();
    for (let item of slicedResult) {
      countStart++;
      if (cardType == "area") {
        new AreaCard(item);
      } else if (cardType == "ing") {
        new IngredCard(item);
      } else {
        new CategoryCard(item);
      }

      let list = Array.from(document.querySelectorAll("#listing a"));
      for (let listItem of list) {
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
  loaderHide();
}
