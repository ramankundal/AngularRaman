import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   displayRecipe:string='recipe';

   onAfterRecipeClicked(eventData:string){
     console.log("in app component now");
   this.displayRecipe=eventData;
  }
}
