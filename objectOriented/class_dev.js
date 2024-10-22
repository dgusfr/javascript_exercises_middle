class Pessoa {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }
}

class Funcionario extends Pessoa {
  constructor(nome, idade, cargo, salario) {
    super(nome, idade);
    this.cargo = cargo;
    this.salario = salario;
    this.cargo = cargo;
    this.salario = salario;
  }

  imprimirInformacoes() {
    console.log(
      `Nome: ${this.nome}, Idade: ${this.idade}, Profissão: ${this.cargo}, Salário: ${this.salario}`
    );
  }
}

const novoFuncionario = new Funcionario("João", 30, "Desenvolvedor", 5000);
novoFuncionario.imprimirInformacoes();
