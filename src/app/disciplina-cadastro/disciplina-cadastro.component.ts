import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-disciplina-cadastro',
  templateUrl: './disciplina-cadastro.component.html',
  styleUrls: ['./disciplina-cadastro.component.css']
})
export class DisciplinaCadastroComponent {
  checked = false;
  professores = [
    {label: 'Lucas Thiago Guilherme Fernandes', value: 1},
    {label: 'Vitória Elisa Silveira', value: 2},
    {label: 'Vanessa Sophia Marcela Gonçalves', value: 3},
    {label: 'Cláudia Sônia Ana Freitas', value: 4},
    {label: 'Maitê Bianca Maya dos Santos', value: 5},
    {label: 'Isabela Francisca Nascimento', value: 6},
    {label: 'Enrico Juan Ricardo Campos', value: 7},
    {label: 'Rayssa Sebastiana Silveira', value: 8},
    {label: 'Nicolas Ruan Rezende', value: 9},
    {label: 'Manuel Bruno Almada', value: 10}
  ];
}
