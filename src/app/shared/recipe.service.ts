import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { RecipeModel } from 'src/app/models/recipe.model';
import { DataStorageService } from './data-storage.service';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  recipes :RecipeModel[] = [];
  selectedRecipe :RecipeModel;

  constructor(private dataStorageService :DataStorageService, private router :Router) { }

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

  public postRecipe(recipe :any) {
    this.dataStorageService.SendPostRequest("recipes", recipe).subscribe(
      data => {
        console.log(data);
        alert("Recipe added");
        this.router.navigate(["recipes"]);
      },
      err => alert(err)
    );
  }

  public patchRecipe(recipe :any) {
    this.dataStorageService.SendPatchRequest("recipes/" + this.selectedRecipe._id, recipe).subscribe(
      data => {
        this.getRecipes();
        this.router.navigate(["recipes", this.selectedRecipe._id]);
      },
      err => alert(err)
    );
  }

  public deleteRecipe() {
    this.dataStorageService.SendDeleteRequest("recipes/" + this.selectedRecipe._id).subscribe(
      data => {
        this.getRecipes();
        alert("Recipe deleted");
        this.router.navigate(["recipes"]);
      },
      err => alert(err)
    );
  }
}