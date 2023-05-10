import { Injectable } from '@angular/core'
import { Subject } from 'rxjs'

import { ShoppingListService } from '../shopping-list/shopping-list.service'
import { Recipe } from './recipe.model'
import { Ingredient } from '../shared/ingredient.model'

@Injectable()
export class RecipeService {
	recipesChanged = new Subject<Recipe[]>()
	// private recipes: Recipe[] = [
	// 	new Recipe(
	// 		'Steak', 
	// 		'Juicy Steak', 
	// 		'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5RglS6PhvvvzSqOhGw0Yg2nVIh0RjLZlxPg&usqp=CAU',
	// 		[
	// 			new Ingredient('Meat', 1),
	// 			new Ingredient('Salt', 3),
	// 		]),
	// 	new Recipe(
	// 		'Burger', 
	// 		'The Classic Burger', 
	// 		'https://static.toiimg.com/thumb/83565509.cms?width=1200&height=900',
	// 		[
	// 			new Ingredient('Bread', 2),
	// 			new Ingredient('Meat', 1)
	// 		]),
	// 	new Recipe(
	// 		'Spaghetti', 
	// 		'Savory spaghetti', 
	// 		'https://img.delo-vcusa.ru/2019/11/Spagetti-Putaneska.jpg',
	// 		[
	// 			new Ingredient('Pasta', 2),
	// 			new Ingredient('Tomatoes', 7)
	// 		]),
	// ]

	private recipes: Recipe[] = []

	constructor(private slService: ShoppingListService) {}

	setRecipes(recipes: Recipe[]) {
		this.recipes = recipes
		this.recipesChanged.next(this.recipes.slice())
	}

	getRecipes() {
		return this.recipes.slice() // to return copy of array without any reference 
	}

	getRecipe(id: number) {
		return this.recipes[id]
	}

	addIngredientsToShoppingList(ingredients: Ingredient[]) {
		this.slService.addIngredients(ingredients)
	}

	addRecipe(recipe: Recipe) {
		this.recipes.push(recipe)
		this.recipesChanged.next(this.recipes.slice())
	}

	updateRecipe(index: number, newRecipe: Recipe) {
		this.recipes[index] = newRecipe
		this.recipesChanged.next(this.recipes.slice())
	}

	deleteRecipe(idx: number) {
		this.recipes.splice(idx, 1)
		this.recipesChanged.next(this.recipes.slice())
	}
}