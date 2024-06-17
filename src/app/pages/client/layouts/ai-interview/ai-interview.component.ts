import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ai-interview',
  templateUrl: './ai-interview.component.html',
  styleUrl: './ai-interview.component.scss'
})
export class AiInterviewComponent implements OnInit {

  aiFirstResponse: string = 'Bonjour Monsieur Diallo,\n' +
    '\n' +
    "J'ai bien reçu votre demande de prêt de 25 000 000 XOF pour la construction d'une maison pour votre famille. Je comprends que c'est un projet important pour vous et votre famille. \n" +
    '\n' +
    'Pour évaluer votre demande, je dois prendre en compte plusieurs facteurs. Votre profil indique que vous êtes un ingénieur en études et développement chez Atos Sénégal avec un salaire de 500 000 XOF. \n' +
    '\n' +
    "Pour vous donner une première estimation, j'ai calculé un score de solvabilité préliminaire. Voici les points clés :\n" +
    '\n' +
    "* **Caractère (25%) :**  J'ai besoin de plus d'informations pour évaluer ce point. Pouvez-vous me fournir des détails sur vos antécédents financiers, comme des références de votre banque ou des informations sur d'éventuels prêts précédents ? \n" +
    '* **Capacité (20%) :**  Avec un salaire de 500 000 XOF, vous avez une bonne capacité de remboursement mensuel. \n' +
    "* **Condition (15%) :**  L'âge et l'état civil ne sont pas disponibles.  Pourriez-vous me fournir ces informations ? \n" +
    "* **Garantie (20%) :**  Je n'ai pas d'informations sur les garanties que vous pouvez fournir. Pouvez-vous me dire si vous avez un bien immobilier, un véhicule ou des biens de valeur que vous pouvez mettre en garantie ? \n" +
    "* **Capital (20%) :**  Je n'ai pas d'informations sur vos économies ou vos actifs. Pouvez-vous me fournir des détails sur vos finances ? \n" +
    '\n' +
    "En fonction de vos réponses, je pourrai calculer un score de solvabilité plus précis. N'hésitez pas à me contacter si vous avez des questions ou si vous souhaitez me fournir des informations supplémentaires. \n" +
    '\n' +
    'Cordialement,\n' +
    '\n' +
    "L'Expert en Finance \n"

  responseTimestamp: string|Date = ''




  // ----------------------------------------- CONSTRUCTOR -------------------------------------
  constructor(private router: Router) {
    console.log("AI INTERVIEW COMPONENT: content of router --->: ", this.router.getCurrentNavigation()?.extras);
    const xtra = this.router.getCurrentNavigation()?.extras?.state
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


}
