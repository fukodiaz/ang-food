import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { Observable } from "rxjs";

import { AuthResponseData, AuthService } from "./auth.service";

@Component({
	selector: 'app-auth',
	templateUrl: './auth.component.html'
})
export class AuthComponent {
	isLoginMode = false
	isLoading = false
	isError: string | null = null

	constructor(private authService: AuthService,
					private router: Router) {}

	onSwitchMode() {
		this.isLoginMode = !this.isLoginMode
	}

	onSubmit(form: NgForm) {
		if (!form.valid) {
			return null
		}
		const email = form.value.email
		const password = form.value.password

		let authObs: Observable<AuthResponseData>

		this.isLoading = true
		if (this.isLoginMode) {
			authObs = this.authService.login(email, password)
		} else {
			authObs = this.authService.signup(email, password)
		}

		authObs.subscribe(
			(resData) => {
				console.log(resData)
				this.isLoading = false
				this.isError = null
				this.router.navigate(['/recipes'])
			}, errorMessage => {
				console.log('Authentication error: ', errorMessage)
				this.isError = errorMessage//'An error is occurred!'
				this.isLoading = false
			}
		)

		form.reset()	
	}
}