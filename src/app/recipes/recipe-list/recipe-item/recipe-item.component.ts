import { Component, Input, Output, EventEmitter } from "@angular/core";
import { RecipeService } from "../../recipe.service";
import { Recipe } from "../../recipe.model";

@Component({
	selector: 'app-recipe-item',
	templateUrl: './recipe-item.component.html'
})
export class RecipeItemComponent {
	@Input() recipe: Recipe
	@Input() index: number

	constructor(private recipeServer: RecipeService) {}
	
}