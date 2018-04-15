import { Component, OnInit} from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {

  constructor(private shoppingListServ: ShoppingListService) { }

  ngOnInit() {
  }

  onAddRecipe(nameInput,amountInput){
    const newIngred= new Ingredient(nameInput.value,amountInput.value);
    this.shoppingListServ.addIngredient(newIngred);
  }

}
