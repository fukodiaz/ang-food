import { Injectable } from '@angular/core'

import { ShoppingListService } from '../shopping-list/shopping-list.service'
import { Recipe } from './recipe.model'
import { Ingredient } from '../shared/ingredient.model'

@Injectable()
export class RecipeService {
	private recipes: Recipe[] = [
		new Recipe(
			'Steak', 
			'Some description of first recipe', 
			'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80',
			[
				new Ingredient('Meat', 1),
				new Ingredient('Salt', 3),
			]),
		new Recipe(
			'Burger', 
			'Some description of second recipe', 'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80',
			[
				new Ingredient('Bread', 2),
				new Ingredient('Meat', 1)
			])
	]

	constructor(private slService: ShoppingListService) {}

	getRecipes() {
		return this.recipes.slice() // to return copy of array without any reference 
	}

	getRecipe(id: number) {
		return this.recipes[id]
	}

	addIngredientsToShoppingList(ingredients: Ingredient[]) {
		this.slService.addIngredients(ingredients)
	}
}