import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { catchError, throwError } from "rxjs";

interface AuthResponseData {
	idToken: string;
	email: string;
	refreshToken: string;
	expiresIn: string;
	localId: string;
}

@Injectable({providedIn: 'root'})
export class AuthService {
	constructor(private http: HttpClient) {}

	signup(email: string, password: string) {
		const url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${environment.firebaseApiKey}`;
		return this.http.post<AuthResponseData>(url, 
		{
			email,
			password,
			returnSecureToken: true
		})
		.pipe(catchError(errorRes => {
			let errorMessage = 'An unknown error occurred!'
			switch (errorRes?.error?.error?.message) {
				case 'EMAIL_EXISTS':
					errorMessage = 'This email exists already!'
			}

			return throwError(errorMessage)
		}))
	}
}