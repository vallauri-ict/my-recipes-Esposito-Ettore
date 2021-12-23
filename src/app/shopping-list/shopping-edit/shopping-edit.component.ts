import { Component, OnInit } from '@angular/core';
import { IngredientModel } from 'src/app/models/ingredient.model';
import { ShoppingListService } from 'src/app/shared/shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  ingredientName :string = "";
  ingredientAmount :number = 0;

  constructor(public shoppingListService :ShoppingListService) { }

  ngOnInit(): void {
  }

  addIngredient() {
    if(this.ingredientAmount > 0)
    {
      const newIngredient :IngredientModel = new IngredientModel(this.ingredientName, this.ingredientAmount);
      this.shoppingListService.addIngredient(newIngredient);
      this.clearIngrediens();
    }
    else
      alert("Amount cannot be 0");
  }

  deleteIngredient() {

  }

  clearIngrediens() {
    this.ingredientName = "";
    this.ingredientAmount = 0;
  }
}
