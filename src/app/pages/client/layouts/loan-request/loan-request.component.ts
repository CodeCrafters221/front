import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-loan-request',
  templateUrl: './loan-request.component.html',
  styleUrls: ['./loan-request.component.scss']
})
export class LoanRequestComponent {
  loanRequestForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.loanRequestForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      age: ['', [Validators.required, Validators.min(18)]],
      gender: ['', Validators.required],
      contact: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      cni: ['', Validators.required],
      projectTitle: ['', Validators.required],
      amount: ['', [Validators.required, Validators.min(1000)]],
      professionalCategory: ['', Validators.required],
      profession: ['', Validators.required],
      companyName: [''],
      startDate: ['', Validators.required],
      paymentType: ['', Validators.required],
      documents: ['', Validators.required],
      justificatifs: ['', Validators.required],
      confirmInfo: [false, Validators.requiredTrue]
    });
  }

  onSubmit() {
    if (this.loanRequestForm.valid) {
      console.log(this.loanRequestForm.value);
      
    }
  }
}
