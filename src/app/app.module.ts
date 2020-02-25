import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';

import { AppComponent } from './app.component';
import {AlunosModule} from './alunos/alunos.module';
import {ProfessoresModule} from './professores/professores.module';
import {DisciplinasModule} from './disciplinas/disciplinas.module';
import {CoreModule} from './core/core.module';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule, Routes} from '@angular/router';
import {AlunosListagemComponent} from './alunos/alunos-listagem/alunos-listagem.component';
import {AlunoCadastroComponent} from './alunos/aluno-cadastro/aluno-cadastro.component';
import {DisciplinasListagemComponent} from './disciplinas/disciplinas-listagem/disciplinas-listagem.component';
import {DisciplinaCadastroComponent} from './disciplinas/disciplina-cadastro/disciplina-cadastro.component';
import {ProfessoresListagemComponent} from './professores/professores-listagem/professores-listagem.component';
import {ProfessorCadastroComponent} from './professores/professor-cadastro/professor-cadastro.component';


const routes: Routes = [
  {path: 'alunos', component: AlunosListagemComponent},
  {path: 'alunos/:id', component: AlunoCadastroComponent},
  {path: 'alunos/novo', component: AlunoCadastroComponent},
  {path: 'disciplinas', component: DisciplinasListagemComponent},
  {path: 'disciplinas/:id', component: DisciplinaCadastroComponent},
  {path: 'disciplinas/nova', component: DisciplinaCadastroComponent},
  {path: 'professores', component: ProfessoresListagemComponent},
  {path: 'professores/:id', component: ProfessorCadastroComponent},
  {path: 'professores/novo', component: ProfessorCadastroComponent},
];

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
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
