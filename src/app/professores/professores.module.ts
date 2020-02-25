import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProfessorCadastroComponent} from './professor-cadastro/professor-cadastro.component';
import {ProfessoresListagemComponent} from './professores-listagem/professores-listagem.component';
import {FormsModule} from '@angular/forms';
import {AppRoutingModule} from '../app-routing.module';
import {
  ButtonModule,
  CalendarModule,
  ChipsModule,
  DropdownModule,
  InputMaskModule,
  InputTextModule, PaginatorModule,
  TableModule,
  TooltipModule
} from 'primeng';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {SharedModule} from '../shared/shared.module';
import {RouterModule} from '@angular/router';



@NgModule({
  declarations: [
    ProfessorCadastroComponent,
    ProfessoresListagemComponent,
  ],
  exports: [
    ProfessorCadastroComponent,
    ProfessoresListagemComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    AppRoutingModule,
    TableModule,
    ButtonModule,
    TooltipModule,
    ChipsModule,
    InputTextModule,
    CalendarModule,
    BrowserAnimationsModule,
    DropdownModule,
    InputMaskModule,
    PaginatorModule,
    SharedModule,
    RouterModule,
  ]
})
export class ProfessoresModule { }
