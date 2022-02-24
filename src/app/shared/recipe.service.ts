import { Injectable } from '@angular/core';
import { RecipeModel } from 'src/app/models/recipe.model';
import { DataStorageService } from './data-storage.service';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  recipes :RecipeModel[] = [];
  selectedRecipe :RecipeModel;

  constructor(private dataStorageService :DataStorageService) { }

  public getRecipes() {
    this.dataStorageService.SendGetRequest("recipes").subscribe(data => {
      this.recipes = data as RecipeModel[];
    }, 
    err => console.log(err));
  }

  public getRecipe(id :string) {
    this.dataStorageService.SendGetRequest(`recipes/${id}`).subscribe(data => {
      this.selectedRecipe = data as RecipeModel;
    },
    err => console.log(err));
  }
}