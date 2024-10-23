function encontrarMaior(array) {
  if (array.length === 0) {
    return "A array está vazia.";
  }
  return Math.max(...array);
}

const algunsNumeros = [10, 5, 20, 48, 15];
console.log(encontrarMaior(algunsNumeros));
