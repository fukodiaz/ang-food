import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { AlertComponent } from "./alert/alert.component";
import { SpinnerLoadingComponent } from "./spinner-loading/spinner-loading.component";
import { PlaceholderDirective } from "./placeholder/placeholder.directive";
import { DropdownDirective } from "./dropdown.directive";


@NgModule({
	declarations: [
		AlertComponent,
		SpinnerLoadingComponent,
		PlaceholderDirective,
		DropdownDirective
	],
	imports: [
		CommonModule
	],
	exports: [
		AlertComponent,
		SpinnerLoadingComponent,
		PlaceholderDirective,
		DropdownDirective,
		CommonModule
	],
	entryComponents: [
		AlertComponent
	]
})
export class SharedModule {}