import { Ingredient } from "../shared/ingredient.model";
import { EventEmitter } from "@angular/core";
import { Subject } from "rxjs/Subject";

export class ShoppingListService{

    ingredientChanged=new Subject();
    startedEditing= new Subject<number>()   ;

     private ingredients: Ingredient[] = [
        new Ingredient('Apples',5),new Ingredient('Tomatoes', 10)
      ];

      getIngredients(){
          return this.ingredients.slice();
      }
      getIngredient(index:number){
          return this.ingredients[index];
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
   deleteIngredient(index:number){
    this.ingredients.splice(index,1);
    this.ingredientChanged.next(this.ingredients.slice());
   }

   updateIngredient(index:number, ingredient:Ingredient){
        this.ingredients[index]=ingredient;
        this.ingredientChanged.next(this.ingredients.slice());
   }
}