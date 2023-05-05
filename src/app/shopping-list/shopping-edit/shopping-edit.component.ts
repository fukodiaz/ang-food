import { Component, ViewChild, ElementRef, OnInit } from '@angular/core'

import { ShoppingListService } from '../shopping-list.service'
import { Ingredient } from '../../shared/ingredient.model'

@Component({
	selector: 'app-shopping-edit',
	templateUrl: './shopping-edit.component.html'
})
export class ShoppingEditComponent implements OnInit {
	@ViewChild('nameInput', {static: false}) nameInputRef: ElementRef
	@ViewChild('amountInput', {static: false}) amountInputRef: ElementRef

	constructor(private slService: ShoppingListService) {}

	ngOnInit() {
		
	}

	onAddItem() {
		const ingName = this.nameInputRef.nativeElement.value
		const ingAmount = this.amountInputRef.nativeElement.value
		const newIngredient = new Ingredient(ingName, ingAmount)
		this.slService.addIngredient(newIngredient)
	}
}