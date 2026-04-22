const formulario = document.querySelector("form");

function formularioEnviado(resposta) {
  if (resposta.ok) {
    formulario.innerHTML =
      "<p class='font-2-l' style='grid-column: 1/-1; padding: 1rem; border-radius: 4px; background: #f7f7f7;'><span style='color: #317a00;'>Mensagem enviada</span>, em breve entraremos em contato. Geralmente respondemos em 24 horas.<p>";
  } else {
    formulario.innerHTML =
      "<p class='font-2-l' style='grid-column: 1/-1; padding: 1rem; border-radius: 4px; background:  #f7f7f7;'><span style= 'color: #e00000;'>Erro no envio</span>, você pode enviar diretamente para o nosso email em: contato@bikcraft.net</p>";
  }
}

function enviarFormulario(event) {
  event.preventDefault();
  const botao = document.querySelector("form button");
  botao.disabled = true; //desabilita o botao para nao enviar mais de uma vez o formulario com o click.
  botao.innerText = "Enviando...";

  const data = new FormData(formulario); //formData tem a relação chave-valor com os campos do formulario.

  fetch("./enviar.php", {
    //funcao que recebe a url da qual se envia dados e objetos com as propriedades, method sendo post.
    method: "POST",
    body: data,
  }).then(formularioEnviado); //then é executado se o fecth obteve sucesso ou nao.
}

formulario.addEventListener("submit", enviarFormulario);
