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
    new RecipeModel("Spaghetti alla chitarra", "Si tratta di un tipo di pasta a sezione quadrata: la larghezza del taglio è di 2 mm e lo spessore è circa lo stesso. L'attrezzo con cui sono preparati, chiamato chitarra, conferisce alla pasta la forma squadrata e una consistenza porosa che consente al sugo con cui verrà condita di aderire completamente. Per la pasta si usa la semola di grano duro, uova e un pizzico di sale. Viene lavorata a lungo e dopo il riposo al fresco tirata a sfoglia con il matterello. Successivamente si pone la sfoglia sulla chitarra e ci si fa scorrere sopra il matterello, in modo che i fili della chitarra penetrino nella sfoglia tagliandola a striscioline. Gli abruzzesi finiscono il lavoro passando un dito sulla sfoglia tagliata alla base della chitarra, come dovessero suonare un arpeggio, per far scendere la pasta dalle corde. Le sfoglie che si passano sulla chitarra in dialetto chietino si chiamano pettele.", "https://www.buttalapasta.it/wp-content/uploads/spaghetti-alla-chitarra-2-1200x898.jpg"),
    new RecipeModel("Lasagne alla bolognese", "no", "https://www.aiafood.com/sites/default/files/styles/scale_1920/public/recipes/lasagne.jpg?itok=y1YTJOv-"),
    new RecipeModel("Ravioli val Varaita", "pippo", "https://www.valverbe.it/wp-content/uploads/2020/04/Ricetta-facile-ravioles-della-Valle-Varaita-Bellino.jpg"),
    new RecipeModel("Tiramisù", "Il tiramisù è un dolce e prodotto agroalimentare tradizionale diffuso in tutto il territorio italiano, le cui origini sono dibattute e attribuite soprattutto al Veneto e al Friuli-Venezia Giulia. È un dessert al cucchiaio a base di savoiardi (oppure altri biscotti di consistenza friabile) inzuppati nel caffè e ricoperti di una crema, composta di mascarpone, uova e zucchero, che in alcune varianti è aromatizzata con il liquore. ", "https://www.buttalapasta.it/wp-content/uploads/2017/10/tiramisu-con-panna.jpg")
  ];

  constructor() { }

  ngOnInit(): void {

  }

  onRecipeSelected(recipe :RecipeModel) {
    this.recipeSelectedInList.emit(recipe);
  }
}
