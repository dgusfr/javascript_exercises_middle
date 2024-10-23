function converterParaMaiusculas(frutas) {
  return frutas.map((fruta) => fruta.toUpperCase());
}

const lista_de_frutas = ["banana", "maçã", "laranja"];
console.log(converterParaMaiusculas(lista_de_frutas));
