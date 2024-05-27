import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-template',
  templateUrl: './form-template.component.html',
  styleUrl: './form-template.component.scss'
})
export class FormTemplateComponent {


  @Input() formTemplate!: FormGroup
  @Input() submitLabel: string = 'Confirmer'
  @Input() formMaker!: FormField[]
  @Output() submitEvent = new EventEmitter()

  hidePassword: boolean = true

  constructor() {}


  viewInput(field: FormField){
    console.log('FORM TEMPLATE --> USER IS CHANGING FIELD', field.formControl)
  }
}





export interface FormField {
  key: string,
  name: string,
  formControl: FormControl,
  placeholder?: string|'',
  type: string,
  label?: string,
  options?: {optionName: string, value: string}[]
}
