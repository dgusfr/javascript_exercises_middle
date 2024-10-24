function criarLista() {
  const lista = document.createElement("ul");
  for (let i = 1; i <= 5; i++) {
    const item = document.createElement("li");
    item.textContent = `Item ${i}`;
    lista.appendChild(item);
  }
  document.body.appendChild(lista);
}
