function somaArray(numeros) {
  let soma = 0;
  numeros.forEach((numero) => {
    soma += numero;
  });
  return soma;
}

const arrayDeNumeros = [1, 2, 3, 4, 5];
console.log(somaArray(arrayDeNumeros));