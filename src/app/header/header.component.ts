import { Component, EventEmitter, Output } from "@angular/core";

@Component({
    selector:'app-header',
    templateUrl:'./header.component.html',
    styleUrls:['./header.component.css']
})

export  class HeaderComponent{
  @Output() recipeEvent= new EventEmitter<string>();

    recipeClicked(recipe:string){
        console.log("recipe Clicked on header");
        this.recipeEvent.emit(recipe);
    }
}