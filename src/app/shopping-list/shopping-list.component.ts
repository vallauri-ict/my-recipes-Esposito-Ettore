import { Component, OnInit } from '@angular/core';
import { IngredientModel } from '../models/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients :IngredientModel[] = [
    new IngredientModel("Pasta", 500),
    new IngredientModel("Pomodoro", 2)
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onIngredientAdd(newIngredient :IngredientModel) {
    let found :boolean = false;

    for(let item of this.ingredients)
      if(item.name.toLowerCase() == newIngredient.name.toLowerCase())
      {
        item.amount += newIngredient.amount;
        found = true;
        break;
      }

    if(!found)
      this.ingredients.push(newIngredient);
  }
}
