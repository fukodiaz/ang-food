import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { BehaviorSubject, catchError, throwError, tap } from "rxjs";

import { User } from "./user.model";

export interface AuthResponseData {
	idToken: string;
	email: string;
	refreshToken: string;
	expiresIn: string;
	localId: string;
	registered?: boolean
}

@Injectable({providedIn: 'root'})
export class AuthService {
	user = new BehaviorSubject<User | null>(null)

	constructor(private http: HttpClient,
					private router: Router) {}

	signup(email: string, password: string) {
		const url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${environment.firebaseApiKey}`
		return this.http.post<AuthResponseData>(url, 
			{
				email,
				password,
				returnSecureToken: true
			})
			.pipe(catchError(this.handleError), tap(
				({localId, email,  idToken, expiresIn}) => {
					this.handleAuthentication(localId, email,  idToken, +expiresIn)
				})
			)
	}

	login(email: string, password: string) {
		const url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.firebaseApiKey}`
		return this.http.post<AuthResponseData>(url, 
			{
				email,
				password,
				returnSecureToken: true
			})
			.pipe(catchError(this.handleError), tap(
				({localId, email,  idToken, expiresIn}) => {
					this.handleAuthentication(localId, email,  idToken, +expiresIn)
				})
			)
	}

	logout() {
		this.user.next(null)
		this.router.navigate(['/auth'])
	}

	private handleAuthentication(
		localId: string, 
		email: string, 
		idToken: string, 
		expiresIn: number) {
		const expirationDate = new Date(new Date().getTime() + expiresIn*1000)
		const user = new User(localId, email, idToken, expirationDate)
		this.user.next(user)
		}

	private handleError(errorRes: HttpErrorResponse) {
		let errorMessage = 'An unknown error occurred!'
		switch (errorRes?.error?.error?.message) {
			case 'EMAIL_EXISTS':
				errorMessage = 'This email exists already!'
				break
			case 'EMAIL_NOT_FOUND':
				errorMessage = 'This email does not exist'
				break
			case 'INVALID_PASSWORD':
				errorMessage = 'This is incorrect password'
				break
		}

		return throwError(errorMessage)
	}
}