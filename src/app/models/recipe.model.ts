import { IngredientModel } from "./ingredient.model";

export class RecipeModel {
    public id :string;
    public name :string;
    public description :string;
    public imagePath :string;
    public ingredients :IngredientModel[];

    public constructor() {
    }
}