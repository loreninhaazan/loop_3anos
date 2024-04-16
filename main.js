
function verificarTime() {
  
  var continuarPerguntando = true;

  while (continuarPerguntando) {
    
    var respostaTime = prompt("Qual o melhor esporte?");

    
    if (respostaTime.toLowerCase() === "vôlei") {
      alert("Isso mesmo! O volêi é o melhor esporte!");
      continuarPerguntando = false; // Sai do loop após a resposta correta
    } else {
      alert("Tente novamente!.");
    }
  }
}

// Chamada da função para iniciar o processo
verificarTime();

  
