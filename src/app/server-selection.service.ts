import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServerSelectionService {
  url = ''
  setUrl(brokerUrl: string) {
    this.url = brokerUrl
  }

}
