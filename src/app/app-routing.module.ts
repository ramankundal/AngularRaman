import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { RecipeComponent } from "./recipe/recipe.component";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";
import { RecipeItemComponent } from "./recipe/recipe-list/recipe-item/recipe-item.component";
import { RecipeDetailComponent } from "./recipe/recipe-detail/recipe-detail.component";
import { RecipeSelectComponent } from "./recipe/recipe-select/recipe-select.component";
import { RecipeEditComponent } from "./recipe/recipe-edit/recipe-edit.component";

const appRoutes: Routes = [
    {path:'', redirectTo:'/recipes', pathMatch:'full' },
    {path:'recipes', component: RecipeComponent, children:[
      {path:'', component:RecipeSelectComponent},
      {path:'new', component:RecipeEditComponent},
      {path:':id', component:RecipeDetailComponent},
      {path:':id/edit', component:RecipeEditComponent}
     ]},
    {path:'shoppingList', component:ShoppingListComponent}
  ];
@NgModule({
 imports:[RouterModule.forRoot(appRoutes)],
 exports:[RouterModule]
})
export class AppRoutingModule{

}