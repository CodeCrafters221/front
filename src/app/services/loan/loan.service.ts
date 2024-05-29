import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ILoan } from 'app/models/loan.models';
import { environment } from 'environments/environment.debug';
import { firstValueFrom } from 'rxjs';


const API = environment.apiUrl // URL OF API  (TO BE UPDATED WHEN DEPLOYING)

@Injectable({
  providedIn: 'root'
})
export class LoanService {

  // -------------------------------------- CONSTRUCTOR -------------------------------------------
  constructor(private http: HttpClient) { }




  // -------------------------------------- NG ONINIT -------------------------------------------
  ngOnInit(): void {
    console.log('NG ON INIT')
  }




  // -------------------------------------- GET ALL LOANS -------------------------------------------
  getAllLoans(): Promise<ILoan[]> {
    console.log('GET ALL LOANS')
    const token = localStorage.getItem('access_token')
    const headersOptions = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token
    })
    return  firstValueFrom(this.http.get<ILoan[]>(`${API}/loans`, {headers: headersOptions}))
  }






  // 
  // -------------------------------------- GET LOAN BY ID -------------------------------------------
  getLoanById(id: string): Promise<ILoan> {
    console.log('GET LOAN BY ID')
    const headersOptions = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem('access_token')
    })
    return  firstValueFrom(this.http.get<ILoan>(`${API}/loans/${id}`, {headers: headersOptions}))
  }
}
