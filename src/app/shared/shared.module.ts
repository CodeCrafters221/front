import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';

export const MAT_MODULES = [
  MatFormFieldModule,
  MatInputModule,
  MatIconModule,
  MatSelectModule,
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ReactiveFormsModule,
...MAT_MODULES
  ],
  exports:[
    ...MAT_MODULES,

  ]
})
export class SharedModule { }
