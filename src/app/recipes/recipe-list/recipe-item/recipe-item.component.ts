import { Component, Input, Output, EventEmitter } from "@angular/core";
import { RecipeService } from "../../recipe.service";
import { Recipe } from "../../recipe.model";

@Component({
	selector: 'app-recipe-item',
	templateUrl: './recipe-item.component.html'
})
export class RecipeItemComponent {
	@Input() recipe: Recipe

	constructor(private recipeServer: RecipeService) {}
	
	onSelect() {
		this.recipeServer.recipeSelected.emit(this.recipe)
	}
}