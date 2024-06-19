import { ILoan } from './../../../../models/loan.models';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ChatHistory } from 'app/models/chat-history.interface';
import { AiAssistantService } from 'app/services/ai-assistant/ai-assistant.service';

@Component({
  selector: 'app-ai-interview',
  templateUrl: './ai-interview.component.html',
  styleUrl: './ai-interview.component.scss'
})
export class AiInterviewComponent implements OnInit {
  @ViewChild('chatFrame',{static: false}) chatFrame!: ElementRef
  aiFirstResponse: string = ''
  responseTimestamp: string|Date = ''
  loan: ILoan
  chatHistory: ChatHistory[] = []
  clientMessage!: string;



  // ----------------------------------------- CONSTRUCTOR -------------------------------------
  constructor(private router: Router, private aiAssitantService: AiAssistantService) {
    console.log("AI INTERVIEW COMPONENT: content of router --->: ", this.router.getCurrentNavigation()?.extras);
    const xtra = this.router.getCurrentNavigation()?.extras?.state
    this.loan = xtra as ILoan
    if(xtra) this.aiFirstResponse = xtra?.['aiResponse']
    if(xtra) this.responseTimestamp = new Date (xtra?.['updatedAt']).toLocaleTimeString("fr-FR")
      console.log("AI INTERVIEW COMPONENT: content of responseTimestamp --->: ", this.responseTimestamp);

  }



  // ----------------------------------------- NG ON INIT -------------------------------------
  ngOnInit(): void {
    const splitRes = this.aiFirstResponse.split(' ')
    const scores = splitRes.filter(e=>e.includes('%'))
    var solvency
    if(scores.length>5 || scores.length==1) solvency = scores.reverse()[0]
    console.log("AI INTERVIEW COMPONENT: content of ngoninit --->: ", solvency);
    if(solvency){
      const percent = `<h2 class = 'text-blue-700 flex justify-center items-center'>${solvency}</h2>`
      splitRes[splitRes.lastIndexOf(solvency as string)] = percent
      this.aiFirstResponse = splitRes.join(' ')
    }
  }



  // ----------------------------------------- ON CLIENT MESSAGE FOLLOW-UP -------------------------------------
  async onClientMessage(msg: string){
    this.chatHistory.push({user: 'CLIENT', message: msg, timestamp: new Date().toLocaleTimeString()})
    this.chatFrame.nativeElement.scrollTop = this.chatFrame.nativeElement.scrollHeight
    console.log('AI INTERVIEW COMPONENT: ---> onClient Message mthod: ', msg)
    this.clientMessage = ''
    const { response } = await this.aiAssitantService.getResponseFromAiAssistant(this.loan._id, msg) as {[key:string]: string}
    console.log('RESPONSE OF THE AI ASSISTANT: ', response)
    this.chatHistory.push({user: 'AI', message: response as string, timestamp: new Date().toLocaleTimeString()})
    this.chatFrame.nativeElement.scrollTop = this.chatFrame.nativeElement.scrollHeight
  }


}
