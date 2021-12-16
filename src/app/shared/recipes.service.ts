import { Injectable } from '@angular/core';
import { RecipeModel } from 'src/app/models/recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  recipes :RecipeModel[] = [];
  /*recipes :RecipeModel[] = [
    new RecipeModel("Spaghetti alla chitarra", "Si tratta di un tipo di pasta a sezione quadrata: la larghezza del taglio è di 2 mm e lo spessore è circa lo stesso", "https://www.buttalapasta.it/wp-content/uploads/spaghetti-alla-chitarra-2-1200x898.jpg"),
    new RecipeModel("Lasagne alla bolognese", "Le lasagne al forno sono costituite da una sfoglia di pasta all'uovo tagliata in fogli grossolanamente rettangolari detti lasagne, le quali, una volta bollite e scolate, vengono disposte in una sequenza di strati, separati da una farcitura che varia in relazione alle diverse tradizioni locali", "https://www.aiafood.com/sites/default/files/styles/scale_1920/public/recipes/lasagne.jpg?itok=y1YTJOv-"),
    new RecipeModel("Ravioli val Varaita", "Un piatto di pasta fresca molto conosciuto in queste zone, spesso chiamato con il nome di ravioles di Melle, dall'omonimo paese di produzione", "https://www.valverbe.it/wp-content/uploads/2020/04/Ricetta-facile-ravioles-della-Valle-Varaita-Bellino.jpg"),
    new RecipeModel("Tiramisù", "Il tiramisù è un dolce e prodotto agroalimentare tradizionale diffuso in tutto il territorio italiano", "https://www.buttalapasta.it/wp-content/uploads/2017/10/tiramisu-con-panna.jpg")
  ];*/

  constructor() { 
    
  }
}
