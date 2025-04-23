const textoDigitando = document.getElementById('texto-digitando');
const cursor = document.getElementById('cursor');
const palavras = window.palavras || ["Desenvolvedora.", "Freelancer.", "Designer.", "Front-end."];
let palavraIndex = 0;
let charIndex = 0;
let digitando = true;
const velocidadeDigitar = 150; // Velocidade em milissegundos para digitar cada letra
const velocidadeApagar = 75;   // Velocidade em milissegundos para apagar cada letra
const tempoEspera = 1500;     // Tempo em milissegundos antes de apagar a palavra

function digitar() {
  if (charIndex < palavras[palavraIndex].length) {
    textoDigitando.textContent += palavras[palavraIndex].charAt(charIndex);
    charIndex++;
    setTimeout(digitar, velocidadeDigitar);
  } else {
    digitando = false;
    setTimeout(apagar, tempoEspera);
  }
}

function apagar() {
  if (charIndex > 0) {
    textoDigitando.textContent = palavras[palavraIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(apagar, velocidadeApagar);
  } else {
    digitando = true;
    palavraIndex = (palavraIndex + 1) % palavras.length;
    setTimeout(digitar, velocidadeDigitar);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  if (textoDigitando && cursor) {
    setTimeout(digitar, velocidadeDigitar + 200); // Inicia a digitação com um pequeno delay
  }
});