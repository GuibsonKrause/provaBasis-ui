import {LOCALE_ID, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {NavbarComponent} from './navbar/navbar.component';
import {ErrorHandlerService} from './error-handler.service';
import {ToastyModule} from 'ng2-toasty';
import {ConfirmationService, ConfirmDialogModule} from 'primeng';
import {AlunoService} from '../alunos/aluno.service';



@NgModule({
  declarations: [NavbarComponent],
  exports: [
    NavbarComponent,
    ToastyModule,
    ConfirmDialogModule,
  ],
  imports: [
    CommonModule,
    ToastyModule.forRoot(),
    ConfirmDialogModule,
  ],
  providers: [
    ErrorHandlerService,
    AlunoService,
    ConfirmationService,
    { provide: LOCALE_ID, useValue: 'pt-BR' }
  ]
})
export class CoreModule { }
