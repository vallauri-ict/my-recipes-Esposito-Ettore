import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { RecipeModel } from 'src/app/models/recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() Recipe :RecipeModel;
  @Output() recipeSelected = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
    console.log(this.Recipe);
  }

  onSelected() {
    this.recipeSelected.emit();
  }
}
