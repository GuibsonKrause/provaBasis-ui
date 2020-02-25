import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DisciplinasListagemComponent} from './disciplinas-listagem/disciplinas-listagem.component';
import {DisciplinaCadastroComponent} from './disciplina-cadastro/disciplina-cadastro.component';
import {FormsModule} from '@angular/forms';
import {AppRoutingModule} from '../app-routing.module';
import {
  ButtonModule,
  CalendarModule, CheckboxModule,
  ChipsModule,
  DropdownModule,
  InputMaskModule,
  InputTextModule, ListboxModule, PaginatorModule,
  TableModule,
  TooltipModule
} from 'primeng';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {SharedModule} from '../shared/shared.module';
import {RouterModule} from '@angular/router';



@NgModule({
  declarations: [
    DisciplinasListagemComponent,
    DisciplinaCadastroComponent,
  ],
  exports: [
    DisciplinasListagemComponent,
    DisciplinaCadastroComponent,
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
    ListboxModule,
    CheckboxModule,
    SharedModule,
    RouterModule,
  ]
})
export class DisciplinasModule { }
