import { Recipe } from "./recipe.model";
import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";

export class RecipeService{

    private recipes: Recipe[]=[new Recipe(
        "Test Recipe 1", 
    "this is description of recipe1",
    "https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/frying-pan-pizza-easy-recipe-collection.jpg",[new Ingredient('Bread',10),new Ingredient('MEat',10)]),

    new Recipe("test Recipe 2","this is description of recipe2","https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/frying-pan-pizza-easy-recipe-collection.jpg",[new Ingredient('Fried',10),new Ingredient('greenpeper',10)])];

    recipeSelected= new EventEmitter<Recipe>();
    getRecipes(){
        return this.recipes.slice();
    }
}