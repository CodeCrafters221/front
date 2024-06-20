import { DOCUMENT } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { AiConfigs } from 'app/models/aiconfigs.models';
import { environment } from 'environments/environment.debug';
import { firstValueFrom } from 'rxjs/internal/firstValueFrom';


const AI_ASSISTANT_API = environment.aiAssistantUrl // URL OF API  (TO BE UPDATED WHEN DEPLOYING)
@Injectable({
  providedIn: 'root'
})
export class AiAssistantService {

  token = inject(DOCUMENT).defaultView?.localStorage?.getItem('access_token')
  constructor(private http: HttpClient) { }



  // -------------------------------------- GET CONFIGS-------------------------------------------
  getAiAssistantConfigs() {
    console.log('GET AI CONFIGS --> ')

    const headersOptions = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.token
    })
    return  firstValueFrom(this.http.get(`${AI_ASSISTANT_API}/configs`, {headers: headersOptions}))
  }




  // -------------------------------------- UPDATE CONFIGS-------------------------------------------
  updateAiAssistantConfigs(configs: AiConfigs) {
    console.log('UPDATE AI ASSISTANT CONFIGS')
    const headersOptions = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.token
    })
    return  firstValueFrom(this.http.put(`${AI_ASSISTANT_API}/configs`, configs, {headers: headersOptions}))
  }


  // -------------------------------------- GET RESPONSE FROM AI ASSISTANT -------------------------------------------
  getResponseFromAiAssistant(loanId: string, clientMessage: string){
    console.log('AI ASSISTANT SERVICE: get response from ai assistant: ', loanId)
    const headersOptions = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.token,
      'Accept': 'text/plain'
    })
    return  firstValueFrom(this.http.post(`${AI_ASSISTANT_API}/interview`, {loanId, clientMessage}, {headers: headersOptions}))

  }
}
