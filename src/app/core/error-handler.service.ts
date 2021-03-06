import { Injectable } from '@angular/core';
import {ToastyService} from 'ng2-toasty';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService {

  constructor(private toasty: ToastyService) { }

  handler(errorResponse: any) {
    let msg: string;
    if (typeof errorResponse === 'string') {
      msg = errorResponse;
    } else {
      msg = errorResponse.error.message;
      if (msg.includes('CPF inválido')) {
        msg = 'CPF inválido!';
      }
      console.log('Ocorreu um erro ', errorResponse);
    }
    this.toasty.error(msg);
  }
}
