export class IngredientModel {
    public id :number;
    public name :string;
    public amount :number;

    public constructor(name :string, amount :number) {
        this.name = name;
        this.amount = amount;
    }
}