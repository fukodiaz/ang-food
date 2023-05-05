import { Recipe } from './recipe.model'

export class RecipeService {
	private recipes: Recipe[] = [
		new Recipe('First Recipe', 'Some description of first recipe', 'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80'),
		new Recipe('Second Recipe', 'Some description of second recipe', 'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80')
	]

	getRecipes() {
		return this.recipes.slice() // to return copy of array without any reference 
	}
}