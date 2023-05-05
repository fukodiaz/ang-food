import { Component } from '@angular/core'
import { Recipe } from './recipe.model'
import { RecipeService } from './recipe.service'

@Component({
	selector: 'app-recipes',
	templateUrl: './recipes.template.html',
	providers: [RecipeService]
})
export class RecipesComponent {
	selectedRecipe: Recipe

	constructor() {}
}