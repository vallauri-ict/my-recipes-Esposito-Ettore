import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { IngredientModel } from 'src/app/models/ingredient.model';
import { RecipeService } from 'src/app/shared/recipe.service';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  constructor(public recipeService :RecipeService, private router :Router, private activatedRoute :ActivatedRoute) { }

  recipeName :string = "";
  recipeDescription :string = "";
  recipeImagePath :string = "";
  recipeIngredients :string = "";
  buttonText :string = "";

  base64image :any = "";

  editMode :string = "";

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params :Params) => {
      if(params['id'])
      {
        if(this.recipeService.selectedRecipe)
        {
          this.recipeName = this.recipeService.selectedRecipe.name;
          this.recipeDescription = this.recipeService.selectedRecipe.description;
          this.recipeImagePath = this.recipeService.selectedRecipe.imagePath;
          this.recipeIngredients = "";
          for(let ingredient of this.recipeService.selectedRecipe.ingredients)
            this.recipeIngredients += `${ingredient.name}:${ingredient.amount}\n`;
        }

        this.editMode = "edit";
        this.buttonText = "Save changes";
      }
      else
      {
        this.editMode = "add";
        this.buttonText = "Add new recipe";
      }
    });
  }

  onSave() {
    let ingredients = this.manageIngredients(this.recipeIngredients);
    if(this.recipeImagePath.indexOf("fakepath") != -1)
      this.recipeImagePath = this.base64image;
    let recipe = {
      "name" : this.recipeName,
      "description" : this.recipeDescription,
      "imagePath" : this.recipeImagePath,
      "ingredients" : ingredients
    };

    switch(this.editMode)
    {
      case "add":
        this.recipeService.postRecipe(recipe);
        break;
      case "edit":
        this.recipeService.patchRecipe(recipe);
        break;
    }
  }

  private manageIngredients (ingredients :string) :IngredientModel[] {
    let retVal :IngredientModel[] = [];
    let items = ingredients.split('\n');
    for(let item of items)
      if(item)
        {
          let props = item.split(':');
          retVal.push(new IngredientModel(props[0], parseInt(props[1])));
        }
    return retVal;
  }

  public onSelectFile(event :any) {
    if(event.target.files && event.target.files[0])
    {
      let filePath = event.target.files[0];
      let reader = new FileReader();
      reader.readAsDataURL(filePath);
      reader.onload = () => this.base64image = reader.result?.toString();
    }
  }
}