
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { environment } from 'environments/environment.debug';
import { User } from 'app/models/user.models';

const API = environment.apiUrl // URL OF API  (TO BE UPDATED WHEN DEPLOYING)




// -------------------------------------- AUTH SERVICE -------------------------------------------
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  globalUser! : User
  // -------------------------------------- CONSTRUCTOR -------------------------------------------
  constructor(private http: HttpClient, private router: Router) { }





  // -------------------------------------- LOGIN METHOD -------------------------------------------
  login(email: string, password: string): Observable<any> {
    return this.http.post<any>(`${API}/auth/login`, { email, password })
      .pipe(this.handleError,tap(response => localStorage.setItem('access_token', response.token)))
  }



  // -------------------------------------- LOGOUT METHOD -------------------------------------------

  logout(): void {
    localStorage.removeItem('access_token');
    this.router.navigate(['/login'], {replaceUrl: true});
  }



  // -------------------------------------- GET TOKEN METHOD -------------------------------------------

  getToken(): string | null {
    return localStorage.getItem('access_token');
  }




  // ------------------------------------- IS AUTHENTICATED METHOD -------------------------------------------
  isAuthenticated(): boolean {
    return !!this.getToken();
  }



    // ====================================== handleError ============================================
handleError = catchError((error: HttpErrorResponse) => {
  if (error.error instanceof ErrorEvent) console.error('A client-side error occurred:', error.error)
  else console.error(`SERVER ERROR: status code ${error.status}, ` + `error was: `, error.error)
  return throwError(() => error);
})

}
