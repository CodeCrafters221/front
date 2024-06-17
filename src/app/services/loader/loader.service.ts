import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  isLoading : boolean = false
  constructor() { }

  setLoader(value: boolean) {
    this.isLoading = value
    return value
  }

  getLoaderState() {
    return this.isLoading
  }
}
