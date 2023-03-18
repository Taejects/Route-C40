export class MealObject {
  constructor(singleMeal) {
    this.instructions = singleMeal.strInstructions;
    this.thumb = singleMeal.strMealThumb;
    this.title = singleMeal.title;
    this.tags = singleMeal.strTags;
    this.ingredient = singleMeal.strIngredient1;
    this.category = singleMeal.strCategory;
    this.area = singleMeal.idMeal;
    this.id = singleMeal.idMeal;
  }
}
