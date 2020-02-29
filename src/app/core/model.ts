export class Disciplina {
  id: number;
  nome: string;
  ativa: number;
  descricao: string;
  cargaHoraria: number;
  professor: Professor;
}

export class Professor {
  id: number;
  nome: string;
  dataNascimento: Date;
  area: string;
  matricula: string;
  disciplinas = new Array<Disciplina>();
}

export class Aluno {
  id: number;
  matricula: string;
  cpf: string;
  nome: string;
  dataNascimento: Date;
  disciplinas: Array<Disciplina> = new Array<Disciplina>();
}
