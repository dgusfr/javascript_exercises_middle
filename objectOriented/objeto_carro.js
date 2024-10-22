class Veiculo {
  constructor(marca, modelo) {
    this.marca = marca;
    this.modelo = modelo;
  }

  imprimirInformacoes() {
    console.log(`Marca: ${this.marca}, Modelo: ${this.modelo}`);
  }
}

class Carro extends Veiculo {
  constructor(marca, modelo, numPortas) {
    super(marca, modelo);
    this.numPortas = numPortas;
  }

  imprimir_numero_portas() {
    console.log(`Numero de portas: ${this.numPortas}`);
  }
}

const meuCarro = new Carro("Toyota", "Corolla", 4);
meuCarro.imprimirInformacoes();
meuCarro.imprimir_numero_portas();
