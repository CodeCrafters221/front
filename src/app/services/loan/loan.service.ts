import { DOCUMENT } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ILoan } from 'app/models/loan.models';
import { environment } from 'environments/environment.debug';
import { firstValueFrom } from 'rxjs';


const API = environment.apiUrl // URL OF API  (TO BE UPDATED WHEN DEPLOYING)

@Injectable({
  providedIn: 'root'
})
export class LoanService {
  token = inject(DOCUMENT).defaultView?.localStorage?.getItem('access_token')

  // -------------------------------------- CONSTRUCTOR -------------------------------------------
  constructor(private http: HttpClient) { }




  // -------------------------------------- NG ONINIT -------------------------------------------
  ngOnInit(): void {
    console.log('NG ON INIT')
  }




  // -------------------------------------- GET ALL LOANS -------------------------------------------
  getAllLoans(): Promise<ILoan[]> {
    console.log('GET ALL LOANS')
    const headersOptions = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.token
    })
    return  firstValueFrom(this.http.get<ILoan[]>(`${API}/loans`, {headers: headersOptions}))
  }






  //
  // -------------------------------------- GET LOAN BY ID -------------------------------------------
  getLoanById(id: string): Promise<ILoan> {
    console.log('GET LOAN BY ID')
    const headersOptions = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.token
    })
    return  firstValueFrom(this.http.get<ILoan>(`${API}/loans/${id}`, {headers: headersOptions}))
  }


  // -------------------------------------- INSERT LOAN -------------------------------------------
  insertLoan(loan: ILoan) {
    console.log('INSERT LOAN')
    const headersOptions = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.token
    })
    return  firstValueFrom(this.http.post(`${API}/loans`, loan, {headers: headersOptions}))
  }
}
