import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
=======
import { RecipeComponent } from './recipe/recipe.component';
import { RecipeListComponent } from './recipe/recipe-list/recipe-list.component';
>>>>>>> 7eedb367d5aa09af21c4281d5d82598e83f125cc

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    ShoppingListComponent
=======
    RecipeComponent,
    RecipeListComponent
>>>>>>> 7eedb367d5aa09af21c4281d5d82598e83f125cc
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
