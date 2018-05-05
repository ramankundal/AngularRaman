import { Component, OnInit, ViewChild, OnDestroy} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit,OnDestroy {
  @ViewChild('f') shoplistForm:NgForm;
  subscription:Subscription;
  editMode=false;
  editedItemIndex:number;
  editedItem:Ingredient;
  constructor(private shoppingListServ: ShoppingListService) { }

  ngOnInit() {
    this.subscription= this.shoppingListServ.startedEditing.subscribe(
      (index:number)=>{
        this.editedItemIndex=index;
        this.editMode=true;
        this.editedItem=this.shoppingListServ.getIngredient(index);
        this.shoplistForm.setValue({
          name: this.editedItem.name,
          amount:this.editedItem.amount
        })
      }
    );

  }

  onAddRecipe(formValue:NgForm){
    const newIngred= new Ingredient(formValue.value.name,formValue.value.amount);
    if(this.editMode){
      console.log("inside edit mode");
      this.shoppingListServ.updateIngredient(this.editedItemIndex,newIngred);
      this.editMode=false;
      this.shoplistForm.reset();
    }
    else{
      this.shoppingListServ.addIngredient(newIngred);
      this.shoplistForm.reset();
    }
   
  }
onClear(){
  console.log("inside clear");
  this.shoplistForm.reset();
  this.editMode=false;
}
onDelete(){
  this.shoppingListServ.deleteIngredient(this.editedItemIndex);
  this.shoplistForm.reset();
  this.editMode=false;
}


  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
