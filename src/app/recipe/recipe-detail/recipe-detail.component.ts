import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { ShoppingListService } from '../../shopping-list/shopping-list.service';
import { Ingredient } from '../../shared/ingredient.model';
import { ActivatedRoute, Params } from '@angular/router';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
@Input() recipe:Recipe;
@Input() id:number;
  constructor(private shoppingListServ:ShoppingListService, private router:ActivatedRoute, private recipeSrv:RecipeService) { 

  }

  ngOnInit() {
    this.router.params.subscribe(
      (params:Params)=>{
        this.id= +params['id'];
        this.recipe= this.recipeSrv.getRecipesId(this.id);
      }
    )
  }
  addRecipeToShopping(){
   
    this.shoppingListServ.addIngredients(this.recipe.ingredients);
  
}
 
}
