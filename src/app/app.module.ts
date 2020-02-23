import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';

import { AppComponent } from './app.component';
import {AlunosModule} from './alunos/alunos.module';
import {ProfessoresModule} from './professores/professores.module';
import {DisciplinasModule} from './disciplinas/disciplinas.module';
import {CoreModule} from './core/core.module';
import {HttpClientModule} from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AlunosModule,
    ProfessoresModule,
    DisciplinasModule,
    CoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
