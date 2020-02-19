import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableModule } from 'primeng/table';
import {ButtonModule} from 'primeng/button';
import { TooltipModule } from 'primeng/tooltip';
import { AlunosListagemComponent } from './alunos-listagem/alunos-listagem.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProfessoresListagemComponent } from './professores-listagem/professores-listagem.component';
import { DisciplinasListagemComponent } from './disciplinas-listagem/disciplinas-listagem.component';
import { AlunoCadastroComponent } from './aluno-cadastro/aluno-cadastro.component';
import {InputTextModule} from 'primeng/inputtext';
import { CalendarModule } from 'primeng/calendar';
import {CheckboxModule, ChipsModule, DropdownModule, InputMaskModule, ListboxModule, PaginatorModule} from 'primeng';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { DisciplinaCadastroComponent } from './disciplina-cadastro/disciplina-cadastro.component';
import {FormsModule} from '@angular/forms';
import { ProfessorCadastroComponent } from './professor-cadastro/professor-cadastro.component';
import { MessageComponent } from './message/message.component';

@NgModule({
  declarations: [
    AppComponent,
    AlunosListagemComponent,
    NavbarComponent,
    ProfessoresListagemComponent,
    DisciplinasListagemComponent,
    AlunoCadastroComponent,
    DisciplinaCadastroComponent,
    ProfessorCadastroComponent,
    MessageComponent
  ],
  imports: [
    BrowserModule,
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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
