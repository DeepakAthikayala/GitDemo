import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
=======
import { RecipeComponent } from './recipe/recipe.component';
>>>>>>> de7dfda65284c7a4ebd5356c8bcbc50991b0b6d0

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    ShoppingListComponent
=======
    RecipeComponent
>>>>>>> de7dfda65284c7a4ebd5356c8bcbc50991b0b6d0
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
