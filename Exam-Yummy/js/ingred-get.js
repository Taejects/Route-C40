import { IngredCard } from "./ingred-listing.js";
import { selectIngred } from "./ingred-meals.js";
import { emptyList, loaderDisplay, loaderHide } from "./app-addons.js";

let url = "https://themealdb.com/api/json/v1/1/list.php?i=list";

export async function fetchIngs() {
  loaderDisplay();
  let ingResponse = await fetch(url);
  if (ingResponse.ok && 400 != ingResponse.status) {
    let result = await ingResponse.json();
    let slicedResult = result.meals.slice(0, 20);
    let countStart = 0;
    let countEnd = slicedResult.length;
    emptyList();
    for (let ing of slicedResult) {
      countStart++;
      new IngredCard(ing);
      if (countStart === countEnd) {
        let ingList = Array.from(document.querySelectorAll("#listing a"));
        for (let oneIng of ingList) {
          oneIng.addEventListener("click", function (e) {
            let ingTitle = this.getAttribute("data-title");
            let ingURL = `https://themealdb.com/api/json/v1/1/filter.php?i=${ingTitle}`;
            selectIngred(ingURL);
          });
        }
      }
    }
  }
  loaderHide();
}
