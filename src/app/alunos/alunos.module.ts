import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import {AppRoutingModule} from '../app-routing.module';
import {
  ButtonModule,
  CalendarModule,
  ChipsModule,
  InputMaskModule,
  InputTextModule, ListboxModule, PaginatorModule,
  TableModule,
  TooltipModule
} from 'primeng';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AlunosListagemComponent} from './alunos-listagem/alunos-listagem.component';
import {AlunoCadastroComponent} from './aluno-cadastro/aluno-cadastro.component';
import {SharedModule} from '../shared/shared.module';




@NgModule({
  declarations: [
    AlunosListagemComponent,
    AlunoCadastroComponent,
  ],
  exports: [
    AlunosListagemComponent,
    AlunoCadastroComponent,
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
    InputMaskModule,
    PaginatorModule,
    ListboxModule,
    SharedModule,
  ]
})
export class AlunosModule { }
