import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableModule } from 'primeng/table';
import {ButtonModule} from 'primeng/button';
import { TooltipModule } from 'primeng/tooltip';
import { NavbarComponent } from './navbar/navbar.component';
import {InputTextModule} from 'primeng/inputtext';
import { CalendarModule } from 'primeng/calendar';
import {CheckboxModule, ChipsModule, DropdownModule, InputMaskModule, ListboxModule, PaginatorModule} from 'primeng';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import {AlunosModule} from './alunos/alunos.module';
import {ProfessoresModule} from './professores/professores.module';
import {DisciplinasModule} from './disciplinas/disciplinas.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
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
    AlunosModule,
    ProfessoresModule,
    DisciplinasModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
