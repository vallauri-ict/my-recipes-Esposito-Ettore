import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipeService } from 'src/app/shared/recipe.service';
import { ShoppingListService } from 'src/app/shared/shopping-list.service';

@Component({
  selector: 'app-recipe-datail',
  templateUrl: './recipe-datail.component.html',
  styleUrls: ['./recipe-datail.component.css']
})
export class RecipeDatailComponent implements OnInit {
 
  constructor(public recipeService :RecipeService, private shoppingService :ShoppingListService, private activatedRoute :ActivatedRoute) { }

  ngOnInit(): void {
    let recipeId :string = this.activatedRoute.snapshot.paramMap.get('id') as string;
    this.recipeService.getRecipe(recipeId);
  }

  addIngredientsToList() {
    if(this.shoppingService.ingredients == undefined)
      this.shoppingService.getIngredients();
    this.shoppingService.addIngredients(this.recipeService.selectedRecipe.ingredients);
  }
}
