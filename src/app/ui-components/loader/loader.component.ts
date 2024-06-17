import { Component } from '@angular/core';
import { LoaderService } from 'app/services/loader/loader.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrl: './loader.component.scss'
})
export class LoaderComponent {
  constructor(protected readonly loader: LoaderService){
    console.log('APP COMPONENT CONSTRUCTOR: ')
  }
}
