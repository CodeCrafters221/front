import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoanService } from 'app/services/loan/loan.service';

@Component({
  selector: 'app-loan-request',
  templateUrl: './loan-request.component.html',
  styleUrls: ['./loan-request.component.scss']
})
export class LoanRequestComponent {
  loanRequestForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private loanService: LoanService) {
    this.loanRequestForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      age: ['', [Validators.required, Validators.min(18)]],
      gender: ['', Validators.required],
      contact: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      cni: ['', Validators.required],
      projectTitle: ['', Validators.required],
      amount: ['', [Validators.required, Validators.min(1000)]],
      capital: ['', [Validators.required]],
      guaranteeTitle: [''],
      guaranteeAmount: ['', [Validators.min(1000)]],
      salary: ['', [Validators.required]],
      professionalCategory: ['', Validators.required],
      profession: ['', Validators.required],
      companyName: [''],
      startDate: ['', Validators.required],
      paymentType: ['', Validators.required],
      currency: ['XOF'],
      loanPaymentType:["monthly"],
      duration: ["5 years"],
      /**
       * @todo TRAITEMENT DES JUSTIFICATIFS & DOCUMENTS Á FAIRE
       */
      // documents: ['', Validators.required],
      // justificatifs: ['', Validators.required],
      confirmInfo: [false, Validators.requiredTrue]

    });
  }

  async onSubmit() {
    console.log('on submit method',this.loanRequestForm.value);
    if (this.loanRequestForm.valid) {
      console.log(this.loanRequestForm.value);
      const response = await this.loanService.insertLoan(this.loanRequestForm.value);
      console.log('LOAN REQUEST COMPONENT: on submit loan: ', response)
      await this.router.navigateByUrl('/client/ai-interview', {state: response})
    } else {
      console.log('LOAN REQUEST COMPONENT: on submit loan: form invalid');
    }
  }



  onValidateInfo(event: any){
    console.log('ON VALIDATE --> ', this.loanRequestForm, event)
  }
}
