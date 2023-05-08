import { Component, OnInit, AfterViewInit,  OnDestroy } from '@angular/core'
import { Recipe } from './recipe.model'
import { RecipeService } from './recipe.service'

@Component({
	selector: 'app-recipes',
	templateUrl: './recipes.template.html',
	providers: [RecipeService]
})
export class RecipesComponent implements OnInit, OnDestroy {
	selectedRecipe: Recipe

	constructor(private recipeService: RecipeService) {}

	ngOnInit() {
		this.recipeService.recipeSelected.subscribe(
			(recipe: Recipe) => {
				this.selectedRecipe = recipe
			}
		)
	}

	ngOnDestroy(): void {
		this.recipeService.recipeSelected.unsubscribe()
	}
}