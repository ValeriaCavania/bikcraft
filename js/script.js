//Ativar Links do Menu
const links = document.querySelectorAll(".header-menu a");

function ativarLink(link) {
  const url = location.href;
  const href = link.href;
  if (url.includes(href)) {
    link.classList.add("ativo");
  }
}
links.forEach(ativarLink);

//Ativar items do Orçamento
const parametros = new URLSearchParams(location.search);
function ativarProduto(parametro) {
  const elemento = document.getElementById(parametro);
  if (elemento) {
    elemento.checked = true;
  }
}
parametros.forEach(ativarProduto);

//Perguntas frequentes

const perguntas = document.querySelectorAll(".perguntas button");

function ativarPergunta(event) {
  const pergunta = event.currentTarget; //acesso ao elemento clicado pelo evento de clique
  const controls = pergunta.getAttribute("aria-controls"); //pega o valor que está dentro de aria-controls

  const resposta = document.getElementById(controls); //com constrols tem o mesmo valor que ID = "perguntaX", usa apenas o controls. É o mesmo valor.
  resposta.classList.toggle("ativa"); //com essa propridade toggle (liga/desliga...mostra/desmostra), usa a classe ativa (display: block;) para aparecer a resposta da pergunta, mas a aria-expanded não muda o seu valor, de false para true (true mostra resposta, false não mostra). Como fazer isso?

  const ativa = resposta.classList.contains("ativa"); //constanis (contem?) na resposta.classList o valor true ou false? DEPENDE, toggle está como "ativa" ou não? Se ativa = true, se não ativa = false.
  pergunta.setAttribute("aria-expanded", ativa); //define o novo valor de aria-expanded para o valor que está na const ativa.
}

function eventosPerguntas(pergunta) {
  //console.log(pergunta);
  pergunta.addEventListener("click", ativarPergunta);
}

perguntas.forEach(eventosPerguntas);
