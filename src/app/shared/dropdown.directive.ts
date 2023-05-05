import { Directive, ElementRef, HostBinding, HostListener } from "@angular/core";

@Directive({
	selector: '[appDropdown]'
})
export class DropdownDirective {
	@HostBinding('class.open') isOpen: boolean = false
	@HostListener('click') onOpen(event: Event) {
		this.isOpen = !this.isOpen
	}

	constructor(private element: ElementRef) {}
}