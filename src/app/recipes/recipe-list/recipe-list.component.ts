import { Component } from "@angular/core";
import { Recipe } from '../recipe.model'

@Component({
	selector: 'app-recipe-list',
	templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent {
	recipes: Recipe[] = [
		new Recipe('First Recipe', 'Some description of this recipe', 'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80')
	]
}