import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { RecipeModel } from 'src/app/models/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeSelectedInList = new EventEmitter<RecipeModel>();

  recipes :RecipeModel[] = [
   new RecipeModel("Spaghetti alla chitarra", "Si tratta di un tipo di pasta a sezione quadrata: la larghezza del taglio è di 2 mm e lo spessore è circa lo stesso", "https://www.buttalapasta.it/wp-content/uploads/spaghetti-alla-chitarra-2-1200x898.jpg"),
    new RecipeModel("Lasagne alla bolognese", "no", "https://www.aiafood.com/sites/default/files/styles/scale_1920/public/recipes/lasagne.jpg?itok=y1YTJOv-"),
    new RecipeModel("Ravioli val Varaita", "pippo", "https://www.valverbe.it/wp-content/uploads/2020/04/Ricetta-facile-ravioles-della-Valle-Varaita-Bellino.jpg"),
    new RecipeModel("Tiramisù", "Il tiramisù è un dolce e prodotto agroalimentare tradizionale diffuso in tutto il territorio italiano", "https://www.buttalapasta.it/wp-content/uploads/2017/10/tiramisu-con-panna.jpg")
  ];

  constructor() { }

  ngOnInit(): void {

  }

  onRecipeSelected(recipe :RecipeModel) {
    this.recipeSelectedInList.emit(recipe);
  }
}
