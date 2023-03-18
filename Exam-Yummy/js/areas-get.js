import { AreaCard } from "./areas-listing.js";
import { selectArea } from "./areas-meals.js";
import { emptyList, loaderDisplay, loaderHide } from "./app-addons.js";

let url = "https://themealdb.com/api/json/v1/1/list.php?a=list";

export async function fetchAreas() {
  loaderDisplay();
  let areasResponse = await fetch(url);
  if (areasResponse.ok && 400 != areasResponse.status) {
    let result = await areasResponse.json();
    let resultArray = result.meals;
    let slicedResult = resultArray.slice(0, 20);
    let countStart = 0;
    let countEnd = slicedResult.length;
    emptyList();
    for (let area of slicedResult) {
      countStart++;
      new AreaCard(area);
      if (countStart === countEnd) {
        let areasList = Array.from(document.querySelectorAll("#listing a"));
        for (let oneArea of areasList) {
          oneArea.addEventListener("click", function (e) {
            let areaTitle = this.getAttribute("data-title");
            let areaURL = `https://themealdb.com/api/json/v1/1/filter.php?a=${areaTitle}`;
            selectArea(areaURL);
          });
        }
      }
    }
  }
  loaderHide();
}
