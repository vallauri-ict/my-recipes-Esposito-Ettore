import { Component, Input, OnInit } from '@angular/core';
import { RecipeModel } from 'src/app/models/recipe.model';

@Component({
  selector: 'app-recipe-datail',
  templateUrl: './recipe-datail.component.html',
  styleUrls: ['./recipe-datail.component.css']
})
export class RecipeDatailComponent implements OnInit {
  @Input() Recipe :RecipeModel;
 
  constructor() { }

  ngOnInit(): void {
  }

}
