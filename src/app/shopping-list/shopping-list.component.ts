import { Component, OnInit, OnDestroy } from "@angular/core";
import { Subscription } from "rxjs";

import { ShoppingListService } from "./shopping-list.service";
import { Ingredient } from "../shared/ingredient.model";

@Component({
	selector: 'app-shopping-list',
	templateUrl: './shopping-list.component.html'
})
export class ShoppingListComponent implements OnInit, OnDestroy {
	ingredients: Ingredient[]
	subscrption: Subscription

	constructor(private slService: ShoppingListService) {}

	ngOnInit() {
		this.ingredients = this.slService.getIngredients()
		this.subscrption = this.slService.ingredientsChanged.subscribe(
			(ingredients: Ingredient[]) => {
				this.ingredients = ingredients
			}
		)
	}

	onEditItem(id: number) {
		this.slService.startedEditing.next(id)
	}

	ngOnDestroy() {
		this.subscrption.unsubscribe()
	}
}