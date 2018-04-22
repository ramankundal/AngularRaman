import { Ingredient } from "../shared/ingredient.model";
import { EventEmitter } from "@angular/core";
import { Subject } from "rxjs/Subject";

export class ShoppingListService{

    ingredientChanged=new Subject();
     private ingredients: Ingredient[] = [
        new Ingredient('Apples',5),new Ingredient('Tomatoes', 10)
      ];

      getIngredients(){
          return this.ingredients.slice();
      }

   addIngredient($event){
       this.ingredients.push($event);
       this.ingredientChanged.next(this.ingredients.slice());
      }
   addIngredients(ingredient:Ingredient[]){
    for(let ing of ingredient){
        this.ingredients.push(ing);
    }
    this.ingredientChanged.next(this.ingredients.slice());
   }
}