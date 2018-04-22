import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit,OnDestroy {
  ingredients: Ingredient[]=[];
  subscription:Subscription;
  constructor(private shoppinglist:ShoppingListService) { }

  ngOnInit() {
    this.ingredients=this.shoppinglist.getIngredients();
    this.shoppinglist.ingredientChanged.subscribe(
      (ingredients:Ingredient[])=>{ 
        this.ingredients=ingredients;
      }
    )
  }
ngOnDestroy(){
  this.subscription.unsubscribe();
}

}
