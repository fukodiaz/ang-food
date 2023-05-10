import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { RecipeService } from "../recipes/recipe.service";
import { Recipe } from "../recipes/recipe.model";

@Injectable({providedIn: 'root'})
export class DataStorageService {
	private apiBase = 'https://ang-food-api-default-rtdb.europe-west1.firebasedatabase.app'

	constructor(private http: HttpClient,
					private recipeService: RecipeService) {}
	
	storeRecipes() {
		const recipes = this.recipeService.getRecipes()
		this.http.put(`${this.apiBase}/recipes.json`, recipes).subscribe(
			response => {
				console.log('response (storeRecipes):', response)
			}
		)
	}	

	fetchRecipes() {
		this.http
			.get<Recipe[]>(`${this.apiBase}/recipes.json`)
			.subscribe(recipes => {
					//console.log('fetched recipes:', response)
					this.recipeService.setRecipes(recipes)
				}
			)
	}
}