import { Component, Input } from "@angular/core";

import { RecipeService } from "../recipe.service";
import { Recipe } from '../recipe.model';

@Component({
	selector: 'app-recipe-detail',
	templateUrl: './recipe-detail.component.html'
})
export class RecipeDetailComponent {
	@Input() recipe: Recipe

	constructor(private recipeService: RecipeService) {}

	onAddToShoppingList () {
		this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients)
	}
}