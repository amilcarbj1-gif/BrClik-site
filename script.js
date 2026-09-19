// Guarda o botão numa variável, procurando pelo id dele
const botao = document.getElementById("botao-alternar");

// Guarda a seção numa variável, procurando pelo id dela
const secao = document.getElementById("secao-destaques");

// Diz ao navegador: "quando o botão for clicado, execute esta função"
botao.addEventListener("click", function () {

  // Alterna a classe "escondido" na seção: se não tem, adiciona; se tem, remove
  secao.classList.toggle("escondido");

  // Troca o texto do botão dependendo se a seção está escondida ou não
  if (secao.classList.contains("escondido")) {
    botao.textContent = "Mostrar seção";
  } else {
    botao.textContent = "Esconder seção";
  }
});