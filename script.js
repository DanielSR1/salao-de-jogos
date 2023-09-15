// Advinhe o número JavaScript
const numero = Math.floor(Math.random() * 100) + 1;
let tentativas = 0;
let vidas = 5;
let jogoTerminado = false;

function checkGuess() {
  if (jogoTerminado) {
    location.reload();
    return;
  }

  const guess = parseInt(document.getElementById("guess").value);
  tentativas = tentativas + 1;
  vidas = vidas - 1;

  if (isNaN(guess)) {
    setMessage("Digite um número válido.");
  } else if (guess === numero) {
    setMessage(`Parabéns! Você acertou com ${tentativas} tentativas.`);
    jogoTerminado = true;
    document.getElementsByTagName("button")[0].textContent = "Reiniciar";
    disableInputAndButton();
  } else if (vidas === 0) {
    setMessage(`Você perdeu :( o número era ${numero}`);
    jogoTerminado = true;
    document.getElementsByTagName("button")[0].textContent = "Reiniciar";
    setvida(`Vidas restantes ${vidas}`);
    disableInputAndButton();
  } else if (guess < numero) {
    setMessage(`Tente um número maior que ${guess}.`);
    setvida(`Vidas restantes ${vidas}`);
  } else if (guess > numero) {
    setMessage(`Tente um número menor que ${guess}.`);
    setvida(`Vidas restantes ${vidas}`);
  }
  if (vidas === 0 && guess !== numero) {
    jogoTerminado = true;
    document.getElementsByTagName("button")[0].textContent = "Reiniciar";
    disableInputAndButton();
  }
}

function setMessage(message) {
  document.getElementById("message").textContent = message;
}

function setvida(vida) {
  document.getElementById("vida").textContent = vida;
}




// pedra papale e tesoura javascript

// Função para gerar a escolha aleatória da máquina
function computerPlay() {
  const choices = [" pedra ", " papel ", " tesoura "];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

// Função para atualizar a pontuação na tela
function updateScore(playerScore, computerScore) {
  document.getElementById("playerScore").textContent = playerScore;
  document.getElementById("computerScore").textContent = computerScore;
}

// Função para determinar o vencedor da rodada
function playRound(playerSelection) {
  const computerSelection = computerPlay();
  let resultMessage = "";

  if (playerSelection === computerSelection) {
      resultMessage = "Empate! Tente novamente.";
  } else if (
      (playerSelection === " pedra " && computerSelection === " tesoura ") ||
      (playerSelection === " papel " && computerSelection === " pedra ") ||
      (playerSelection === " tesoura " && computerSelection === " papel ")
  ) {
      resultMessage = "a máquina escolheu" + computerSelection + "Você venceu esta rodada!";
      playerScore++;
  } else {
      resultMessage = "A máquina escolheu" + computerSelection + "venceu esta rodada.";
      computerScore++;
  }

  updateScore(playerScore, computerScore);

  // Atualiza o resultado na tela
  document.getElementById("result").textContent = resultMessage;
}

let playerScore = 0;
let computerScore = 0;

// Adiciona eventos de clique aos botões
document.getElementById(" pedra ").addEventListener("click", () => {
  playRound(" pedra ");
});

document.getElementById(" papel ").addEventListener("click", () => {
  playRound(" papel ");
});

document.getElementById(" tesoura ").addEventListener("click", () => {
  playRound(" tesoura ");
});


