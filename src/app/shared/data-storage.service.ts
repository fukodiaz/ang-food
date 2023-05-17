import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { exhaustMap, map, take, tap } from "rxjs/operators";

import { RecipeService } from "../recipes/recipe.service";
import { Recipe } from "../recipes/recipe.model";
import { AuthService } from "../auth/auth.service";

@Injectable({providedIn: 'root'})
export class DataStorageService {
	private apiBase = 'https://ang-food-api-default-rtdb.europe-west1.firebasedatabase.app'

	constructor(private http: HttpClient,
					private recipeService: RecipeService,
					private authService: AuthService) {}
	
	storeRecipes() {
		const recipes = this.recipeService.getRecipes()
		this.http.put(`${this.apiBase}/recipes.json`, recipes).subscribe(
			response => {
				console.log('response (storeRecipes):', response)
			}
		)
	}

	fetchRecipes() {
		return this.authService.user.pipe(
			take(1), 
			exhaustMap(
				user => {
					const valueParams = String(user?.token);
					//newParams.toString()
					return this.http
					.get<Recipe[]>(
						`${this.apiBase}/recipes.json`,
					{
						params: new HttpParams().set('auth', valueParams)
					})
				}),
			map(recipes => {
				return recipes.map(recipe => {
					return {
						...recipe,
						ingredients: recipe?.ingredients ? recipe.ingredients : []
					}
				})
			}),
			tap(recipes => {
				this.recipeService.setRecipes(recipes)
			})
		)
	}
}