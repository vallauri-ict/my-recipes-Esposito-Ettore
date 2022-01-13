import { Injectable } from '@angular/core';
import { IngredientModel } from '../models/ingredient.model';
import { DataStorageService } from './data-storage.service';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  ingredients :IngredientModel[];

  constructor(private dataStorageService :DataStorageService) { }

  public getIngredients() {
    this.dataStorageService.SendGetRequest("shopping-list").subscribe(data => {
      this.ingredients = data as IngredientModel[];
    }, 
    err => console.log(err));
  }

  public addIngredient(ingredient :IngredientModel) {
    let found :boolean = false;

    for(let item of this.ingredients)
      if(item.name.toLowerCase() == ingredient.name.toLowerCase())
      {
        console.log(item);
        item.amount += ingredient.amount;
        this.dataStorageService.SendPatchRequest("shopping-list/" + item._id, { "amount" : item.amount });
        found = true;
        break;
      }

    if(!found)
    {
      this.ingredients.push(ingredient);
      this.dataStorageService.SendPostRequest("shopping-list", ingredient);
    }
  }

  public addIngredients(ingredients :IngredientModel[]) {
    for(const ingredient of ingredients)
      this.addIngredient(ingredient);
  }
}
