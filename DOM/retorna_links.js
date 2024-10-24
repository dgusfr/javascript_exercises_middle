function buscarLinks() {
  const links = [];
  const elementos = document.getElementsByTagName("a");
  for (let i = 0; i < elementos.length; i++) {
    links.push(elementos[i].href);
  }
  return links;
}
