import { Component, ViewChild, ElementRef, EventEmitter, Output } from '@angular/core'

import { Ingredient } from '../../shared/ingredient.model'

@Component({
	selector: 'app-shopping-edit',
	templateUrl: './shopping-edit.component.html'
})
export class ShoppingEditComponent {
	@ViewChild('nameInput', {static: false}) nameInputRef: ElementRef
	@ViewChild('amountInput', {static: false}) amountInputRef: ElementRef
	@Output() ingredientAdded = new EventEmitter<Ingredient>()

	onAddItem() {
		const ingName = this.nameInputRef.nativeElement.value
		const ingAmount = this.amountInputRef.nativeElement.value
		const newIngredient = new Ingredient(ingName, ingAmount)
		this.ingredientAdded.emit(newIngredient)
	}
}