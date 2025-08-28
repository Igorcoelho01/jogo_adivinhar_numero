
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1
mensagemInicial()
console.log(numeroSecreto)

function exibirTextoNaTela(tag, texto) {
  let campo = document.querySelector(tag);
  campo.innerHTML = texto;
}

function mensagemInicial() {
  exibirTextoNaTela('h1', 'Jogo do número secreto');
  exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
}

function verificarChute() {
  let chute = document.querySelector('input').value;

  if (chute == numeroSecreto) {
    let pluralTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
    exibirTextoNaTela('h1', ' Você acertou.');
    exibirTextoNaTela('p', `Com ${tentativas} ${pluralTentativa}`);
    document.getElementById('reiniciar').removeAttribute('disabled');
  } else {
    if (chute > numeroSecreto) {
      exibirTextoNaTela('p', 'O numero é menor.');
    } else {
      exibirTextoNaTela('p', 'O numero é maior.');
    }
    tentativas++;
    limparChute();
  }
}

function gerarNumeroAleatorio() {
  return parseInt(Math.random() * 10 + 1);
}

function limparChute() {
  chute = document.querySelector('input');
  chute.value = '';
}

function reiniciar() {
  numeroSecreto = gerarNumeroAleatorio();
  console.log(numeroSecreto)
  limparChute();
  tentativas = 1;
  mensagemInicial();
  document.getElementById('reiniciar').setAttribute('disabled');
}