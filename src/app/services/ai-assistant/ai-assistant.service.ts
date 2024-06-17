import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AiConfigs } from 'app/models/aiconfigs.models';
import { environment } from 'environments/environment.debug';
import { firstValueFrom } from 'rxjs/internal/firstValueFrom';


const AI_ASSISTANT_API = environment.aiAssistantUrl // URL OF API  (TO BE UPDATED WHEN DEPLOYING)
@Injectable({
  providedIn: 'root'
})
export class AiAssistantService {

  constructor(private http: HttpClient) { }



  // -------------------------------------- GET CONFIGS-------------------------------------------
  getAiAssistantConfigs() {
    console.log('GET AI CONFIGS --> ')
    const token = localStorage.getItem('access_token')
    const headersOptions = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token
    })
    return  firstValueFrom(this.http.get(`${AI_ASSISTANT_API}/configs`, {headers: headersOptions}))
  }




  // -------------------------------------- UPDATE CONFIGS-------------------------------------------
  updateAiAssistantConfigs(configs: AiConfigs) {
    console.log('UPDATE AI ASSISTANT CONFIGS')
    const token = localStorage.getItem('access_token')
    const headersOptions = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token
    })
    return  firstValueFrom(this.http.put(`${AI_ASSISTANT_API}/configs`, configs, {headers: headersOptions}))
  }
}
